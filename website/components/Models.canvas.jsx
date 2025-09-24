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
import { useResizeEvent } from 'src/hooks/useResizeEvent'

export const Models = forwardRef(function Models(
  { positionZ0, heightProportion0 },
  forwardedRef,
) {
  // refs
  const desk = useRef()
  const laptop = useRef()

  // reactive three app data
  const stateCallback = useCallback(({ get }) => {
    return get
  }, [])
  const get = useThree(stateCallback)

  // theme
  const {
    lengths: { maxWidth, sidePadding, topBottomPadding },
    page: {
      itemDescriptionBottom,
      backgroundHeightProportion,
      modelsLayoutBreakpoint,
    },
  } = useTheme()

  // calculates models z position
  const getZpos = useCallback(
    (floorY, itemDescriptionBottom, viewportHeightPx, camera) => {
      // floorToBottomLength = Math.abs(floorY - (-visibleHeight/2))
      // we want floorToBottomLength/visibleHeight = itemDescriptionBottom / viewportHeightPx
      // visibleHeight = viewportHeightPx / itemDescriptionBottom * floorY  / (1 - viewportHeightPx / (2 * itemDescriptionBottom)
      const floorYProportion = viewportHeightPx / itemDescriptionBottom
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

  // calculates models scale
  const getScale = useCallback(
    ({
      size,
      modelsFactor,
      modelsZ,
      floorY,
      modelsHeight,
      backgroundHeightProportion,
      maxWidth,
      positionZ0,
      sidePadding,
      topBottomPadding,
      isAlternativeLayout,
    }) => {
      const initialSize = new Box3()
        .setFromObject(desk.current, true)
        .getSize(new Vector3())

      const contentWidthPx =
        (size.width > maxWidth ? maxWidth : size.width) - sidePadding * 2
      const targetWidthPx = isAlternativeLayout
        ? 0.7 * contentWidthPx - 2 * sidePadding
        : 0.5 * contentWidthPx - 2 * sidePadding
      const targetWidth = targetWidthPx / modelsFactor
      const targetWidthScaleFactor = targetWidth / initialSize.x

      const maxTargetDepth = Math.abs(modelsZ - positionZ0)
      const maxDepthFactor = (maxTargetDepth - 0.001) / initialSize.z

      const maxHeight =
        Math.abs(floorY) -
        modelsHeight * backgroundHeightProportion * 0.1 -
        topBottomPadding / modelsFactor
      const maxHeightFactor = maxHeight / initialSize.y

      const targetScaleFactor = Math.min(
        targetWidthScaleFactor,
        maxDepthFactor,
        maxHeightFactor,
      )
      return { targetScaleFactor, initialSize, targetWidth, contentWidthPx }
    },
    [],
  )

  // calculates models position
  const getPositionDelta = useCallback(
    ({
      contentWidthPx,
      modelsFactor,
      initialSize,
      targetScaleFactor,
      modelsZ,
      floorY,
      isAlternativeLayout,
    }) => {
      const box = new Box3().setFromObject(desk.current, true)
      const initialPosition = box.getCenter(new Vector3())
      const scale = box.getSize(new Vector3())

      const targetX = isAlternativeLayout
        ? (-contentWidthPx / 2) * (1 / modelsFactor) + scale.x / 2
        : (-contentWidthPx / 4) * (1 / modelsFactor) - scale.x * 0.09 // last term empirically derived to avoid rotation
      const targetY = floorY + (targetScaleFactor * initialSize.y) / 2
      const targetZ = modelsZ - (targetScaleFactor * initialSize.z) / 2
      return new Vector3(targetX, targetY, targetZ).sub(initialPosition)
    },
    [],
  )
  // resize callback
  const resizeCallback = useCallback(
    (size) => {
      const isAlternativeLayout = size.width <= modelsLayoutBreakpoint
      const { viewport, camera } = get()

      // viewport data
      const { height: backgroundViewportHeight } = viewport.getCurrentViewport(
        camera,
        new Vector3(0, 0, positionZ0),
        size,
      )

      // floor yPos
      const floorY = -0.5 * backgroundViewportHeight * heightProportion0
      // models zPos
      const modelsZ = getZpos(
        floorY,
        itemDescriptionBottom,
        size.height,
        camera,
      )

      const { factor: modelsFactor, height: modelsHeight } =
        viewport.getCurrentViewport(camera, new Vector3(0, 0, modelsZ), size)

      // models scale
      const { targetScaleFactor, initialSize, contentWidthPx } = getScale({
        size,
        modelsFactor,
        modelsZ,
        floorY,
        modelsHeight,
        backgroundHeightProportion,
        maxWidth,
        positionZ0,
        sidePadding,
        topBottomPadding,
        isAlternativeLayout,
      })
      desk.current.scale.multiplyScalar(targetScaleFactor)

      // models position
      const positionDelta = getPositionDelta({
        contentWidthPx,
        modelsFactor,
        initialSize,
        targetScaleFactor,
        modelsZ,
        floorY,
        isAlternativeLayout,
      })
      desk.current.position.add(positionDelta)
    },
    [
      backgroundHeightProportion,
      get,
      getPositionDelta,
      getScale,
      getZpos,
      heightProportion0,
      itemDescriptionBottom,
      maxWidth,
      modelsLayoutBreakpoint,
      positionZ0,
      sidePadding,
      topBottomPadding,
    ],
  )

  useResizeEvent(resizeCallback)
  // handle
  useImperativeHandle(
    forwardedRef,
    () => ({
      desk,
      laptop,
    }),
    [],
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
