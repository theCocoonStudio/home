import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { BlogItems } from './BlogItems.canvas'
import { useScrollEvent } from '../pages/Home/useScrollEvent'

const _Blog = function BlogAnimation(
  {
    config: {
      style: { focusFactor },
      content: {
        sections: {
          blog: { items, range },
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

  const postScroll = useScrollEvent('postScroll')
  useEffect(() => {
    if (blogItemsGroup) {
      blogItemsGroup.visible = postScroll ? false : true
    }
  }, [postScroll, blogItemsGroup])

  return (
    <BlogItems
      ref={itemsRef}
      range={range}
      itemGeometry={itemGeometry}
      items={items}
      itemData={itemData}
      focusFactor={focusFactor}
      setBlogItemsGroup={setBlogItemsGroup}
    />
  )
}

export const BlogAnimation = forwardRef(_Blog)
