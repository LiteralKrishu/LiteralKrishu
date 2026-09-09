import assert from 'node:assert/strict'
import { clampCloudBody, CLOUD_FIXED_STEP, CLOUD_MAX_SPEED, CloudBody, CloudBounds, createCloud, resolveCloudContacts, scatterCloud, solveCloudContact, stepCloud } from './cloud-physics'
const absentPointer = { x: 0, y: 0, z: 0, active: false, r: 1.5 }
function checkBounds(bodies: CloudBody[], bounds: CloudBounds) {
    bodies.forEach(body => {
        assert.ok(Object.values(body).every(Number.isFinite))
        assert.ok(Math.abs(body.x) + body.r <= bounds.width / 2 + .00001)
        assert.ok(Math.abs(body.y) + body.r <= bounds.height / 2 + .00001)
        assert.ok(Math.abs(body.z) + body.r <= bounds.depth / 2 + .00001)
        assert.ok(Math.hypot(body.vx, body.vy, body.vz) <= CLOUD_MAX_SPEED + .00001)
    })
}
function worstOverlap(bodies: CloudBody[]) {
    let overlap = 0
    bodies.forEach((a, i) => bodies.slice(i + 1).forEach(b => { overlap = Math.max(overlap, a.r + b.r - Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z)) }))
    return overlap
}
function sceneBounds(width: number, height: number, cameraZ: number, depth: number): CloudBounds {
    const viewHeight = 2 * Math.tan(19 * Math.PI / 180) * (cameraZ - depth / 2)
    return { width: viewHeight * width / height * .94, height: viewHeight * .9, depth }
}
const desktop = sceneBounds(974, 680, 18, 8)
const mobile = sceneBounds(390, 600, 16, 7)
const narrowMobile = sceneBounds(272, 600, 16, 7)
for (const bounds of [desktop, mobile, { width: 8, height: 10, depth: 6 }]) {
    for (const count of [19, 38, 57, 95]) {
        const a = createCloud(count, bounds.width, bounds.height, bounds.depth)
        assert.deepEqual(a, createCloud(count, bounds.width, bounds.height, bounds.depth))
        checkBounds(a, bounds)
        assert.equal(worstOverlap(a), 0)
        assert.equal(new Set(a.map(body => body.r)).size, count)
    }
}
// Paused repositioning resolves overlaps without applying center forces or moving time forward.
{
    const a = makeBody(0, 0)
    const b = makeBody(.2, 0)
    resolveCloudContacts([a, b], desktop, 0)
    assert.equal(a.x, 0)
    assert.ok(b.x - a.x >= a.r + b.r - .01)
    assert.equal(a.vx, 0)
    assert.equal(b.vx, 0)
    const separated = createCloud(38, desktop.width, desktop.height, desktop.depth)
    const unchanged = structuredClone(separated)
    resolveCloudContacts(separated, desktop)
    assert.deepEqual(separated, unchanged)
}
assert.throws(() => createCloud(-1, 22, 12, 8), RangeError)
assert.throws(() => createCloud(57, 0, 12, 8), RangeError)
function makeBody(x: number, vx: number, r = .7): CloudBody { return { x, y: 0, z: 0, vx, vy: 0, vz: 0, r, mass: r ** 3 } }
{
    const a = makeBody(0, 2, 1)
    const b = makeBody(1.5, -1, .7)
    const momentum = a.mass * a.vx + b.mass * b.vx
    const energy = a.mass * a.vx ** 2 + b.mass * b.vx ** 2
    solveCloudContact(a, b)
    assert.ok(Math.abs(a.mass * a.vx + b.mass * b.vx - momentum) < 1e-10)
    assert.ok(a.mass * a.vx ** 2 + b.mass * b.vx ** 2 < energy)
    assert.ok(Math.abs(b.vx - a.vx - 3 * .7) < 1e-10)
    const fixed = makeBody(0, 0)
    const moving = makeBody(1, -3)
    solveCloudContact(fixed, moving, true)
    assert.equal(fixed.x, 0)
    assert.equal(fixed.vx, 0)
    assert.ok(moving.vx > 0)
}
{
    const a = makeBody(0, -1)
    const b = makeBody(0, 1)
    solveCloudContact(a, b)
    assert.ok(a.x < b.x && Object.values(a).every(Number.isFinite))
    assert.equal(a.vx, -1)
    assert.equal(b.vx, 1)
    a.x = -100
    a.vx = -5
    clampCloudBody(a, desktop, true)
    assert.ok(a.vx > 0)
}
// A free sphere is pulled into the center, with stronger Y acceleration.
{
    const sphere = makeBody(4, 0)
    sphere.y = 4
    stepCloud([sphere], desktop, CLOUD_FIXED_STEP, 0, absentPointer)
    assert.ok(sphere.vx < 0 && sphere.vy < sphere.vx)
    for (let i = 0; i < 360; i++) stepCloud([sphere], desktop, CLOUD_FIXED_STEP, i * CLOUD_FIXED_STEP, absentPointer)
    assert.ok(Math.hypot(sphere.x, sphere.y, sphere.z) < 2)
}
// Cursor force reverses a sphere near the center instead of producing a merely visual hover.
{
    const sphere = makeBody(.6, 0)
    for (let i = 0; i < 30; i++) stepCloud([sphere], desktop, CLOUD_FIXED_STEP, i * CLOUD_FIXED_STEP, { ...absentPointer, active: true }, null)
    assert.ok(sphere.x > 1.1)
}
{
    const a = createCloud(38, mobile.width, mobile.height, mobile.depth)
    const b = structuredClone(a)
    const focused = { ...a[2] }
    scatterCloud(a, 2, 2)
    scatterCloud(b, 2, 2)
    assert.deepEqual(a, b)
    assert.deepEqual(a[2], focused)
    assert.ok(Math.hypot(a[0].vx, a[0].vy, a[0].vz) > 4)
}
// Repeated impulses, a sweeping 3D cursor, and a kinematic drag remain bounded and finite.
for (const bounds of [desktop, mobile, narrowMobile]) {
    const count = 19
    const bodies = createCloud(count, bounds.width, bounds.height, bounds.depth)
    let maximumOverlap = 0
    for (let step = 0; step < 2400; step++) {
        const time = step * CLOUD_FIXED_STEP
        if (step < 1200 && step % 240 === 0) scatterCloud(bodies, step)
        const dragging = step > 600 && step < 900
        if (dragging) {
            bodies[0].x = Math.sin(time) * bounds.width * .3
            bodies[0].y = Math.cos(time) * bounds.height * .2
            bodies[0].z = Math.sin(time * 2) * bounds.depth * .2
            bodies[0].vx = 0; bodies[0].vy = 0; bodies[0].vz = 0
        }
        stepCloud(bodies, bounds, CLOUD_FIXED_STEP, time, { x: Math.sin(time * 2) * 3, y: Math.cos(time) * 2, z: Math.sin(time) * 2, active: step < 1600, r: bounds === desktop ? 2.6 : 1.6 }, dragging ? 0 : null)
        checkBounds(bodies, bounds)
        if (step > 2000) maximumOverlap = Math.max(maximumOverlap, worstOverlap(bodies))
    }
    assert.ok(maximumOverlap < .065, `Settled sphere overlap ${maximumOverlap}`)
    const width = Math.max(...bodies.map(body => body.x + body.r)) - Math.min(...bodies.map(body => body.x - body.r))
    assert.ok(width >= bounds.width * .7, `Settled cloud too small: ${width} world units`)
}
// Oversized front spheres are legible at real stage sizes, while every sphere remains inside
// the camera's frustum under repeated scatter. Bounds use the closest possible sphere surface.
for (const [width, height, cameraZ, depth, minimumDiameter] of [[974, 680, 18, 8, 160], [390, 600, 16, 7, 100], [320, 600, 16, 7, 95], [272, 600, 16, 7, 85]]) {
    const bounds = sceneBounds(width, height, cameraZ, depth)
    const bodies = createCloud(19, bounds.width, bounds.height, bounds.depth)
    for (let step = 0; step < 1200; step++) {
        if (step < 600 && step % 200 === 0) scatterCloud(bodies, step + 1)
        stepCloud(bodies, bounds, CLOUD_FIXED_STEP, step * CLOUD_FIXED_STEP, absentPointer)
        bodies.forEach(body => {
            const nearHalfHeight = (cameraZ - body.z - body.r) * Math.tan(19 * Math.PI / 180)
            assert.ok(Math.abs(body.x) + body.r < nearHalfHeight * width / height)
            assert.ok(Math.abs(body.y) + body.r < nearHalfHeight)
        })
    }
    const diameters = bodies.filter(body => body.z >= 0)
        .map(body => body.r * height / (Math.tan(19 * Math.PI / 180) * (cameraZ - body.z))).sort((a, b) => a - b)
    const median = diameters[Math.floor(diameters.length / 2)]
    assert.ok(median >= minimumDiameter, `Front sphere diameter ${median}px is too small at stage width ${width}`)
    assert.ok(median < (width > 600 ? 225 : 140), `Front sphere diameter ${median}px is too large at stage width ${width}`)
}
function simulate(displayRate: number) {
    const bodies = createCloud(38, desktop.width, desktop.height, desktop.depth)
    scatterCloud(bodies, 4)
    let accumulator = 0
    let time = 0
    for (let frame = 0; frame < displayRate * 2; frame++) {
        accumulator += 1 / displayRate
        while (accumulator + 1e-12 >= CLOUD_FIXED_STEP) {
            time += CLOUD_FIXED_STEP
            stepCloud(bodies, desktop, CLOUD_FIXED_STEP, time, absentPointer)
            accumulator -= CLOUD_FIXED_STEP
        }
    }
    return bodies
}
assert.deepEqual(simulate(60), simulate(144))
console.log('3D cloud checks passed: 12 seeded layouts, 19-ball oversized desktop/mobile sizes, camera-frustum safety during scatter, contact momentum/restitution, paused contacts, center/cursor forces, 3 viewport stress tests, and 60/144Hz consistency.')
