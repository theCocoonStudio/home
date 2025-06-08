import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { useTheme } from '../hooks/useTheme'
import { damp } from 'maath/easing'
import { Color } from 'three'
import { PhotographyItems } from './PhotographyItems.canvas'
import { lerp } from 'three/src/math/MathUtils.js'

const _Photography = function Photography(
  {
    config: {
      style: { focusFactor, titleHeight },
      content: {
        sections: {
          photography: { range, items },
        },
      },
    },
    itemDescriptionId,
    bgRef,
    lightRef,
    itemData,
    zPos,
    targetDepth,
  },
  forwardedRef,
) {
  const { colors } = useTheme()

  const [itemDescription, setItemDescription] = useState()

  /* use for changing styles based on new width or aspect */
  const resizeCallback = useCallback(() => {
    if (!itemDescription) {
      const el = document.getElementById(itemDescriptionId)
      if (el) {
        setItemDescription(el)
      }
    }
  }, [itemDescription, itemDescriptionId])

  const dampedOffset = useRef(0.0)
  const slate = useRef(new Color(colors.slate))
  const midnight = useRef(new Color(colors.midnight))
  const itemsRef = useRef()
  const scrollCallback = useCallback(
    (state, delta, scrollData) => {
      itemsRef.current?.scrollCallback(state, delta, scrollData)
      const offset = scrollData.range(
        items[0].range[0],
        (items[0].range[1] * (1 - focusFactor)) / 2,
      )
      const toDamp = damp(dampedOffset, 'current', offset, 0.0, delta)
      if (toDamp) {
        // background color
        bgRef.current.backingMaterialRef.current.color.lerpColors(
          slate.current,
          midnight.current,
          dampedOffset.current,
        )
        // light intensity
        lightRef.current.ref.intensity = lerp(
          lightRef.current.defaultIntensity,
          3.5,
          dampedOffset.current,
        )
      }
      // light shadow
      const fullOffset = scrollData.range(...range)
      if (fullOffset < scrollData.eps || fullOffset > 1.0 - scrollData.eps) {
        if (lightRef.current.ref.castShadow) {
          lightRef.current.ref.castShadow = false
        }
      } else if (!lightRef.current.ref.castShadow) {
        lightRef.current.ref.castShadow = true
      }
    },
    [bgRef, focusFactor, items, lightRef, range],
  )
  useImperativeHandle(
    forwardedRef,
    () => ({ resizeCallback, scrollCallback }),
    [resizeCallback, scrollCallback],
  )

  return (
    <PhotographyItems
      ref={itemsRef}
      range={range}
      items={items}
      itemData={itemData}
      itemDescription={itemDescription}
      focusFactor={focusFactor}
      titleHeight={titleHeight}
      zPos={zPos}
      targetDepth={targetDepth}
    />
  )
}

export const Photography = forwardRef(_Photography)
