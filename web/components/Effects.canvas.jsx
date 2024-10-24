import {
  Bloom,
  BrightnessContrast,
  ColorAverage,
  DepthOfField,
  DotScreen,
  EffectComposer,
  Glitch,
  GodRays,
  Noise,
  Vignette,
} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
// import { LayerMaterial, Color, Depth } from 'lamina'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { damp, dampC, dampLookAt } from 'maath/easing'

export const Effects = () => {
  const [sun, setSun] = useState()

  const get = useThree((state) => state.get)

  useEffect(() => {
    const { scene } = get()
    setSun(scene.getObjectByProperty('name', 'activeSun'))
  }, [get])

  return (
    <EffectComposer disableNormalPass multisampling={8}>
      {sun && <GodRays sun={sun} exposure={0.5} weight={0.8} blur />}
      {/*   <Bloom
        luminanceThreshold={0.0}
        mipmapBlur
        luminanceSmoothing={0.0}
        intensity={1}
      /> */}
      {/* <Noise opacity={0.11} premultiply={false} /> */}
      {/*  <BrightnessContrast
        brightness={0} // brightness. min: -1, max: 1
        contrast={-0.2} // contrast: min -1, max: 1
      /> */}
      {/* <Vignette opacity={0.7} /> */}
      {/*  <ColorAverage blendFunction={BlendFunction.DST} /> */}
      {/*  <DepthOfField
        focusDistance={1} // where to focus
        focalLength={0.5} // focal length
        bokehScale={5} // bokeh size
      /> */}
      {/* <DotScreen
        blendFunction={BlendFunction.NORMAL} // blend mode
        angle={Math.PI * 0.5} // angle of the dot pattern
        scale={1.0} // scale of the dot pattern
      /> */}
      {/* <Glitch
        delay={[1.5, 3.5]} // min and max glitch delay
        duration={[0.6, 1.0]} // min and max glitch duration
        strength={[0.3, 1.0]} // min and max glitch strength
        active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
        ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
      /> */}
    </EffectComposer>
  )
}
