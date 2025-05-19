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
  id,
  scrollContainerBorderSize,
  state,
  target,
  zPos,
  paddingFactor = 0.1,
  itemSizePx,
  geometryDepth,
  initialDepth,
  targetDepth,
  count,
  initialTransform = new Vector3(),
  focusTransform = new Vector3(),
  intermediateTransform = new Vector3(),
  initialTransformPx = new Vector3(),
  focusTransformPx = new Vector3(),
  intermediateTransformPx = new Vector3(),
  initialTransformScale = new Vector3(),
  focusTransformScale = new Vector3(),
  intermediateTransformScale = new Vector3(),
  initialTransformViewport = new Vector3(),
  focusTransformViewport = new Vector3(),
  intermediateTransformViewport = new Vector3(),
}) => {
  const { min, max, viewportSize, ppwu } = getMarkupBounds({
    id,
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
    initialScale: new Vector3(
      itemSizePx / ppwu,
      itemSizePx / ppwu,
      initialDepth / geometryDepth,
    ),
    targetScale: new Vector3(
      ((1 - paddingFactor) * (max.x - min.x)) / count,
      max.y - min.y,
      targetDepth / geometryDepth,
    ),
    initialPosition: new Vector3(),
    intermediatePosition: new Vector3(),
    focusPosition: new Vector3(),
    targetPositions: [],
  }
  data.initialPosition.set(
    viewportSize.x / 2 +
      data.initialScale.x / 2 +
      initialTransform.x +
      initialTransformPx.x / ppwu +
      data.initialScale.x * initialTransformScale.x +
      viewportSize.x * initialTransformViewport.x,
    0 +
      initialTransform.y +
      initialTransformPx.y / ppwu +
      data.initialScale.y * initialTransformScale.y +
      viewportSize.y * initialTransformViewport.y,
    /* closest face at 0 */
    zPos -
      initialDepth / 2 +
      initialTransform.z +
      initialTransformPx.z / ppwu +
      initialDepth * initialTransformScale.z,
  )
  data.intermediatePosition.set(
    0 +
      intermediateTransform.x +
      intermediateTransformPx.x / ppwu +
      data.initialScale.x * intermediateTransformScale.x +
      viewportSize.x * intermediateTransformViewport.x,
    0 +
      intermediateTransform.y +
      intermediateTransformPx.y / ppwu +
      data.initialScale.y * intermediateTransformScale.y +
      viewportSize.y * intermediateTransformViewport.y,
    /* closest face at 0 */
    zPos -
      initialDepth / 2 +
      intermediateTransform.z +
      intermediateTransformPx.z / ppwu +
      initialDepth * intermediateTransformScale.z,
  )
  data.focusPosition.set(
    0 +
      focusTransform.x +
      focusTransformPx.x / ppwu +
      data.initialScale.x * focusTransformScale.x +
      viewportSize.x * focusTransformViewport.x,

    0 +
      focusTransform.y +
      focusTransformPx.y / ppwu +
      data.initialScale.y * focusTransformScale.y +
      viewportSize.y * focusTransformViewport.y,
    /* closest face at 0 */
    zPos -
      initialDepth / 2 +
      focusTransform.z +
      focusTransformPx.z / ppwu +
      initialDepth * focusTransformScale.z,
  )
  const padding = (paddingFactor * (max.x - min.x)) / (count - 1)
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
