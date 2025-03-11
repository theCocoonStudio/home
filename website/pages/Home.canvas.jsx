import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Panels } from '../components/Panels.canvas'
import { Environment } from '@react-three/drei'
import { ScrollControls } from '@react-three/drei'
import { useTheme } from 'website/hooks/useTheme'
import {
  BrightnessContrast,
  ChromaticAberration,
  EffectComposer,
  HueSaturation,
  Vignette,
} from '@react-three/postprocessing'

export const Home = () => {
  const { colors } = useTheme()

  return (
    <ScrollControls pages={3} enabled={true} damping={0}>
      <Panels />
      <color attach='background' args={[colors.white]} />
      {/* <fog attach='fog' args={['#000', 0.95, 1.5]} /> */}
      <PerspectiveCamera makeDefault position-z={1} fov={50} />
      <Environment preset='warehouse' />
      <EffectComposer disableNormalPass multisampling={8}>
        <Vignette
          offset={0.5} // vignette offset
          darkness={0.6} // vignette darkness
          eskil={false} // Eskil's vignette technique
        />
      </EffectComposer>
      {/* <OrbitControls /> */}
    </ScrollControls>
  )
}
