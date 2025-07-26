import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Avatar = () => {
  const moonRef = useRef();

  useFrame((state) => {
    moonRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    moonRef.current.rotation.y += 0.001;
  });

  return (
    <group position={[0, 0, -2]} rotation={[0, 0, 0]}>
      <group ref={moonRef}>
        {/* Moon sphere */}
        <mesh>
          <sphereGeometry args={[1.5, 64, 64]} />
          <meshStandardMaterial
            color="#E6E6FA"
            metalness={0.1}
            roughness={0.8}
            emissive="#4169E1"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Glow effect */}
        <mesh scale={[1.2, 1.2, 1.2]}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial
            color="#4169E1"
            transparent
            opacity={0.1}
            emissive="#4169E1"
            emissiveIntensity={1}
          />
        </mesh>

        {/* Atmospheric halo */}
        <mesh scale={[1.4, 1.4, 1.4]}>
          <ringGeometry args={[1.5, 1.8, 64]} />
          <meshStandardMaterial
            color="#4169E1"
            transparent
            opacity={0.2}
            emissive="#4169E1"
            emissiveIntensity={0.5}
            side={2}
          />
        </mesh>
      </group>
    </group>
  );
};

export default Avatar;