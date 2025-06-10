import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
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
    itemGeometry,
    itemData,
  },
  forwardedRef,
) {
  /* use for changing styles based on new width or aspect */
  const resizeCallback = useCallback(() => {}, [])

  const itemsRef = useRef()
  const scrollCallback = useCallback((state, delta, scrollData) => {
    itemsRef.current?.scrollCallback(state, delta, scrollData)
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
