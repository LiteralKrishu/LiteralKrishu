/** Deterministic, centered 3D sphere simulation. Units are Three.js world units. */
export type CloudBody = { x: number; y: number; z: number; vx: number; vy: number; vz: number; r: number; mass: number }
export type CloudBounds = { width: number; height: number; depth: number }
export type CloudPointer = { x: number; y: number; z: number; active: boolean; r: number }
export const CLOUD_FIXED_STEP = 1 / 120
export const CLOUD_MAX_SPEED = 14
const WALL_GAP = .04

function seededRandom(seed: number) {
    let state = seed >>> 0
    return () => {
        state = (Math.imul(state, 1664525) + 1013904223) >>> 0
        return state / 4294967296
    }
}

/** Return a varied cloud; no grid or home positions remain in its subsequent motion. */
export function createCloud(count: number, width: number, height: number, depth: number): CloudBody[] {
    if (!Number.isInteger(count) || count < 0) throw new RangeError('Cloud count must be a nonnegative integer.')
    if (![width, height, depth].every(value => Number.isFinite(value) && value > .2)) throw new RangeError('Cloud dimensions must be finite and greater than 0.2.')
    if (!count) return []
    const random = seededRandom(90210 + count)
    const compact = width < 8
    const nominalMax = compact ? 1.02 : 1.75
    const packingMax = Math.cbrt(width * height * depth * .48 / count / (4 * Math.PI / 3))
    let radiusMax = Math.min(nominalMax, packingMax, Math.min(width, height, depth) * .24)
    let slots: { x: number; y: number; z: number; rank: number }[] = []
    // A face-centered seed packs oversized spheres reliably; it is only initial geometry,
    // never an attraction target. All positions immediately enter the free 3D simulation.
    for (let attempt = 0; attempt < 100; attempt++) {
        const spacing = (radiusMax * 2 + .035) / Math.sqrt(2)
        const counts = [width, height, depth].map(size => Math.max(1, Math.floor((size - 2 * radiusMax - 2 * WALL_GAP) / spacing) + 1))
        slots = []
        for (let ix = 0; ix < counts[0]; ix++) {
            for (let iy = 0; iy < counts[1]; iy++) {
                for (let iz = 0; iz < counts[2]; iz++) {
                    if ((ix + iy + iz) % 2) continue
                    const x = (ix - (counts[0] - 1) / 2) * spacing
                    const y = (iy - (counts[1] - 1) / 2) * spacing
                    const z = (iz - (counts[2] - 1) / 2) * spacing
                    slots.push({ x, y, z, rank: (x / width) ** 2 + (y / height) ** 2 + (z / depth) ** 2 + random() * .06 })
                }
            }
        }
        if (slots.length >= count) break
        radiusMax *= .975
    }
    if (slots.length < count) throw new RangeError('The requested cloud cannot fit inside these bounds.')
    slots.sort((a, b) => a.rank - b.rank)
    const bodies: CloudBody[] = []
    for (let i = 0; i < count; i++) {
        const radius = radiusMax * (.86 + random() * .14)
        const slot = slots[i]
        const jitter = (radiusMax - radius) * .25
        const body: CloudBody = {
            x: slot.x + (random() * 2 - 1) * jitter,
            y: slot.y + (random() * 2 - 1) * jitter,
            z: slot.z + (random() * 2 - 1) * jitter,
            vx: (random() * 2 - 1) * .45,
            vy: (random() * 2 - 1) * .35,
            vz: (random() * 2 - 1) * .45,
            r: radius,
            mass: radius ** 3,
        }
        bodies.push(body)
    }
    return bodies
}

export function clampCloudBody(body: CloudBody, bounds: CloudBounds, bounce = false) {
    const limits = [bounds.width / 2 - body.r - WALL_GAP, bounds.height / 2 - body.r - WALL_GAP, bounds.depth / 2 - body.r - WALL_GAP]
    const axes = ['x', 'y', 'z'] as const
    const velocities = ['vx', 'vy', 'vz'] as const
    axes.forEach((axis, i) => {
        const limit = Math.max(0, limits[i])
        const velocity = velocities[i]
        if (bounce && (body[axis] < -limit && body[velocity] < 0 || body[axis] > limit && body[velocity] > 0)) body[velocity] *= -.62
        body[axis] = Math.max(-limit, Math.min(limit, body[axis]))
    })
}

