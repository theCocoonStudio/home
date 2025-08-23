import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { BlogItems } from './BlogItems.canvas'
import { useSettings } from 'website/pages/Home/useSettings'

const _Blog = function BlogAnimation(
  {
    config: {
      content: {
        sections: {
          blog: { items, range },
        },
      },
    },
    itemGeometry,
    bounds,
    animationTargets: {
      refs: { markupRef },
    },
  },
  forwardedRef,
) {
  const { focusFactor } = useSettings()

  const resizeCallback = useCallback(() => {}, [])

  const itemsRef = useRef()
  const scrollCallback = useCallback((...args) => {
    itemsRef.current?.scrollCallback(...args)
  }, [])
  const [blogItemsGroup, setBlogItemsGroup] = useState()
  useImperativeHandle(
    forwardedRef,
    () => ({
      resizeCallback,
      scrollCallback,
      blogItemsGroup,
      itemDescriptionVisibleRef: itemsRef.current.itemDescriptionVisibleRef,
      activeItemIndexRef: itemsRef.current.activeItemIndexRef,
    }),
    [blogItemsGroup, resizeCallback, scrollCallback],
  )

  return (
    <BlogItems
      ref={itemsRef}
      range={range}
      itemGeometry={itemGeometry}
      items={items}
      bounds={bounds}
      focusFactor={focusFactor}
      setBlogItemsGroup={setBlogItemsGroup}
      markupRef={markupRef}
    />
  )
}

export const BlogAnimation = forwardRef(_Blog)
