import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useRef, useEffect, forwardRef } from 'react'
import { GetParent } from '../src/components/canvas/GetParent'

function App() {
  const ref = useRef()
  const ref2 = useRef()
  useEffect(() => {
    console.log(ref)
  }, [ref])
  return (
    <div id='container'>
      <Canvas>
        <color attach='background' args={['#fff']} />
        <mesh ref={ref} scale={4}>
          <boxGeometry />
          <meshStandardMaterial color='#999' />
        </mesh>
        <mesh ref={ref2} scale={2} position={[-4, 0, 0]}>
          <boxGeometry />
          <Material color='blue' />
        </mesh>
        <Environment preset='warehouse' />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App

function Material(props) {
  const parent = useRef()
  useEffect(() => {
    console.log(parent), [parent]
  })
  return (
    <>
      <meshStandardMaterial {...props} />
      <GetParent ref={parent} />
    </>
  )
}
