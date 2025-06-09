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

export const SoftwareItems = forwardRef(function SoftwareItems(
  { range, itemGeometry, items, itemData, focusFactor, setSoftwareItemsGroup },
  forwardedRef,
) {
  const group = useRef()
  const scrollDamper = useRef(new ScrollDamper())

  const { colors } = useTheme()
  const softwareItems = useMemo(
    () =>
      items.map(({ index, range }) => (
        <mesh
          key={`items${index}`}
          geometry={itemGeometry}
          position-x={2}
          userData={{ index, range }}
        >
          <meshStandardMaterial color={colors.slate} roughness={0.1} />
        </mesh>
      )),
    [colors.slate, itemGeometry, items],
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

  const itemDescriptionVisible = useRef(false)
  const activeItemIndex = useRef(null)
  const frameCallback = useCallback(({ targetIndex, index }) => {
    if (targetIndex === 3) {
      itemDescriptionVisible.current = true
      activeItemIndex.current = index
    } else {
      itemDescriptionVisible.current = false
      activeItemIndex.current = undefined
    }
  }, [])

  const scrollCallback = useCallback(
    (state, delta, scrollData) => {
      if (damper) {
        damper.frame(delta, scrollData, frameCallback)
      }
      if (!scrollData.visible(...range) && itemDescriptionVisible.current) {
        itemDescriptionVisible.current = false
        activeItemIndex.current = undefined
      }
    },
    [damper, frameCallback, range],
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
    setSoftwareItemsGroup(group.current)
  }, [setSoftwareItemsGroup])
  return (
    <>
      <group
        ref={group}
        onPointerDown={() => {
          console.log('hi')
        }}
      >
        {softwareItems}
      </group>
    </>
  )
})
