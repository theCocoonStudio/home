import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { SoftwareItems } from './SoftwareItems.canvas'
import { useScrollEvent } from '../pages/Home/useScrollEvent'

const _Software = function SoftwareAnimation(
  {
    config: {
      style: { focusFactor },
      content: {
        sections: {
          software: { items, range },
        },
      },
    },
    itemGeometry,
    itemData,
  },
  forwardedRef,
) {
  /* use for changing styles based on new width or aspect */
  const resizeCallback = useCallback(() => {}, [])

  const itemsRef = useRef()
  const scrollCallback = useCallback((...args) => {
    itemsRef.current?.scrollCallback(...args)
  }, [])
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

  const postScroll = useScrollEvent('postScroll')
  useEffect(() => {
    if (softwareItemsGroup) {
      softwareItemsGroup.visible = postScroll ? false : true
    }
  }, [postScroll, softwareItemsGroup])

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

export const SoftwareAnimation = forwardRef(_Software)
