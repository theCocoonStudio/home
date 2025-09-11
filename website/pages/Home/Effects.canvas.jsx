import { useThree } from '@react-three/fiber'
import {
  EffectComposer,
  GodRays,
  Noise,
  Sepia,
  Vignette,
} from '@react-three/postprocessing'
import { useEffect, useState } from 'react'

export const Effects = function Effects({
  enabled = false,
  renderPriority,
  animationTargets,
  ready,
}) {
  const { get } = useThree(({ get }) => ({
    get,
  }))

  const [sun, setSun] = useState()
  useEffect(() => {
    if (!sun && ready) {
      setSun(animationTargets.refs.background.current.background.current)
    }
  }, [animationTargets, ready, sun])

  return (
    enabled && (
      <EffectComposer
        disableNormalPass
        multisampling={8}
        scene={get().scene}
        camera={get().camera}
        renderPriority={renderPriority}
      >
        {sun && (
          <>
            <GodRays sun={sun} exposure={0.7} weight={2.4} density={0.8} blur />
            <Sepia
              intensity={0.25} // sepia intensity
            />
            <Noise opacity={0.09} premultiply={false} />
            <Vignette
              offset={0.11} // vignette offset
              darkness={0.71} // vignette darkness
              eskil={false} // Eskil's vignette technique
            />
          </>
        )}
      </EffectComposer>
    )
  )
}
