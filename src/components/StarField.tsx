import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedStars = () => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (ref.current) {
      // Base rotation
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
      
      // Cursor interaction (parallax)
      const targetX = state.pointer.y * 0.2;
      const targetY = state.pointer.x * 0.2;
      
      ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.05;
      ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={ref}>
      <Stars 
        radius={50} 
        depth={50} 
        count={4000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1.5} 
      />
    </group>
  );
};

export const StarField: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={['#141517']} />
        <AnimatedStars />
      </Canvas>
    </div>
  );
};
