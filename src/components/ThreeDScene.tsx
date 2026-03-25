import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, MeshWobbleMaterial, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const knotRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.1;
      meshRef.current.rotation.y = t * 0.15;
    }
    if (knotRef.current) {
      knotRef.current.rotation.z = t * 0.2;
      knotRef.current.rotation.x = t * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2}>
        <MeshDistortMaterial
          color="#00f0ff"
          speed={3}
          distort={0.4}
          radius={1}
          wireframe
          opacity={0.3}
          transparent
        />
      </Sphere>
      <TorusKnot ref={knotRef} args={[1.5, 0.4, 128, 32]} scale={1}>
        <MeshWobbleMaterial
          color="#ff0033"
          speed={2}
          factor={0.6}
          wireframe
          opacity={0.5}
          transparent
        />
      </TorusKnot>
    </Float>
  );
}

export default function ThreeDScene() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        <AbstractShape />
      </Canvas>
    </div>
  );
}
