import { damp } from 'maath/easing'
import { useCallback, useRef } from 'react'
import { Color } from 'three'

export const useFluidBackgroundAnimation = ({
  boundPathForceCallback,
  setForceCallback,
  colors,
  softwareItems,
  focusFactor,
  backingMaterialRef,
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
  const slate = useRef(new Color(colors.slate))
  const black = useRef(new Color(colors.black))

  const scrollCallback = useCallback(
    (state, delta, scrollData, scrollRanges) => {
      /* set forceCallback */
      if (!forceCallbackSet.current) {
        setForceCallback(boundPathForceCallback)
        forceCallbackSet.current = true
      }

      /* colors */
      const offset = scrollRanges.startSoftwareOffset
      const toDamp = damp(dampedOffset, 'current', offset, 0.0, delta)
      if (toDamp) {
        // background color
        backingMaterialRef.current.color.lerpColors(
          black.current,
          slate.current,
          dampedOffset.current,
        )
      }
      const offset2 = scrollRanges.startPhotographyOffset

      const toDamp2 = damp(dampedOffset2, 'current', offset2, 0.0, delta)
      if (toDamp2) {
        // background color
        backingMaterialRef.current.color.lerpColors(
          slate.current,
          black.current,
          dampedOffset2.current,
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
      render,
      setForceCallback,
      showLightbox,
    ],
  )
  return scrollCallback
}
