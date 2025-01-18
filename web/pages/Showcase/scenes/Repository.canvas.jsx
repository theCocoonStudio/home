import {
  AccumulativeShadows,
  OrbitControls,
  PerspectiveCamera,
  RandomizedLight,
} from '@react-three/drei'
import { useTheme } from '../../../hooks/useTheme'
import { useEffect, useRef, useState } from 'react'
import { useThree } from '@react-three/fiber'
import { useMarkup } from '../../../hooks/useMarkup'
import { Browser } from 'web/components/BrowserComponent.canvas'

export const Repository = function Repository() {
  const colorTheme = useTheme()
  const [floorY, setFloorY] = useState()
  const scene = useThree(({ scene }) => scene)
  const light = useRef()
  useEffect(() => {
    light.current.shadow.camera.near = 0.1
    light.current.shadow.camera.far = 5
    light.current.shadow.camera.right = 1
    light.current.shadow.camera.left = -1
    light.current.shadow.camera.top = 1
    light.current.shadow.camera.bottom = -1
    /* scene.add(new CameraHelper(light.current.shadow.camera)) */
    /* scene.fog = null */
  }, [scene])

  const {
    refs: {
      showcase: { tracking },
    },
  } = useMarkup()

  const browser = useRef()
  return (
    <>
      <Browser
        ref={browser}
        colorTheme={colorTheme}
        tracking={tracking}
        setFloorY={setFloorY}
        transparent
      />
      <fog attach='fog' args={[colorTheme.charcoalTint, 0, 10]} />
      <PerspectiveCamera makeDefault position-z={2} />
      <directionalLight
        ref={light}
        position={[-2, 3, 1]}
        target={browser.current}
        args={[colorTheme.white, 4.5]}
      />

      {/* <ambientLight intensity={1} /> */}
      <AccumulativeShadows
        position={[0, floorY - 0.1, 0]}
        frames={1}
        alphaTest={0.8}
        scale={15}
      >
        <RandomizedLight
          amount={10}
          radius={12}
          ambient={0.1}
          position={[0, 4, 0]}
        />
      </AccumulativeShadows>

      <color attach='background' args={[colorTheme.charcoalTint]} />
      <OrbitControls />
    </>
  )
}
