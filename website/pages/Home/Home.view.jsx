import { PerspectiveCamera } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import { useTheme } from 'website/hooks/useTheme'
import { FluidBackground } from '../../components/FluidBackground.canvas'
import { useRef } from 'react'
import { Performance } from '../../components/Performance.canvas'
import { DirectionalLight } from '../../components/DirectionalLight.canvas'

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

  return (
    <>
      <FluidBackground
        ref={bg}
        /* forceCallback={} */
        colors={colors}
      />
      <DirectionalLight
        position={[0.2, 0.5, 1.5]}
        color={colors.white}
        intensity={10.3}
      />
      <color attach='background' args={[colors.black]} />
      <Performance fpsContainer={fpsContainer} />
      <PerspectiveCamera makeDefault position-z={1} fov={30} />
      <Environment preset='city' environmentIntensity={1} />
      <Effects renderPriority={renderPriority} />
    </>
  )
}
