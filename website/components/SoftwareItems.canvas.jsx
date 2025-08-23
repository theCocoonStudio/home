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

export const SoftwareItems = forwardRef(function SoftwareItems(
  {
    itemGeometry,
    items,
    focusFactor,
    setSoftwareItemsGroup,
    bounds: {
      defaultInitial,
      defaultIntermediate,
      defaultFocus,
      target,
      computeDefaultBounds,
    },
  },
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
          position-x={-10}
          userData={{ index, range }}
          material={inactiveMaterial}
        />
      )),
    [inactiveMaterial, itemGeometry, items],
  )

  const damper = useMemo(() => {
    if (group.current?.children && defaultFocus) {
      const itemsArr = group.current?.children.map((child, index) => ({
        ref: child,
        ...items[index],
      }))
      const positionScaleData = {
        initialScale: defaultInitial.scale,
        initialPosition: defaultInitial.position,
        intermediatePosition: defaultIntermediate.position,
        focusPosition: defaultFocus.position,
        targetScale: target[0].scale,
        targetPositions: target.map(({ position }) => position),
      }

      return scrollDamper.current.setData(itemsArr, positionScaleData, {
        focusFactor,
      })
    }
  }, [
    defaultFocus,
    defaultInitial,
    defaultIntermediate,
    focusFactor,
    items,
    target,
  ])

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

  const postScroll = useScrollEvent('postScroll')

  return (
    <>
      <group
        visible={!postScroll}
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
