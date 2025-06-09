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
import { SoftwareItems } from './SoftwareItems.canvas'

const _Software = function Software(
  {
    config: {
      style: { focusFactor },
      content: {
        sections: {
          software: { items, range },
        },
      },
    },
    animationTargets: {
      refs: { bgRef },
    },
    itemGeometry,
    itemData,
  },
  forwardedRef,
) {
  const { colors } = useTheme()

  /* use for changing styles based on new width or aspect */
  const resizeCallback = useCallback(() => {}, [])

  const dampedOffset = useRef(0.0)
  const slate = useRef(new Color(colors.slate))
  const black = useRef(new Color(colors.black))

  const itemsRef = useRef()
  const scrollCallback = useCallback(
    (state, delta, scrollData) => {
      itemsRef.current?.scrollCallback(state, delta, scrollData)

      const offset = scrollData.range(
        0,
        items[0].range[0] + (items[0].range[1] * (1 - focusFactor)) / 2,
      )
      const toDamp = damp(dampedOffset, 'current', offset, 0.0, delta)
      if (toDamp) {
        // background color
        bgRef.current.backingMaterialRef.current.color.lerpColors(
          black.current,
          slate.current,
          dampedOffset.current,
        )
      }
    },
    [bgRef, focusFactor, items],
  )
  const [softwareItemsGroup, setSoftwareItemsGroup] = useState()
  useImperativeHandle(
    forwardedRef,
    () => ({
      resizeCallback,
      scrollCallback,
      softwareItemsGroup,
      itemDescriptionVisibleRef: itemsRef.current.itemDescriptionVisibleRef,
      activeItemIndexRef: itemsRef.current.activeItemIndexRef,
    }),
    [resizeCallback, scrollCallback, softwareItemsGroup],
  )

  return (
    <SoftwareItems
      ref={itemsRef}
      range={range}
      itemGeometry={itemGeometry}
      items={items}
      itemData={itemData}
      focusFactor={focusFactor}
      setSoftwareItemsGroup={setSoftwareItemsGroup}
    />
  )
}

export const Software = forwardRef(_Software)
