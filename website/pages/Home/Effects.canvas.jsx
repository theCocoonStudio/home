import { useThree } from '@react-three/fiber'
import {
  EffectComposer,
  GodRays,
  Noise,
  Sepia,
  Vignette,
} from '@react-three/postprocessing'
import { useEffect, useState } from 'react'
import { compileSceneAsync } from '../../utils/gl'

export const Effects = function Effects({
  enabled = false,
  renderPriority,
  animationTargets,
  ready,
  setReady,
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

  useEffect(() => {
    if (!ready) {
      const { gl, scene, camera } = get()
      compileSceneAsync(gl, scene, camera, () => {
        setReady(true)
      })
    }
  }, [])

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
            <GodRays sun={sun} exposure={0.7} weight={2.4} density={0.8} blur />
            <Sepia
              intensity={0.4} // sepia intensity
            />
            <Noise opacity={0.12} premultiply={false} />
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
