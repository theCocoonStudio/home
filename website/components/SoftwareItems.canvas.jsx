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
    markupRef,
    bgRef,
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
  const computedBoundsIndex = useRef(null)
  const computedBounds = useRef(null)
  const forceMeshIndex = useRef(null)
  const frameCallback = useCallback(
    ({ targetIndex, index, item: { ref } }) => {
      if (activeItemIndex.current !== index) {
        activeItemIndex.current = index
      }
      if (forceMeshIndex.current !== index) {
        bgRef.current.setForceMesh(ref)
        forceMeshIndex.current = index
      }
      if (targetIndex === 3) {
        itemDescriptionVisible.current = true
      } else {
        itemDescriptionVisible.current = false
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
    [activeMaterial, bgRef, inactiveMaterial],
  )

  const scrollCallback = useCallback(
    (state, delta, scrollData, scrollRanges) => {
      if (!scrollRanges.softwareVisible) {
        if (typeof activeItemIndex.current !== 'undefined') {
          activeItemIndex.current = undefined
          computedBoundsIndex.current = undefined
          computedBounds.current = undefined
          bgRef.current.setForceMesh(undefined)
          forceMeshIndex.current = undefined
        }
        if (itemDescriptionVisible.current) {
          itemDescriptionVisible.current = false
        }
        if (materialSet.current === false) {
          group.current.children.forEach(
            (child) => (child.material = inactiveMaterial),
          )
          materialSet.current = true
        }
      } else {
        materialSet.current = false
        if (
          typeof activeItemIndex.current === 'number' &&
          markupRef.current?.activeItemDescriptionIndexRef.current ===
            activeItemIndex.current &&
          markupRef.current?.activeItemSectionRef.current === 'software'
        ) {
          if (computedBoundsIndex.current !== activeItemIndex.current) {
            computedBounds.current = computeDefaultBounds()
            computedBoundsIndex.current = activeItemIndex.current
          }
        }
      }
      if (damper) {
        if (!markupRef.current?.isAlternateLayout) {
          damper.frame(delta, scrollData, frameCallback)
        } else {
          if (
            computedBoundsIndex.current === activeItemIndex.current &&
            computedBounds.current
          ) {
            damper.frame(delta, scrollData, frameCallback, {
              initialScale: computedBounds.current.defaultInitial.scale,
              initialPosition: computedBounds.current.defaultInitial.position,
              intermediatePosition:
                computedBounds.current.defaultIntermediate.position,
              focusPosition: computedBounds.current.defaultFocus.position,
            })
          } else {
            damper.frame(delta, scrollData, frameCallback)
          }
        }
      }
    },
    [
      bgRef,
      computeDefaultBounds,
      damper,
      frameCallback,
      inactiveMaterial,
      markupRef,
    ],
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
        position-z={-1}
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
