import { Vector2, Vector3 } from 'three'

export const getMarkupBoundsFromBounds = (
  { ppwu, min, max },
  {
    id,
    min: targetMin,
    max: targetMax,
    marginPx = [0, 0, 0, 0] /* left, top, right, bottom */,
  },
) => {
  const { left, right, top, bottom } = document
    .getElementById(id)
    .getBoundingClientRect()
  targetMin.set(
    min.x + (left + marginPx[0]) / ppwu.x,
    max.y - (bottom - marginPx[3]) / ppwu.y,
  )
  targetMax.set(
    min.x + (right - marginPx[2]) / ppwu.x,
    max.y - (top + marginPx[1]) / ppwu.y,
  )
}

export const getMarkupBounds = ({
  id /* array of length N or string */,
  /* left, top, right, bottom */
  marginPx = [
    0, 0, 0, 0,
  ] /* array of arrays (length N matching id) or singleton array */,
  state,
  target /* array of length M or vector3 or object3d */,
}) => {
  let clientRects = [],
    viewports = []

  /* client rects converted to array */
  if (Array.isArray(id)) {
    clientRects = id.map((_id) =>
      document.getElementById(_id).getBoundingClientRect(),
    )
  } else {
    clientRects[0] = document.getElementById(id).getBoundingClientRect()
  }
  /* viewports converted to array */
  if (Array.isArray(target)) {
    viewports = target.map((_target) => {
      const vpTarget =
        _target instanceof Vector3 ? _target : _target.position.clone()
      const { viewport, size, camera } = state
      return viewport.getCurrentViewport(camera, vpTarget, size)
    })
  } else {
    const vpTarget =
      target instanceof Vector3 ? target : target.position.clone()
    const { viewport, size, camera } = state
    viewports[0] = viewport.getCurrentViewport(camera, vpTarget, size)
  }

  /* bounds calculation */
  const getBoundsData = (_viewport, _clientRect, _marginPx) => {
    const data = {
      min: new Vector2(),
      max: new Vector2(),
      viewportSize: new Vector2(),
      ppwu: undefined,
    }
    const { left, right, top, bottom } = _clientRect
    const { width, height, factor } = _viewport

    data.min.set(
      -width / 2 + (left + _marginPx[0]) / factor,
      height / 2 - (bottom - _marginPx[3]) / factor,
    )
    data.max.set(
      -width / 2 + (right - _marginPx[2]) / factor,
      height / 2 - (top + _marginPx[1]) / factor,
    )
    data.ppwu = factor
    data.viewportSize.set(width, height)
    return data
  }
  /* return data */
  if (clientRects.length === 1 && viewports.length === 1) {
    /* no array args */
    return getBoundsData(viewports[0], clientRects[0], marginPx)
  } else if (viewports.length === 1) {
    /* id array arg and singleton target arg */
    return clientRects.map((_clientRect, index) => {
      if (Array.isArray(marginPx[0])) {
        return getBoundsData(viewports[0], _clientRect, marginPx[index])
      } else {
        return getBoundsData(viewports[0], _clientRect, marginPx)
      }
    })
  } else if (clientRects.length === 1) {
    /* id singleton arg and target array arg */
    return viewports.map((_viewport) =>
      getBoundsData(_viewport, clientRects[0], marginPx),
    )
  } else {
    /* id and target array args */
    return viewports.map((_viewport) =>
      clientRects.map((_clientRect, index) => {
        if (Array.isArray(marginPx[0])) {
          return getBoundsData(_viewport, _clientRect, marginPx[index])
        } else {
          return getBoundsData(_viewport, _clientRect, marginPx)
        }
      }),
    )
  }
}

export const getItemData = ({
  scrollContainerId,
  scrollContainerBorderSize,
  state,
  target,
  zPos,
  paddingPx = 2,
  geometryDepth,
  initialDepth,
  targetDepth,
  count,
  getInitialScale,
  getInitialPosition,
  getIntermediatePosition,
  getFocusPosition,
}) => {
  const { min, max, viewportSize, ppwu } = getMarkupBounds({
    id: scrollContainerId,
    state,
    target,
    marginPx: [
      scrollContainerBorderSize,
      scrollContainerBorderSize,
      scrollContainerBorderSize,
      scrollContainerBorderSize,
    ],
  })

  const data = {
    initialScale: new Vector3(),
    targetScale: new Vector3(),
    initialPosition: new Vector3(),
    intermediatePosition: new Vector3(),
    focusPosition: new Vector3(),
    targetPositions: [],
    min,
    max,
    viewportSize,
    ppwu,
  }
  data.initialScale.set(
    ...getInitialScale({ min, max, viewportSize, ppwu }),
    initialDepth / geometryDepth,
  )
  data.targetScale.set(
    (max.x - min.x - (paddingPx * (count - 1)) / ppwu) / count,
    max.y - min.y,
    targetDepth / geometryDepth,
  )

  data.initialPosition.set(
    ...getInitialPosition({
      min,
      max,
      viewportSize,
      ppwu,
      initialScale: data.initialScale,
    }),
    zPos - initialDepth / 2,
  )
  data.intermediatePosition.set(
    ...getIntermediatePosition({
      min,
      max,
      viewportSize,
      ppwu,
      initialScale: data.initialScale,
      initialPosition: data.initialPosition,
    }),
    zPos - initialDepth / 2,
  )
  data.focusPosition.set(
    ...getFocusPosition({
      min,
      max,
      viewportSize,
      ppwu,
      initialScale: data.initialScale,
      initialPosition: data.initialPosition,
      intermediatePosition: data.intermediatePosition,
    }),
    zPos - initialDepth / 2,
  )
  const padding = paddingPx / ppwu
  for (let i = 0; i < count; i++) {
    data.targetPositions[i] = new Vector3(
      min.x + data.targetScale.x / 2 + (data.targetScale.x + padding) * i,
      min.y + data.targetScale.y / 2,
      /* closest face at 0 */
      zPos - targetDepth / 2,
    )
  }
  return data
}

export const setImageScale = (
  maxWidth,
  maxHeight,
  width,
  height,
  targetVec3,
) => {
  // square
  if (width === height) {
    targetVec3.setX(Math.min(maxWidth, maxHeight))
    targetVec3.setY(Math.min(maxWidth, maxHeight))
    // landscape
  } else if (width > height) {
    const aspect = height / width
    if (maxWidth * aspect > maxHeight) {
      targetVec3.setX(maxHeight / aspect)
      targetVec3.setY(maxHeight)
    } else {
      targetVec3.setX(maxWidth)
      targetVec3.setY(maxWidth * aspect)
    }
    // portrait
  } else if (height > width) {
    const aspect = width / height
    if (maxHeight * aspect > maxWidth) {
      targetVec3.setX(maxWidth)
      targetVec3.setY(maxWidth / aspect)
    } else {
      targetVec3.setX(maxHeight * aspect)
      targetVec3.setY(maxHeight)
    }
  }
}
