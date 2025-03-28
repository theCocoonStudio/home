import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
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
      />
      <fog attach='fog' args={[colorTheme.charcoalTint, 0, 10]} />
      <PerspectiveCamera makeDefault position-z={2} />
      <directionalLight
        ref={light}
        position={[-2, 3, 1]}
        target={browser.current}
        args={[colorTheme.white, 4.5]}
      />
      <Environment preset='city' />

      <color attach='background' args={[colorTheme.charcoalTint]} />
      <OrbitControls />
    </>
  )
}
