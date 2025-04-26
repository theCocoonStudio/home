import { useThree } from '@react-three/fiber'
import { EffectComposer, GodRays } from '@react-three/postprocessing'

export const Effects = function Effects({
  enabled = false,
  renderPriority,
  sun,
}) {
  const { get } = useThree(({ get }) => ({
    get,
  }))
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
          <GodRays sun={sun} exposure={0.1} weight={0.9} density={0.7} blur />
        )}
      </EffectComposer>
    )
  )
}