/** Frictionless sphere contact, with mass-weighted correction and dissipative restitution. */
export function solveCloudContact(a: CloudBody, b: CloudBody, fixedA = false, fixedB = false) {
    const dx = b.x - a.x
    const dy = b.y - a.y
    const dz = b.z - a.z
    const distance = Math.hypot(dx, dy, dz)
    const overlap = a.r + b.r + .012 - distance
    if (overlap <= 0) return
    const nx = distance > .00001 ? dx / distance : 1
    const ny = distance > .00001 ? dy / distance : 0
    const nz = distance > .00001 ? dz / distance : 0
    const invA = fixedA ? 0 : 1 / a.mass
    const invB = fixedB ? 0 : 1 / b.mass
    const invSum = invA + invB
    if (!invSum) return
    const correction = Math.max(0, overlap - .001) * .85 / invSum
    a.x -= nx * correction * invA
    a.y -= ny * correction * invA
    a.z -= nz * correction * invA
    b.x += nx * correction * invB
    b.y += ny * correction * invB
    b.z += nz * correction * invB
    const closing = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny + (b.vz - a.vz) * nz
    if (closing >= 0) return
    const impulse = -(1 + .7) * closing / invSum
    a.vx -= nx * impulse * invA
    a.vy -= ny * impulse * invA
    a.vz -= nz * impulse * invA
    b.vx += nx * impulse * invB
    b.vy += ny * impulse * invB
    b.vz += nz * impulse * invB
}

function limitSpeed(body: CloudBody) {
    const speed = Math.hypot(body.vx, body.vy, body.vz)
    if (speed <= CLOUD_MAX_SPEED) return
    const scale = CLOUD_MAX_SPEED / speed
    body.vx *= scale
    body.vy *= scale
    body.vz *= scale
}

/** Apply one fixed step. fixedIndex is a root-controlled dragged or keyboard-focused body. */
export function stepCloud(bodies: CloudBody[], bounds: CloudBounds, dt: number, time: number, pointer: CloudPointer, fixedIndex: number | null = null) {
    if (dt <= 0) return
    const step = Math.min(dt, 1 / 30)
    const damping = Math.exp(-.85 * step)
    bodies.forEach((body, index) => {
        if (index === fixedIndex) return
        // Center seeking forces, stronger on Y, plus gentle circulation to keep a living cloud.
        let ax = -body.x * .9 + body.z * .46 + Math.sin(time * .85 + index * 1.7) * .16
        let ay = -body.y * 1.65 + Math.cos(time * .7 + index * 2.1) * .22
        let az = -body.z * .9 - body.x * .46 + Math.sin(time * .65 + index) * .12
        if (pointer.active) {
            const dx = body.x - pointer.x
            const dy = body.y - pointer.y
            const dz = body.z - pointer.z
            const distance = Math.hypot(dx, dy, dz)
            const reach = body.r + pointer.r + .7
            if (distance < reach) {
                const force = 95 * (1 - distance / reach) ** 2
                ax += (distance > .0001 ? dx / distance : 1) * force
                ay += (distance > .0001 ? dy / distance : 0) * force
                az += (distance > .0001 ? dz / distance : 0) * force
            }
        }
        body.vx = (body.vx + ax * step) * damping
        body.vy = (body.vy + ay * step) * damping
        body.vz = (body.vz + az * step) * damping
        limitSpeed(body)
        body.x += body.vx * step
        body.y += body.vy * step
        body.z += body.vz * step
    })
    resolveCloudContacts(bodies, bounds, fixedIndex)
}

/** Resolve repositioned balls without advancing time, forces, or ambient animation. */
export function resolveCloudContacts(bodies: CloudBody[], bounds: CloudBounds, fixedIndex: number | null = null) {
    for (let pass = 0; pass < 7; pass++) {
        for (let i = 0; i < bodies.length; i++) {
            for (let j = i + 1; j < bodies.length; j++) solveCloudContact(bodies[i], bodies[j], i === fixedIndex, j === fixedIndex)
        }
        bodies.forEach(body => clampCloudBody(body, bounds, true))
    }
    bodies.forEach((body, index) => { if (index !== fixedIndex) limitSpeed(body) })
}

export function scatterCloud(bodies: CloudBody[], seed: number, fixedIndex: number | null = null) {
    const random = seededRandom(seed + 8128)
    bodies.forEach((body, index) => {
        if (index === fixedIndex) return
        const azimuth = random() * Math.PI * 2
        const vertical = random() * 2 - 1
        const horizontal = Math.sqrt(1 - vertical * vertical)
        const speed = 4.5 + random() * 3
        body.vx = Math.cos(azimuth) * horizontal * speed
        body.vy = vertical * speed
        body.vz = Math.sin(azimuth) * horizontal * speed
    })
}
