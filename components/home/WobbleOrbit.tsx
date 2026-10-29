'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/** An adapted orbital scene based on Wobble's MIT-licensed homepage concept. */
export default function WobbleOrbit() {
  const mount = useRef<HTMLDivElement>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const host = mount.current;
    if (!host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    } catch {
      setFallback(true);
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.z = 11.5;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    host.appendChild(renderer.domElement);

    const materials: THREE.Material[] = [];
    const geometries: THREE.BufferGeometry[] = [];
    const mat = <T extends THREE.Material>(value: T) => { materials.push(value); return value; };
    const geo = <T extends THREE.BufferGeometry>(value: T) => { geometries.push(value); return value; };
    const artifact = new THREE.Group();
    scene.add(artifact);

    const graphite = mat(new THREE.MeshStandardMaterial({ color: 0x39434f, roughness: 0.28, metalness: 0.9 }));
    const steel = mat(new THREE.MeshStandardMaterial({ color: 0x7995b3, roughness: 0.28, metalness: 0.75 }));
    const silver = mat(new THREE.MeshStandardMaterial({ color: 0xb8c5d4, roughness: 0.35, metalness: 0.7 }));
    const glow = mat(new THREE.MeshBasicMaterial({ color: 0x8fb2da, transparent: true, opacity: 0.75 }));

    const outer = new THREE.Mesh(geo(new THREE.TorusGeometry(3.35, 0.07, 12, 120)), graphite);
    artifact.add(outer);
    const middle = new THREE.Mesh(geo(new THREE.TorusGeometry(2.55, 0.055, 12, 100)), steel);
    middle.rotation.x = Math.PI / 3;
    artifact.add(middle);
    const inner = new THREE.Mesh(geo(new THREE.TorusGeometry(1.72, 0.04, 10, 80)), silver);
    inner.rotation.y = Math.PI / 3;
    artifact.add(inner);

    const tickGeometry = geo(new THREE.BoxGeometry(0.035, 0.17, 0.045));
    for (let i = 0; i < 48; i++) {
      const a = i * Math.PI * 2 / 48;
      const tick = new THREE.Mesh(tickGeometry, silver);
      tick.position.set(Math.cos(a) * 3.35, Math.sin(a) * 3.35, 0);
      tick.rotation.z = a - Math.PI / 2;
      outer.add(tick);
    }

    const core = new THREE.Group();
    const crystal = new THREE.Mesh(
      geo(new THREE.IcosahedronGeometry(0.97, 1)),
      mat(new THREE.MeshPhysicalMaterial({ color: 0x6484a7, metalness: 0.35, roughness: 0.2, transparent: true, opacity: 0.78, clearcoat: 0.8 })),
    );
    const wire = new THREE.Mesh(
      geo(new THREE.IcosahedronGeometry(0.99, 1)),
      mat(new THREE.MeshBasicMaterial({ color: 0xdde9fa, wireframe: true, transparent: true, opacity: 0.4 })),
    );
    core.add(crystal, wire);
    artifact.add(core);

    const needleGeometry = geo(new THREE.CylinderGeometry(0.011, 0.011, 5.7, 8));
    const horizontal = new THREE.Mesh(needleGeometry, silver);
    horizontal.rotation.z = Math.PI / 2;
    const vertical = new THREE.Mesh(needleGeometry, silver);
    const depth = new THREE.Mesh(needleGeometry, graphite);
    depth.rotation.x = Math.PI / 2;
    artifact.add(horizontal, vertical, depth);
    const tipGeometry = geo(new THREE.SphereGeometry(0.065, 10, 10));
    for (const [x, y] of [[2.85, 0], [-2.85, 0], [0, 2.85], [0, -2.85]]) {
      const tip = new THREE.Mesh(tipGeometry, glow);
      tip.position.set(x, y, 0);
      artifact.add(tip);
    }

    const stars = new Float32Array(210 * 3);
    for (let i = 0; i < 210; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 2.3 + Math.random() * 2.5;
      stars[i * 3] = Math.cos(theta) * radius;
      stars[i * 3 + 1] = (Math.random() - 0.5) * 6;
      stars[i * 3 + 2] = Math.sin(theta) * radius;
    }
    const starGeometry = geo(new THREE.BufferGeometry());
    starGeometry.setAttribute('position', new THREE.BufferAttribute(stars, 3));
    const particles = new THREE.Points(starGeometry, mat(new THREE.PointsMaterial({ color: 0x9aacc3, size: 0.035, transparent: true, opacity: 0.7 })));
    artifact.add(particles);

    scene.add(new THREE.AmbientLight(0x64778d, 2.2));
    const key = new THREE.DirectionalLight(0xeaf3ff, 3.8);
    key.position.set(-5, 7, 8);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x8aaed2, 2.4);
    rim.position.set(5, -5, 3);
    scene.add(rim);

    const resize = () => {
      const width = Math.max(host.clientWidth, 1);
      const height = Math.max(host.clientHeight, 1);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.render(scene, camera);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    let visible = true;
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: 0 });
    intersection.observe(host);
    let pointerX = 0;
    let pointerY = 0;
    let frame = 0;
    const onPointer = (event: PointerEvent) => {
      const box = host.getBoundingClientRect();
      pointerX = ((event.clientX - box.left) / Math.max(box.width, 1) - 0.5) * 0.5;
      pointerY = ((event.clientY - box.top) / Math.max(box.height, 1) - 0.5) * 0.5;
    };
    host.addEventListener('pointermove', onPointer, { passive: true });
    let previousFrame = performance.now();
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const now = performance.now();
      const delta = Math.min((now - previousFrame) / 1000, 0.06);
      previousFrame = now;
      if (!visible || reducedMotion.matches) return;
      outer.rotation.z += delta * 0.11;
      middle.rotation.y += delta * 0.2;
      inner.rotation.x -= delta * 0.16;
      core.rotation.y += delta * 0.26;
      core.rotation.x += delta * 0.1;
      particles.rotation.y += delta * 0.025;
      artifact.rotation.x += (-pointerY - artifact.rotation.x) * 0.035;
      artifact.rotation.y += (pointerX - artifact.rotation.y) * 0.035;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      host.removeEventListener('pointermove', onPointer);
      intersection.disconnect();
      observer.disconnect();
      geometries.forEach(item => item.dispose());
      materials.forEach(item => item.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mount} className={'wobble-orbit' + (fallback ? ' wobble-orbit-fallback' : '')} role="img" aria-label="Animated blue crystalline object inside rotating orbital rings">
    {fallback && <div className="wobble-orbit-static"><span /><span /><span /><i /></div>}
    <span className="wobble-orbit-label wobble-orbit-label-top">FIG. 01 / IDEAS IN MOTION</span>
    <span className="wobble-orbit-label wobble-orbit-label-bottom">BUILD · LEARN · ITERATE</span>
  </div>;
}
