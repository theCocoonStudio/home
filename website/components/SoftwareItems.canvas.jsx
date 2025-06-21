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

export const SoftwareItems = forwardRef(function SoftwareItems(
  { range, itemGeometry, items, itemData, focusFactor, setSoftwareItemsGroup },
  forwardedRef,
) {
  const group = useRef()
  const scrollDamper = useRef(new ScrollDamper())

  const { colors } = useTheme()

  const activeMaterial = useMemo(
    () => new MeshStandardMaterial({ color: colors.slate, roughness: 0.1 }),
    [colors.slate],
  )
  const inactiveMaterial = useMemo(
    () => new MeshBasicMaterial({ color: colors.slate }),
    [colors.slate],
  )
  useEffect(
    () => () => {
      activeMaterial.dispose()
      inactiveMaterial.dispose()
    },
    [activeMaterial, inactiveMaterial],
  )
  const softwareItems = useMemo(
    () =>
      items.map(({ index, range }) => (
        <mesh
          key={`softwareItems${index}`}
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
      if (!scrollRanges.softwareVisible) {
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
