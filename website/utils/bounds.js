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
  id,
  marginPx = [0, 0, 0, 0] /* left, top, right, bottom */,
  state,
  target,
}) => {
  const data = {
    min: new Vector2(),
    max: new Vector2(),
    viewportSize: new Vector2(),
    ppwu: undefined,
  }
  const { left, right, top, bottom } = document
    .getElementById(id)
    .getBoundingClientRect()

  const vpTarget = target instanceof Vector3 ? target : target.position.clone()
  const { viewport, size, camera } = state

  const { width, height, factor } = viewport.getCurrentViewport(
    camera,
    vpTarget,
    size,
  )
  data.min.set(
    -width / 2 + (left + marginPx[0]) / factor,
    height / 2 - (bottom - marginPx[3]) / factor,
  )
  data.max.set(
    -width / 2 + (right - marginPx[2]) / factor,
    height / 2 - (top + marginPx[1]) / factor,
  )
  data.ppwu = factor
  data.viewportSize.set(width, height)
  return data
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
