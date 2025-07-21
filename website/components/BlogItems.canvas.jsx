import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { useTheme } from '../hooks/useTheme'
import { ScrollDamper } from '../utils/damping'
import { MeshBasicMaterial, MeshStandardMaterial } from 'three'
import { useScrollEvent } from '../pages/Home/useScrollEvent'

export const BlogItems = forwardRef(function BlogItems(
  { range, itemGeometry, items, itemData, focusFactor, setBlogItemsGroup },
  forwardedRef,
) {
  const group = useRef()
  const scrollDamper = useRef(new ScrollDamper())

  const { colors } = useTheme()

  const activeMaterial = useMemo(
    () => new MeshStandardMaterial({ color: colors.purple, roughness: 0.1 }),
    [colors.purple],
  )
  const inactiveMaterial = useMemo(
    () => new MeshBasicMaterial({ color: colors.purple }),
    [colors.purple],
  )
  useEffect(
    () => () => {
      activeMaterial.dispose()
      inactiveMaterial.dispose()
    },
    [activeMaterial, inactiveMaterial],
  )
  const blogItems = useMemo(
    () =>
      items.map(({ index, range }) => (
        <mesh
          key={`blogItems${index}`}
          geometry={itemGeometry}
          position-x={2}
          userData={{ index, range }}
          material={inactiveMaterial}
        />
      )),
    [inactiveMaterial, itemGeometry, items],
  )

  const damper = useMemo(() => {
    if (group.current?.children && itemData) {
      const itemsArr = group.current?.children.map((child, index) => ({
        ref: child,
        ...items[index],
      }))
      return scrollDamper.current.setData(itemsArr, itemData, {
        focusFactor,
      })
    }
  }, [focusFactor, itemData, items])

  const materialSet = useRef(false)
  const itemDescriptionVisible = useRef(false)
  const activeItemIndex = useRef(null)
  const frameCallback = useCallback(
    ({ targetIndex, index, item: { ref } }) => {
      if (targetIndex === 3) {
        itemDescriptionVisible.current = true
        activeItemIndex.current = index
      } else {
        itemDescriptionVisible.current = false
        activeItemIndex.current = undefined
      }
      group.current.children.forEach((child) => {
        if (child === ref) {
          if (child.material !== activeMaterial) {
            child.material = activeMaterial
          }
        } else {
          if (child.material !== inactiveMaterial) {
            child.material = inactiveMaterial
          }
        }
      })
    },
    [activeMaterial, inactiveMaterial],
  )

  const scrollCallback = useCallback(
    (state, delta, scrollData, scrollRanges) => {
      if (!scrollRanges.blogVisible) {
        if (itemDescriptionVisible.current) {
          itemDescriptionVisible.current = false
          activeItemIndex.current = undefined
        }
        if (materialSet.current === false) {
          group.current.children.forEach(
            (child) => (child.material = inactiveMaterial),
          )
          materialSet.current = true
        }
      } else {
        materialSet.current = false
      }
      if (damper) {
        damper.frame(delta, scrollData, frameCallback)
      }
    },
    [damper, frameCallback, inactiveMaterial],
  )

  useImperativeHandle(
    forwardedRef,
    () => ({
      scrollCallback,
      itemDescriptionVisibleRef: itemDescriptionVisible,
      activeItemIndexRef: activeItemIndex,
    }),
    [scrollCallback],
  )

  useEffect(() => {
    setBlogItemsGroup(group.current)
  }, [setBlogItemsGroup])

  const postScroll = useScrollEvent('postScroll')
  return (
    <>
      <group
        visible={!postScroll}
        ref={group}
        onPointerDown={() => {
          group.current.visible = true
        }}
      >
        {blogItems}
      </group>
    </>
  )
})
