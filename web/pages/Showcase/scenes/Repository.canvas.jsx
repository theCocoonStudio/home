import {
  AccumulativeShadows,
  Backdrop,
  Environment,
  Float,
  Lightformer,
  OrbitControls,
  PerspectiveCamera,
  RandomizedLight,
} from '@react-three/drei'
import { useTheme } from '../../../hooks/useTheme'
import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { CameraHelper } from 'three'

export const Repository = function Repository() {
  const colorTheme = useTheme()
  const mesh = useRef()
  const scene = useThree(({ scene }) => scene)
  const light = useRef()
  useEffect(() => {
    console.log(scene)
    light.current.shadow.camera.near = 0.1
    light.current.shadow.camera.far = 5
    light.current.shadow.camera.right = 1
    light.current.shadow.camera.left = -1
    light.current.shadow.camera.top = 1
    light.current.shadow.camera.bottom = -1
    /* scene.add(new CameraHelper(light.current.shadow.camera)) */
    scene.fog = null
  }, [scene])
  return (
    <>
      <mesh ref={mesh} castShadow scale={0.4} position-y={0.5} position-z={0}>
        <boxGeometry />
        <meshStandardMaterial color={colorTheme.charcoalTint} />
      </mesh>

      <PerspectiveCamera makeDefault position-z={2} position-y={1} />
      <directionalLight
        ref={light}
        position={[2, 4, 1]}
        target={mesh.current}
        args={[colorTheme.white, 4.5]}
      />
      <directionalLight
        ref={light}
        position={[-2, 4, -1]}
        target={mesh.current}
        args={[colorTheme.white, 4.5]}
      />
      {/* <ambientLight intensity={1} /> */}
      <AccumulativeShadows
        position={[0, 0, 0]}
        frames={100}
        alphaTest={0.9}
        scale={15}
      >
        <RandomizedLight
          amount={7}
          radius={14}
          ambient={0.1}
          position={[1, 4.5, 1]}
        />
      </AccumulativeShadows>

      <color attach='background' args={[colorTheme.charcoalTint]} />
      <OrbitControls />
    </>
  )
}
