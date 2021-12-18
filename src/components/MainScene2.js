import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, MeshDistortMaterial, Sphere } from '@react-three/drei'
const MainScene = () => {
  return (
    <Canvas>
      <React.Suspense fallback={null}>
        <Sphere args={[2, 42, 42]}>
          <MeshDistortMaterial factor={3} roughness={0.3} />
        </Sphere>
        <Environment preset={'studio'} />
      </React.Suspense>
    </Canvas>
  )
}
export default MainScene;

