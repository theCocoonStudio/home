import { useThree } from '@react-three/fiber'
import {
  forwardRef,
  Suspense,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { Desk } from 'website/components/Desk.canvas'
import { Laptop } from 'website/components/Laptop.canvas'
import { useTheme } from '../hooks/useTheme'
import { Vector3 } from 'three'
import { Guitar } from './Guitar.canvas'
import { Camera } from './Camera.canvas'
import { Chair } from './Chair.canvas'

export const Models = forwardRef(function Models(
  { positionZ0, heightProportion0 },
  forwardedRef,
) {
  // refs
  const desk = useRef()
  const laptop = useRef()

  // reactive three app data
  const stateCallback = useCallback(({ size, viewport, camera }) => {
    return { size, viewport, camera }
  }, [])
  const { size, viewport, camera } = useThree(stateCallback)

  // theme
  const {
    lengths: { navHeight, topBottomPadding },
  } = useTheme()

  // state props
  const [floorY, setFloorY] = useState()

  // resize callback
  const resizeCallback = useCallback(() => {
    const { height, factor } = viewport.getCurrentViewport(
      camera,
      new Vector3(0, 0, positionZ0),
      size,
    )
    setFloorY(
      height / 2 -
        height * heightProportion0 -
        (navHeight + 2 * topBottomPadding) / factor -
        0.001,
    )
    desk.current?.resizeCallback()
  }, [
    camera,
    heightProportion0,
    navHeight,
    positionZ0,
    size,
    topBottomPadding,
    viewport,
  ])

  // handle
  useImperativeHandle(
    forwardedRef,
    () => ({
      resizeCallback,
      desk,
      laptop,
    }),
    [resizeCallback],
  )
  return (
    <Suspense>
      <Desk ref={desk} yPos={floorY} positionZ0={positionZ0}>
        <Laptop ref={laptop} />
        <Guitar />
        <Camera />
        <Chair />
      </Desk>
    </Suspense>
  )
})
