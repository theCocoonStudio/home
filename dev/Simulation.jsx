import { Canvas } from '@react-three/fiber'
import { SimulationMaterial } from 'src/components/canvas/SimulationMaterial/SimulationMaterial'

export default function Simulation() {
  return (
    <>
      <Canvas onCreated={({ gl }) => gl.setClearColor(0x000000)} id='mainCanvas'>
        <mesh>
          <planeGeometry args={[2.0, 2.0]} />
          <SimulationMaterial />
        </mesh>
      </Canvas>
    </>
  )
}
