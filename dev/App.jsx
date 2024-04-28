import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <div id='container'>
      <Canvas>
        <color attach='background' args={['#fff']} />
        <mesh scale={4}>
          <boxGeometry />
          <meshStandardMaterial color='#999' />
        </mesh>
        <Environment preset='city' />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App
