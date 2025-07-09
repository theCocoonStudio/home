import { damp } from 'maath/easing'
import { useCallback, useRef } from 'react'
import { Color } from 'three'

export const useFluidBackgroundAnimation = ({
  boundPathForceCallback,
  setForceCallback,
  colors,
  softwareItems,
  backingMaterialRef,
  meshRef,
  pauseRef,
  manualRef,
  animationTargets,
  photographyRange,
  photographyItems,
  render,
  showLightbox,
}) => {
  const forceCallbackSet = useRef(false)
  const dampedOffset = useRef(0.0)
  const dampedOffset2 = useRef(0.0)
  const dampedOffset3 = useRef(0.0)
  const dampedOffset4 = useRef(0.0)
  const slate = useRef(new Color(colors.slate))
  const black = useRef(new Color(colors.black))
  const purple = useRef(new Color(colors.purple))
  const white = useRef(new Color(colors.white))

  const scrollCallback = useCallback(
    (state, delta, scrollData, scrollRanges) => {
      /* set forceCallback */
      if (!forceCallbackSet.current) {
        setForceCallback(boundPathForceCallback)
        forceCallbackSet.current = true
      }

      /* colors */
      const offset = scrollRanges.startSoftwareOffset
      const offset2 = scrollRanges.startPhotographyOffset
      const offset3 = scrollRanges.startBlogOffset
      const offset4 = scrollRanges.postScrollAnimationOffset
      const toDamp = damp(dampedOffset, 'current', offset, 0.0, delta)
      const toDamp2 = damp(dampedOffset2, 'current', offset2, 0.0, delta)
      const toDamp3 = damp(dampedOffset3, 'current', offset3, 0.0, delta)
      const toDamp4 = damp(dampedOffset4, 'current', offset4, 0.0, delta)
      // backing material color
      if (toDamp && !(offset2 > 0)) {
        backingMaterialRef.current.color.lerpColors(
          black.current,
          slate.current,
          dampedOffset.current,
        )
      } else if (toDamp2 && !(offset3 > 0)) {
        backingMaterialRef.current.color.lerpColors(
          slate.current,
          black.current,
          dampedOffset2.current,
        )
      } else if (toDamp3 && !(offset4 > 0)) {
        backingMaterialRef.current.color.lerpColors(
          black.current,
          purple.current,
          dampedOffset3.current,
        )
      } else if (toDamp4) {
        backingMaterialRef.current.color.lerpColors(
          purple.current,
          white.current,
          dampedOffset4.current,
        )
      }
      // background mesh color
      if (toDamp4) {
        meshRef.current.material.color.lerpColors(
          white.current,
          black.current,
          dampedOffset4.current,
        )
      }
      /* pause */
      manualRef.current = showLightbox
        ? false
        : scrollRanges.photographyDurationVisible

      if (manualRef.current) {
        render(state, delta)
      }
    },
    [
      backingMaterialRef,
      boundPathForceCallback,
      manualRef,
      meshRef,
      render,
      setForceCallback,
      showLightbox,
    ],
  )
  return scrollCallback
}
