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
  { size = 300, range, itemGeometry, items, itemData },
  forwardedRef,
) {
  const group = useRef()
  const scrollDamper = useRef(new ScrollDamper())

  const { colors } = useTheme()
  const softwareItems = useMemo(
    () =>
      items.map(({ index }) => (
        <mesh
          key={`items${index}`}
          geometry={itemGeometry}
          position-x={2}
          userData={{ index }}
        >
          <meshStandardMaterial color={colors.slate} roughness={0.1} />
        </mesh>
      )),
    [colors.slate, itemGeometry, items],
  )

  const damper = useMemo(() => {
    if (group.current?.children && itemData) {
      const itemsArr = group.current?.children.map((child) => ({
        ref: child,
        index: child.userData.index,
      }))
      return scrollDamper.current.setData(itemsArr, itemData, {
        range,
        /* focusFactor: 0.5, */
      })
    }
  }, [itemData, range])

  const scrollCallback = useCallback(
    (state, delta, scrollData) => {
      if (damper) {
        damper.frame(delta, scrollData)
      }
    },
    [damper],
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
