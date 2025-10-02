import { useThree } from '@react-three/fiber'
import { useCallback, useMemo } from 'react'
import { useResizeEvent } from 'src/hooks/useResizeEvent'
import { useTheme } from './useTheme'
import { Vector2 } from 'three'

export const useCommonSizeData = ({
  positionZ0,
  heightProportion0,
  heightProportion1,
}) => {
  // theme data
  const {
    lengths: { maxWidth, sidePadding, topBottomPadding },
    page: {
      itemDescriptionBottom,
      backgroundHeightProportion,
      modelsLayoutBreakpoint,
    },
  } = useTheme()

  // screen size
  const size = useResizeEvent()

  // reactive three app data
  const stateCallback = useCallback(({ get }) => {
    return get
  }, [])
  const get = useThree(stateCallback)

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

  const {
    backgroundViewportHeight,
    backgroundFactor,
    contentWidthPx,
    floorY,
    modelsViewportHeight,
    modelsViewportWidth,
    modelsFactor,
    modelsZ,
  } = useMemo(() => {
    // independent data
    const { camera } = get()

    // viewport height and factor at background position-z
    const backgroundViewportHeight = camera.getViewSize(
      Math.abs(camera.position.z - positionZ0),
      new Vector2(),
    ).y
    const backgroundFactor = size.height / backgroundViewportHeight

    // content width in pixel units
    const contentWidthPx =
      (size.width > maxWidth ? maxWidth : size.width) - 2 * sidePadding

    // floor yPos
    const floorY = -0.5 * backgroundViewportHeight * heightProportion0

    // models zPos
    const modelsZ = getZpos(floorY, itemDescriptionBottom, size.height, camera)

    // viewport height and factor at models position-z
    const { x: modelsViewportWidth, y: modelsViewportHeight } =
      camera.getViewSize(Math.abs(camera.position.z - modelsZ), new Vector2())
    const modelsFactor = size.height / modelsViewportHeight

    return {
      backgroundViewportHeight,
      backgroundFactor,
      contentWidthPx,
      floorY,
      modelsViewportHeight,
      modelsViewportWidth,
      modelsFactor,
      modelsZ,
    }
  }, [
    get,
    getZpos,
    heightProportion0,
    itemDescriptionBottom,
    maxWidth,
    positionZ0,
    sidePadding,
    size,
  ])

  return {
    positionZ0,
    heightProportion0,
    heightProportion1,
    maxWidth,
    sidePadding,
    topBottomPadding,
    itemDescriptionBottom,
    backgroundHeightProportion,
    modelsLayoutBreakpoint,
    size,
    get,
    backgroundViewportHeight,
    modelsViewportWidth,
    backgroundFactor,
    contentWidthPx,
    isMobileLayout: size.width <= modelsLayoutBreakpoint,
    floorY,
    modelsViewportHeight,
    modelsFactor,
    modelsZ,
  }
}
