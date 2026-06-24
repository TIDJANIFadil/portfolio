"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const count = 200;
  const meshRef = useRef<THREE.Points>(null!);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const positions = meshRef.current.geometry.attributes.position.array;
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];

      const waveX = Math.sin(y * 0.5 + time * 0.3) * 0.3;
      const waveY = Math.sin(x * 0.5 + time * 0.4) * 0.3;
      const waveZ = Math.sin((x + y) * 0.3 + time * 0.2) * 0.3;

      positions[i] = x + (waveX - (x - positions[i])) * 0.01;
      positions[i + 1] = y + (waveY - (y - positions[i + 1])) * 0.01;
      positions[i + 2] = z + (waveZ - (z - positions[i + 2])) * 0.01;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;

    // Follow mouse
    meshRef.current.rotation.x +=
      (mouseRef.current.y * 0.1 - meshRef.current.rotation.x) * 0.02;
    meshRef.current.rotation.y +=
      (mouseRef.current.x * 0.1 - meshRef.current.rotation.y) * 0.02;
  });

  const particleCount = Math.min(count, Math.floor(viewport.width * 40));

  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const color1 = new THREE.Color("#6c5ce7");
  const color2 = new THREE.Color("#00cec9");

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6;

    const mix = Math.random();
    const color = color1.clone().lerp(color2, mix);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <Particles />
    </>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
