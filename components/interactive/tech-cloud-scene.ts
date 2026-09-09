import * as THREE from 'three';
import { CLOUD_FIXED_STEP, createCloud, scatterCloud, stepCloud, resolveCloudContacts, type CloudBody, type CloudBounds } from './cloud-physics';
import { technologies } from './technologies';

export interface TechCloudControls {
  pause(value: boolean): void;
  scatter(): void;
  reset(): void;
  nudge(index: number, x?: number, y?: number): void;
  release(): void;
  dispose(): void;
}

/** Local SVG logos stay sharp on the curved sphere surface. */
function labelTexture(technology: typeof technologies[number], repaint: () => void, cleanups: (() => void)[]) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Technology labels require a 2D canvas context.');
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const draw = (logo?: HTMLImageElement) => {
    ctx.clearRect(0, 0, 512, 512);
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(256, 218, 151, 0, Math.PI * 2); ctx.fill();
    if (logo) ctx.drawImage(logo, 149, 111, 214, 214);
    else {
      ctx.fillStyle = '#211631'; ctx.font = 'bold 100px Arial';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(technology.mark, 256, 218);
    }
    ctx.fillStyle = '#211631'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    const name = technology.name === 'Multimodal systems' ? 'Multimodal' : technology.name;
    ctx.font = `bold ${name.length > 9 ? 35 : 42}px Arial`;
    ctx.fillText(name, 256, 422);
    texture.needsUpdate = true;
  };
  draw();
  const image = new Image();
  image.onload = () => { draw(image); repaint(); };
  image.onerror = () => { /* The readable abbreviation remains if a local logo cannot load. */ };
  image.src = technology.logo;
  cleanups.push(() => { image.onload = null; image.onerror = null; });
  return texture;
}

