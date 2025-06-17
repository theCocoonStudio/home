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
}) => {
  const forceCallbackSet = useRef(false)
  const dampedOffset = useRef(0.0)
  const dampedOffset2 = useRef(0.0)
  const slate = useRef(new Color(colors.slate))
  const black = useRef(new Color(colors.black))

  const scrollCallback = useCallback(
    (state, delta, scrollData) => {
      /* set forceCallback */
      if (!forceCallbackSet.current) {
        setForceCallback(boundPathForceCallback)
        forceCallbackSet.current = true
      }

      /* colors */
      const offset = scrollData.range(
        0,
        softwareItems[0].range[0] +
          (softwareItems[0].range[1] * (1 - focusFactor)) / 2,
      )
      const toDamp = damp(dampedOffset, 'current', offset, 0.0, delta)
      if (toDamp) {
        // background color
        backingMaterialRef.current.color.lerpColors(
          black.current,
          slate.current,
          dampedOffset.current,
        )
      }
      const offset2 = scrollData.range(
        photographyItems[0].range[0],
        photographyItems[0].range[1] / 2,
      )

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
      const toPause = scrollData.visible(
        photographyItems[0].range[0] + photographyItems[0].range[1] / 2,
        photographyRange[1] - photographyItems[0].range[1] / 2,
      )
      pauseRef.current = toPause
    },
    [
      backingMaterialRef,
      boundPathForceCallback,
      focusFactor,
      pauseRef,
      photographyItems,
      photographyRange,
      setForceCallback,
      softwareItems,
    ],
  )
  return scrollCallback
}
