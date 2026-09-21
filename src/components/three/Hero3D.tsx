"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "next-themes";

const STAR_COUNT = 900;

function buildStarPositions(count: number) {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 6 + Math.random() * 20;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    arr[i * 3 + 2] = r * Math.cos(phi);
  }
  return arr;
}

const STAR_POSITIONS = buildStarPositions(STAR_COUNT);
const pointer = { x: 0, y: 0 };

function StarField({ color }: { color: string }) {
  const ref = useRef<THREE.Points>(null);
  const positions = STAR_POSITIONS;

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.018;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={color}
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Core({ color }: { color: string }) {
  const wire = useRef<THREE.Mesh>(null);
  const fill = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const rotX = pointer.y * 0.4 + t * 0.06;
    const rotY = pointer.x * 0.5 + t * 0.1;
    if (wire.current) {
      wire.current.rotation.x = THREE.MathUtils.lerp(wire.current.rotation.x, rotX, 0.04);
      wire.current.rotation.y = THREE.MathUtils.lerp(wire.current.rotation.y, rotY, 0.04);
      wire.current.scale.setScalar(1 + Math.sin(t * 0.8) * 0.04);
    }
    if (fill.current) {
      fill.current.rotation.x = THREE.MathUtils.lerp(fill.current.rotation.x, rotX, 0.04);
      fill.current.rotation.y = THREE.MathUtils.lerp(fill.current.rotation.y, rotY, 0.04);
    }
    if (ringA.current) ringA.current.rotation.y += delta * 0.05;
    if (ringB.current) ringB.current.rotation.y += delta * 0.032;
  });

  return (
    <group>
      <mesh ref={wire}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
      </mesh>
      <mesh ref={fill}>
        <icosahedronGeometry args={[1.28, 1]} />
        <meshStandardMaterial color={color} transparent opacity={0.12} roughness={0.4} metalness={0.6} />
      </mesh>
      <mesh ref={ringA}>
        <torusGeometry args={[2.4, 0.008, 24, 96]} />
        <meshBasicMaterial color={color} transparent opacity={0.4} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      <mesh ref={ringB} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.9, 0.006, 24, 96]} />
        <meshBasicMaterial color={color} transparent opacity={0.25} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  );
}

function Scene({ dark }: { dark: boolean }) {
  const primary = dark ? "#60a5fa" : "#2563eb";
  const haloFill = dark ? "#22d3ee" : "#0891b2";
  return (
    <>
      <ambientLight intensity={dark ? 0.6 : 0.9} />
      <pointLight position={[6, 6, 6]} intensity={40} color={primary} />
      <StarField color={primary} />
      <Core color={haloFill} />
    </>
  );
}

export default function Hero3D() {
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme !== "light";

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <Canvas
        dpr={[1, 1.8]}
        camera={{ position: [0, 0, 6.5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene dark={dark} />
      </Canvas>
    </div>
  );
}