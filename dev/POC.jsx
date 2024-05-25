import { Canvas } from '@react-three/fiber'
import { POCMaterial } from 'src/components/canvas/POCMaterial/POCMaterial'

export default function POC() {
  return (
    <>
      <Canvas onCreated={({ gl }) => gl.setClearColor(0x000000)} id='mainCanvas'>
        <mesh>
          <planeGeometry args={[2.0, 2.0]} />
          <POCMaterial />
        </mesh>
      </Canvas>
    </>
  )
}
