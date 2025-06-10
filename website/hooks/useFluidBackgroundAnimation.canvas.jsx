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
}) => {
  const forceCallbackSet = useRef(false)
  const dampedOffset = useRef(0.0)
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
    },
    [
      backingMaterialRef,
      boundPathForceCallback,
      focusFactor,
      setForceCallback,
      softwareItems,
    ],
  )
  return scrollCallback
}
