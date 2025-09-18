import { useThree } from '@react-three/fiber'
import {
  forwardRef,
  Suspense,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react'
import { Desk } from 'website/components/Desk.canvas'
import { Laptop } from 'website/components/Laptop.canvas'
import { Box3, Vector3 } from 'three'
import { Guitar } from './Guitar.canvas'
import { Camera } from './Camera.canvas'
import { Chair } from './Chair.canvas'
import { useTheme } from '../hooks/useTheme'

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
    lengths: { maxWidth, sidePadding, topBottomPadding },
  } = useTheme()

  // calculate models z position
  const getZpos = useCallback(
    (floorY, topBottomPaddingPx, viewportHeightPx, camera) => {
      // floorToBottomLength = Math.abs(floorY - (-visibleHeight/2))
      // we want floorToBottomLength * (viewportHeightPx/visibleHeight) = 4 * topBottomPaddingPx
      // visibleHeight = viewportHeightPx / (4 * topBottomPaddingPx) * floorY  / (1 - viewportHeightPx / (2 * 4 * topBottomPaddingPx))
      const floorYProportion = viewportHeightPx / (4 * topBottomPaddingPx)
      const visibleHeight =
        (floorYProportion * floorY) / (1 - floorYProportion / 2)
      // plugging in:
      // visibleHeight = 2 * Math.tan(fov/2) * camDistanceZ
      // camDistanceZ = visibleHeight / (2 * Math.tan(fov/2))
      const fov = camera.fov * (Math.PI / 180)
      const zPos = visibleHeight / (2 * Math.tan(fov / 2))
      // return global value
      return camera.position.z - Math.abs(zPos)
    },
    [],
  )
  // resize callback
  const resizeCallback = useCallback(() => {
    // viewport data
    const { height: backgroundViewportHeight } = viewport.getCurrentViewport(
      camera,
      new Vector3(0, 0, positionZ0),
      size,
    )

    // floor yPos
    const floorY = -0.5 * backgroundViewportHeight * heightProportion0
    // models zPos
    const modelsZ = getZpos(floorY, topBottomPadding, size.height, camera)

    const { factor: modelsFactor } = viewport.getCurrentViewport(
      camera,
      new Vector3(0, 0, modelsZ),
      size,
    )
    // models scale
    const initialSize = new Box3()
      .setFromObject(desk.current, true)
      .getSize(new Vector3())
    const contentWidthPx =
      (size.width > maxWidth ? maxWidth : size.width) - sidePadding * 2
    const targetWidthPx = 0.5 * contentWidthPx - 2 * sidePadding
    const targetWidth = targetWidthPx / modelsFactor
    const targetScaleFactor = targetWidth / initialSize.x
    desk.current.scale.multiplyScalar(targetScaleFactor)

    // models position
    const initialPosition = new Box3()
      .setFromObject(desk.current, true)
      .getCenter(new Vector3())
    const targetX =
      (-contentWidthPx / 4) * (1 / modelsFactor) - targetWidth * 0.1 // last term empirically derived to avoid rotation
    const targetY = floorY + (targetScaleFactor * initialSize.y) / 2
    const targetZ = modelsZ - (targetScaleFactor * initialSize.z) / 2
    desk.current.position.add(
      new Vector3(targetX, targetY, targetZ).sub(initialPosition),
    )
  }, [
    camera,
    getZpos,
    heightProportion0,
    maxWidth,
    positionZ0,
    sidePadding,
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
      <Desk ref={desk}>
        <Laptop ref={laptop} />
        <Guitar />
        <Camera />
        <Chair />
      </Desk>
    </Suspense>
  )
})