export function createTechCloud(host: HTMLDivElement, onCount: (count: number) => void, onUnavailable: () => void): TechCloudControls {
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  host.appendChild(canvas);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, .1, 80);
  camera.position.z = 18;
  scene.add(new THREE.HemisphereLight('#ffffff', '#675078', 2.4));
  const key = new THREE.DirectionalLight('#ffffff', 3.5);
  key.position.set(-7, 10, 14); scene.add(key);
  const rim = new THREE.DirectionalLight('#c6b0ff', 2.5);
  rim.position.set(9, 2, -5); scene.add(rim);
  const fill = new THREE.DirectionalLight('#c0ddff', 1);
  fill.position.set(-9, -4, 6); scene.add(fill);
  const geometry = new THREE.SphereGeometry(1, 28, 20);
  // A curved patch keeps the mark attached to the surface of each real sphere.
  const decal = new THREE.SphereGeometry(1.006, 20, 16, Math.PI * .2, Math.PI * .6, Math.PI * .2, Math.PI * .6);
  const logoCleanups: (() => void)[] = [];
  const textures = technologies.map(technology => labelTexture(technology, () => { if (!disposed) paint(); }, logoCleanups));
  const materials = technologies.map(t => new THREE.MeshPhysicalMaterial({ color: t.color, roughness: .29, metalness: .12, clearcoat: .85, clearcoatRoughness: .2 }));
  const labels = textures.map(map => new THREE.MeshBasicMaterial({ map, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1 }));
  let meshes: THREE.Mesh[] = [];
  let bodies: CloudBody[] = [];
  let bounds: CloudBounds = { width: 24, height: 12, depth: 8 };
  let frame = 0, last = 0, accumulator = 0, time = 0, seed = 0;
  let disposed = false, paused = false, visible = false, focused: number | null = null;
  let drag: { index: number; id: number; offset: THREE.Vector3; at: number; vx: number; vy: number } | null = null;
  const pointer = { x: 0, y: 0, z: 2, r: 1.8, active: false };
  const target = new THREE.Vector3();
  const ndc = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -2);

  function paint() {
    bodies.forEach((body, i) => {
      const mesh = meshes[i];
      mesh.position.set(body.x, body.y, body.z);
      mesh.scale.setScalar(body.r);
      mesh.rotation.set(Math.sin(time * .38 + i) * .22, Math.sin(time * .29 + i * 1.3) * .38, Math.sin(time * .32 + i * 2) * .16);
    });
    renderer.render(scene, camera);
  }
  function releaseDrag(throwBall = false) {
    if (!drag) return;
    const { index, id, at, vx, vy } = drag;
    drag = null;
    const body = bodies[index];
    if (body) {
      const canThrow = throwBall && !paused && performance.now() - at < 100;
      body.vx = canThrow ? vx : 0; body.vy = canThrow ? vy : 0;
    }
    if (canvas.hasPointerCapture(id)) canvas.releasePointerCapture(id);
    canvas.style.cursor = 'grab';
    pointer.active = false;
  }
  function reset() {
    releaseDrag(); focused = null; pointer.active = false;
    bodies = createCloud(meshes.length, bounds.width, bounds.height, bounds.depth);
    time = 0; accumulator = 0; paint();
  }
  function resize() {
    if (disposed || !host.clientWidth || !host.clientHeight) return;
    releaseDrag();
    const width = host.clientWidth, height = host.clientHeight;
    renderer.setSize(width, height);
    camera.position.z = width < 600 ? 16 : 18;
    camera.aspect = width / height; camera.updateProjectionMatrix();
    // Use the near side of the cloud for limits so front spheres cannot clip.
    const depth = width < 600 ? 7 : 8;
    const viewHeight = 2 * Math.tan(THREE.MathUtils.degToRad(38 / 2)) * (camera.position.z - depth / 2);
    bounds = { width: viewHeight * camera.aspect * .94, height: viewHeight * .9, depth };
    const count = technologies.length;
    if (meshes.length !== count) {
      meshes.forEach(mesh => scene.remove(mesh));
      meshes = Array.from({ length: count }, (_, i) => {
        const index = i % technologies.length;
        const mesh = new THREE.Mesh(geometry, materials[index]);
        mesh.userData.index = i;
        mesh.add(new THREE.Mesh(decal, labels[index]));
        scene.add(mesh); return mesh;
      });
      onCount(count);
    }
    pointer.r = width < 600 ? 1.6 : 2.6;
    reset();
  }
  function tick(now: number) {
    if (disposed) return;
    accumulator += last ? Math.min((now - last) / 1000, .05) : 0;
    last = now;
    while (accumulator >= CLOUD_FIXED_STEP) {
      time += CLOUD_FIXED_STEP;
      stepCloud(bodies, bounds, CLOUD_FIXED_STEP, time, pointer, drag?.index ?? focused);
      accumulator -= CLOUD_FIXED_STEP;
    }
    paint(); frame = requestAnimationFrame(tick);
  }
  function synchronize() {
    cancelAnimationFrame(frame); last = 0; accumulator = 0;
    if (!disposed && visible && !paused && !document.hidden) frame = requestAnimationFrame(tick);
  }
  function project(event: PointerEvent, z = 2) {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return false;
    ndc.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    plane.constant = -z;
    return !!raycaster.ray.intersectPlane(plane, target);
  }
  function move(event: PointerEvent) {
    if (drag && drag.id !== event.pointerId) return;
    const body = drag ? bodies[drag.index] : null;
    if (!project(event, body?.z ?? 2)) return;
    if (drag && body) {
      const now = performance.now(), dt = Math.max(.008, (now - drag.at) / 1000);
      const x = THREE.MathUtils.clamp(target.x + drag.offset.x, -bounds.width / 2 + body.r, bounds.width / 2 - body.r);
      const y = THREE.MathUtils.clamp(target.y + drag.offset.y, -bounds.height / 2 + body.r, bounds.height / 2 - body.r);
      drag.vx = THREE.MathUtils.clamp((x - body.x) / dt, -22, 22);
      drag.vy = THREE.MathUtils.clamp((y - body.y) / dt, -22, 22);
      body.x = x; body.y = y; body.vx = drag.vx; body.vy = drag.vy; drag.at = now;
      if (paused) resolveCloudContacts(bodies, bounds, drag.index);
      paint();
    } else {
      pointer.x = target.x; pointer.y = target.y;
      pointer.active = event.pointerType !== 'touch' && !paused;
    }
  }
  function down(event: PointerEvent) {
    if (event.button !== 0 || drag || !project(event)) return;
    const hit = raycaster.intersectObjects(meshes, false)[0];
    if (!hit) return;
    const index = hit.object.userData.index as number, body = bodies[index];
    if (!project(event, body.z)) return;
    focused = null; pointer.active = false;
    body.vx = body.vy = body.vz = 0;
    drag = { index, id: event.pointerId, offset: new THREE.Vector3(body.x - target.x, body.y - target.y, 0), at: performance.now(), vx: 0, vy: 0 };
    canvas.setPointerCapture(event.pointerId); canvas.style.cursor = 'grabbing';
  }
  const up = (event: PointerEvent) => { if (drag?.id === event.pointerId) releaseDrag(true); };
  const cancel = (event: PointerEvent) => { if (drag?.id === event.pointerId) releaseDrag(); };
  const leave = () => { pointer.active = false; };
  const visibility = () => { if (document.hidden) releaseDrag(); synchronize(); };
  const lostContext = (event: Event) => { event.preventDefault(); controls.dispose(); onUnavailable(); };
  canvas.addEventListener('pointermove', move);
  canvas.addEventListener('pointerdown', down);
  canvas.addEventListener('pointerup', up);
  canvas.addEventListener('pointercancel', cancel);
  canvas.addEventListener('lostpointercapture', cancel);
  canvas.addEventListener('pointerleave', leave);
  canvas.addEventListener('webglcontextlost', lostContext);
  document.addEventListener('visibilitychange', visibility);
  const observer = new IntersectionObserver(([entry]) => {
    if (disposed || !entry) return;
    visible = entry.isIntersecting;
    if (!visible) { releaseDrag(); pointer.active = false; }
    synchronize();
  });
  let resizeTimer: ReturnType<typeof setTimeout>;
  let observedWidth = host.clientWidth, observedHeight = host.clientHeight;
  const resizer = new ResizeObserver(() => {
    if (disposed || (host.clientWidth === observedWidth && host.clientHeight === observedHeight)) return;
    observedWidth = host.clientWidth; observedHeight = host.clientHeight;
    clearTimeout(resizeTimer);
    // Let the sidebar finish sliding before rebuilding the physical boundaries.
    resizeTimer = setTimeout(() => { if (!disposed) { resize(); synchronize(); } }, 140);
  });
  const controls: TechCloudControls = {
    pause(value) { paused = value; releaseDrag(); pointer.active = false; synchronize(); },
    scatter() { if (!paused) { focused = null; releaseDrag(); scatterCloud(bodies, ++seed); } },
    reset,
    nudge(index, x = 0, y = 0) {
      const body = bodies[index];
      if (!body) return;
      focused = index; pointer.active = false;
      body.z = bounds.depth / 2 - body.r;
      body.x = THREE.MathUtils.clamp(x ? body.x + x : body.x, -bounds.width / 2 + body.r, bounds.width / 2 - body.r);
      body.y = THREE.MathUtils.clamp(y ? body.y + y : body.y, -bounds.height / 2 + body.r, bounds.height / 2 - body.r);
      body.vx = body.vy = body.vz = 0;
      // Solve contacts even when paused so keyboard movement has a stable result.
      resolveCloudContacts(bodies, bounds, index);
      paint();
    },
    release() { focused = null; },
    dispose() {
      if (disposed) return;
      disposed = true; cancelAnimationFrame(frame); releaseDrag();
      observer.disconnect(); resizer.disconnect(); clearTimeout(resizeTimer);
      document.removeEventListener('visibilitychange', visibility);
      canvas.removeEventListener('pointermove', move); canvas.removeEventListener('pointerdown', down);
      canvas.removeEventListener('pointerup', up); canvas.removeEventListener('pointercancel', cancel);
      canvas.removeEventListener('lostpointercapture', cancel); canvas.removeEventListener('pointerleave', leave);
      canvas.removeEventListener('webglcontextlost', lostContext);
      logoCleanups.forEach(cleanup => cleanup());
      geometry.dispose(); decal.dispose();
      textures.forEach(texture => texture.dispose()); materials.forEach(material => material.dispose()); labels.forEach(material => material.dispose());
      renderer.dispose(); renderer.forceContextLoss(); canvas.remove(); scene.clear();
    },
  };
  try { resize(); observer.observe(host); resizer.observe(host); }
  catch (error) { controls.dispose(); throw error; }
  return controls;
}
