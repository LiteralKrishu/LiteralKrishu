"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { Suspense, useMemo, useRef } from "react"
import * as THREE from "three"

type HeroCanvasProps = {
  mode?: "wallpaper" | "card"
  className?: string
}

function RotatingEarth() {
  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader()
    loader.setCrossOrigin("anonymous")
    return loader.load("/assets/3d/texture_earth.jpg")
  }, [])

  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.4, 64, 64]} />
      <meshStandardMaterial map={texture} metalness={0.1} roughness={0.8} />
    </mesh>
  )
}

function Starfield({ count = 1000, radius = 15 }) {
  const positions = useMemo(() => {
    const pts = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = radius * Math.cbrt(Math.random())
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)
      pts.set([x, y, z], i * 3)
    }
    return pts
  }, [count, radius])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} sizeAttenuation color="#9aa1a7" />
    </points>
  )
}

export function HeroCanvas({ mode = "card", className }: HeroCanvasProps) {
  const isWallpaper = mode === "wallpaper"
  return (
    <div
      className={
        isWallpaper ? "fixed inset-0 -z-10 pointer-events-none" : `h-[70vh] w-full md:h-[80vh] ${className || ""}`
      }
    >
      <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, isWallpaper ? 5 : 4], fov: 50 }} gl={{ antialias: true }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 2, 2]} intensity={1.2} />
        <Suspense fallback={null}>
          <RotatingEarth />
          <Starfield />
          <Environment preset="city" />
        </Suspense>
        {!isWallpaper ? <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} /> : null}
      </Canvas>
    </div>
  )
}
