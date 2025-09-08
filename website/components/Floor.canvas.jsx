import {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react'
import { useThree } from '@react-three/fiber'
import { useTheme } from '../hooks/useTheme'
import { DoubleSide, Vector3 } from 'three'

const _Floor = forwardRef(function Floor(
  { positionZ0 = -5, heightProportion0 = 0.5 },
  forwardedRef,
) {
  // refs
  const floor = useRef()
  // theme
  const {
    lengths: { navHeight, topBottomPadding },
  } = useTheme()
  // reactive three app data
  const stateCallback = useCallback(({ size, viewport, camera }) => {
    return { size, viewport, camera }
  }, [])
  const { size, viewport, camera } = useThree(stateCallback)

  // resize callback
  const resizeCallback = useCallback(() => {
    const { height, factor } = viewport.getCurrentViewport(
      camera,
      new Vector3(0, 0, positionZ0),
      size,
    )
    floor.current.position.setY(
      height / 2 -
        height * heightProportion0 -
        (navHeight + 2 * topBottomPadding) / factor,
    )
  }, [
    camera,
    heightProportion0,
    navHeight,
    positionZ0,
    size,
    topBottomPadding,
    viewport,
  ])

  // imperative handle
  useImperativeHandle(
    forwardedRef,
    () => ({
      resizeCallback,
      floor,
    }),
    [resizeCallback],
  )

  return (
    <mesh ref={floor} rotation-x={-Math.PI / 2} scale={100}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial color='red' side={DoubleSide} />
    </mesh>
  )
})
export const Floor = memo(_Floor)
