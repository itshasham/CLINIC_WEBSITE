'use client';

import { MeshTransmissionMaterial, Sparkles } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

function AuraSculpture() {
  const group = useRef<THREE.Group | null>(null);
  const pearl = useRef<THREE.Mesh | null>(null);

  const petals = useMemo(
    () => {
      return Array.from({ length: 5 }, (_, index) => {
        const angle = THREE.MathUtils.degToRad(-74 + index * (148 / 6));
        const radius = 2.6;

        return {
          angle,
          position: [Math.sin(angle) * radius, Math.cos(angle) * radius * 0.9 - 0.6, (index - 2) * 0.14] as const,
          rotation: [0.32, 0.12, -angle * 0.82] as const,
          scale: 0.94 - Math.abs(index - 2) * 0.05,
        };
      });
    },
    [],
  );

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    const elapsed = state.clock.elapsedTime;
    const targetY = state.pointer.x * 0.14;
    const targetX = 0.18 + state.pointer.y * 0.06;

    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.03);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.03);
    group.current.position.y = Math.sin(elapsed * 0.65) * 0.08;

    if (pearl.current) {
      pearl.current.rotation.y = elapsed * 0.18;
      pearl.current.rotation.x = Math.sin(elapsed * 0.45) * 0.12;
    }
  });

  return (
    <group ref={group} position={[0.1, -0.2, 0]}>
      {petals.map((petal, index) => (
        <mesh key={index} position={petal.position} rotation={petal.rotation} scale={petal.scale}>
          <capsuleGeometry args={[0.24, 1.78, 6, 18]} />
          <meshPhysicalMaterial
            color="#ddbea7"
            roughness={0.2}
            metalness={0.1}
            transmission={0.02}
            thickness={0.3}
            transparent
            opacity={0.94}
            clearcoat={0.9}
            clearcoatRoughness={0.18}
          />
        </mesh>
      ))}

      <mesh ref={pearl} position={[0, 0.12, 0]}>
        <icosahedronGeometry args={[1.02, 6]} />
        <MeshTransmissionMaterial
          color="#f8d7c6"
          thickness={0.6}
          roughness={0.08}
          transmission={0.98}
          ior={1.14}
          chromaticAberration={0.015}
          anisotropy={0.08}
          distortion={0.08}
          distortionScale={0.14}
          temporalDistortion={0.02}
          backside
          samples={2}
          resolution={64}
        />
      </mesh>

      <mesh rotation={[1.12, 0.24, 0.36]} position={[0.04, 0.1, -0.1]}>
        <torusGeometry args={[2.32, 0.06, 16, 120]} />
        <meshStandardMaterial
          color="#f0ccb0"
          emissive="#d8a685"
          emissiveIntensity={0.22}
          roughness={0.3}
          metalness={0.72}
        />
      </mesh>

      <mesh rotation={[0.44, -0.6, 1.08]} position={[-0.1, -0.18, -0.52]}>
        <torusGeometry args={[1.78, 0.05, 16, 110]} />
        <meshStandardMaterial
          color="#f6e4d5"
          emissive="#e0b090"
          emissiveIntensity={0.16}
          roughness={0.32}
          metalness={0.64}
        />
      </mesh>
    </group>
  );
}

export function ClinicAuraScene() {
  const [isLite, setIsLite] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const smallScreen = window.matchMedia('(max-width: 900px)');

    const update = () => {
      setIsLite(reduceMotion.matches || smallScreen.matches);
    };

    update();
    reduceMotion.addEventListener('change', update);
    smallScreen.addEventListener('change', update);

    return () => {
      reduceMotion.removeEventListener('change', update);
      smallScreen.removeEventListener('change', update);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        dpr={[1, isLite ? 1 : 1.2]}
        camera={{ position: [0, 0, 8.2], fov: 28 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#1d120d', 7, 15]} />
        <ambientLight intensity={1.15} color="#fff2e8" />
        <directionalLight position={[4, 5, 4]} intensity={1.9} color="#fff6ef" />
        <pointLight position={[-4, -1, 3]} intensity={isLite ? 7 : 11} color="#cf8d67" />
        <pointLight position={[3, 1, 5]} intensity={isLite ? 4 : 7} color="#fff4e8" />
        <AuraSculpture />
        {!isLite ? <Sparkles count={14} scale={[8, 5, 5]} size={1.8} speed={0.22} color="#fff1e2" /> : null}
      </Canvas>
    </div>
  );
}
