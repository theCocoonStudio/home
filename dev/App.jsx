import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useRef, useEffect, forwardRef } from 'react'
import { GetParent } from 'src/components/canvas/GetParent'
import { withParent } from 'src/hoc/canvas/withParent'

function App() {
  const ref = useRef()
  const ref2 = useRef()

  return (
    <div id='container'>
      <Canvas>
        <color attach='background' args={['#fff']} />
        <mesh ref={ref} scale={4}>
          <boxGeometry />
          <MyMaterialWithParentInternal color='red' />
        </mesh>
        <mesh onClick={() => console.log(ref2.current.parent.geometry.clone)} scale={2} position={[-4, 0, 0]}>
          <boxGeometry />
          <MyMaterialWithParentExternal ref={ref2} color='blue' />
        </mesh>
        <Environment preset='warehouse' />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App

const MyMaterial = forwardRef(function MyMaterial(props, ref) {
  return <meshStandardMaterial {...props} ref={ref} />
})

function MyMaterialWithParentInternal(props) {
  const parent = useRef()
  useEffect(() => {
    console.log('Parent internal:')
    console.log(parent.current), [parent]
  })
  return (
    <>
      <MyMaterial {...props} />
      <GetParent ref={parent} />
    </>
  )
}
const MyMaterialWithParentExternal = withParent(MyMaterial)
