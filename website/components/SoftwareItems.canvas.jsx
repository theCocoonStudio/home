import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'

import { useTheme } from '../hooks/useTheme'
import {
  Environment,
  MeshPortalMaterial,
  PerspectiveCamera,
  Scroll,
  Stars,
} from '@react-three/drei'
import { ScrollDamper } from '../utils/damping'

export const SoftwareItems = forwardRef(function SoftwareItems(
  { itemGeometry, items, itemData, itemDescription, range, focusFactor },
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

  const frameCallback = useCallback(
    ({ targetIndex, item }) => {
      if (targetIndex === 3) {
        if (itemDescriptionVisible.current === false) {
          itemDescription.children[0].children[0].innerText = item.title
          itemDescription.children[0].children[1].innerText = item.date
          itemDescription.children[0].children[2].innerText = item.description
          itemDescription.style.opacity = 1
          itemDescription.style.pointerEvents = 'auto'
          itemDescriptionVisible.current = true
        }
      } else {
        if (itemDescriptionVisible.current === true) {
          itemDescription.style.opacity = 0
          itemDescription.style.pointerEvents = 'none'
          itemDescriptionVisible.current = false
        }
      }
    },
    [itemDescription],
  )

  const scrollCallback = useCallback(
    (state, delta, scrollData) => {
      if (damper) {
        damper.frame(delta, scrollData, itemDescription && frameCallback)
        if (!scrollData.visible(...range)) {
          if (itemDescriptionVisible.current === true) {
            itemDescription.style.opacity = 0
            itemDescription.style.pointerEvents = 'none'
            itemDescriptionVisible.current = false
          }
        }
      }
    },
    [damper, frameCallback, itemDescription, range],
  )

  useImperativeHandle(
    forwardedRef,
    () => ({
      scrollCallback,
    }),
    [scrollCallback],
  )

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
