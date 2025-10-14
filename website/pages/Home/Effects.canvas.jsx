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
      setSun(animationTargets.refs.background.current.background)
    }
  }, [animationTargets, ready, sun])

  return (
    enabled &&
    ready && (
      <EffectComposer
        disableNormalPass
        multisampling={8}
        scene={get().scene}
        camera={get().camera}
        renderPriority={renderPriority}
      >
        {sun && (
          <>
            <GodRays sun={sun} exposure={2.8} weight={1.8} density={1.2} blur />
            <Sepia
              intensity={0.45} // sepia intensity
            />
            <Noise opacity={0.09} premultiply={false} />
            <Vignette
              offset={0.15} // vignette offset
              darkness={0.74} // vignette darkness
              eskil={false} // Eskil's vignette technique
            />
          </>
        )}
      </EffectComposer>
    )
  )
}
