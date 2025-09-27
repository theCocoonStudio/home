import {
  forwardRef,
  Suspense,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import { Desk } from 'website/components/Desk.canvas'
import { Laptop } from 'website/components/Laptop.canvas'
import { Box3, Vector3 } from 'three'
import { Guitar } from './Guitar.canvas'
import { Camera } from './Camera.canvas'
import { Chair } from './Chair.canvas'

export const Models = forwardRef(function Models(
  {
    setModelsSize,
    positionZ0,
    heightProportion0,
    size,
    get,
    maxWidth,
    sidePadding,
    topBottomPadding,
    itemDescriptionBottom,
    backgroundHeightProportion,
    modelsLayoutBreakpoint,
    isMobileLayout,
    floorY,
    modelsViewportHeight,
    modelsFactor,
    modelsZ,
    contentWidthPx,
  },
  forwardedRef,
) {
  // refs
  const desk = useRef()
  const laptop = useRef()

  // calculates models scale
  const getScale = useCallback(
    ({
      contentWidthPx,
      modelsFactor,
      modelsZ,
      floorY,
      modelsViewportHeight,
      backgroundHeightProportion,
      positionZ0,
      sidePadding,
      topBottomPadding,
      isMobileLayout,
    }) => {
      const initialSize = new Box3()
        .setFromObject(desk.current, true)
        .getSize(new Vector3())

      const targetWidthPx = isMobileLayout
        ? 0.7 * contentWidthPx - 2 * sidePadding
        : 0.5 * contentWidthPx - 2 * sidePadding
      const targetWidth = targetWidthPx / modelsFactor
      const targetWidthScaleFactor = targetWidth / initialSize.x

      const maxTargetDepth = Math.abs(modelsZ - positionZ0)
      const maxDepthFactor = (maxTargetDepth - 0.001) / initialSize.z

      const maxHeight =
        Math.abs(floorY) -
        modelsViewportHeight * backgroundHeightProportion * 0.1 -
        topBottomPadding / modelsFactor
      const maxHeightFactor = maxHeight / initialSize.y

      const targetScaleFactor = Math.min(
        targetWidthScaleFactor,
        maxDepthFactor,
        maxHeightFactor,
      )

      const modelsSize = initialSize.clone().multiplyScalar(targetScaleFactor)
      return {
        targetScaleFactor,
        initialSize,
        targetWidth,
        contentWidthPx,
        modelsSize,
      }
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
      isMobileLayout,
    }) => {
      const box = new Box3().setFromObject(desk.current, true)
      const initialPosition = box.getCenter(new Vector3())
      const scale = box.getSize(new Vector3())

      const targetX = isMobileLayout
        ? (-contentWidthPx / 2) * (1 / modelsFactor) + scale.x / 2
        : (-contentWidthPx / 4) * (1 / modelsFactor) - scale.x * 0.09 // last term empirically derived to avoid rotation
      const targetY = floorY + (targetScaleFactor * initialSize.y) / 2
      const targetZ = modelsZ - (targetScaleFactor * initialSize.z) / 2
      return new Vector3(targetX, targetY, targetZ).sub(initialPosition)
    },
    [],
  )
  // resize callback
  useEffect(() => {
    if (desk.current) {
      // models scale
      const { targetScaleFactor, initialSize, modelsSize } = getScale({
        contentWidthPx,
        modelsFactor,
        modelsZ,
        floorY,
        modelsViewportHeight,
        backgroundHeightProportion,
        positionZ0,
        sidePadding,
        topBottomPadding,
        isMobileLayout,
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
        isMobileLayout,
      })
      desk.current.position.add(positionDelta)

      // set scene data for sibling components
      setModelsSize(modelsSize)
    }
  }, [
    backgroundHeightProportion,
    contentWidthPx,
    floorY,
    get,
    getPositionDelta,
    getScale,
    heightProportion0,
    isMobileLayout,
    itemDescriptionBottom,
    maxWidth,
    modelsFactor,
    modelsLayoutBreakpoint,
    modelsViewportHeight,
    modelsZ,
    positionZ0,
    setModelsSize,
    sidePadding,
    size,
    topBottomPadding,
  ])

  // handle
  useImperativeHandle(
    forwardedRef,
    () => ({
      desk: desk.current,
      laptop: laptop.current,
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
