import { PerspectiveCamera } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import { useTheme } from 'website/hooks/useTheme'
import { FluidBackground } from '../../components/FluidBackground.canvas'

import { useEffect, useRef } from 'react'
import { Performance } from '../../components/Performance.canvas'

export const Home = ({
  config: {
    footer: {
      markupIds: { scrollContainer, fpsContainer },
    },
    effects: { renderPriority, Component: Effects },
  },
}) => {
  const { colors } = useTheme()

  const bg = useRef()

  const light = useRef()

  useEffect(() => {
    light.current.shadow.camera.near = 0
    light.current.shadow.camera.far = 500
    light.current.shadow.camera.right = 1
    light.current.shadow.camera.left = -1
    light.current.shadow.camera.top = 1
    light.current.shadow.camera.bottom = -1
    light.current.shadow.mapSize.width = 1024 // default
    light.current.shadow.mapSize.height = 1024
  }, [])

  return (
    <>
      <directionalLight
        position={[0.2, 0.5, 1.5]}
        castShadow
        ref={light}
        args={['white', 10.3]}
      />
      <FluidBackground
        ref={bg}
        /* forceCallback={} */
        colors={colors}
      />
      <color attach='background' args={[colors.black]} />
      <Performance fpsContainer={fpsContainer} />
      <PerspectiveCamera makeDefault position-z={1} fov={30} />
      <Environment preset='city' environmentIntensity={1} />
      <Effects renderPriority={renderPriority} />
    </>
  )
}
