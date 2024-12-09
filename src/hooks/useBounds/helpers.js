import { Vector2, Vector3 } from 'three'

export const getCameraDistance = (obj3D, camera) => {
  const wPos = new Vector3()
  obj3D.getWorldPosition(wPos)
  camera.worldToLocal(wPos)
  return Math.abs(wPos.z)
}
export const getViewBoundsPPWU = (camera, distance, viewportVec2) => {
  const min = new Vector2()
  const max = new Vector2()
  camera.getViewBounds(distance, min, max)
  const ppwu = new Vector2(
    Math.abs(viewportVec2.x / (max.x - min.x)),
    Math.abs(viewportVec2.y / (max.y - min.y)),
  )
  return { min, max, ppwu }
}

export const getElementBounds = (
  { left, top, width, height },
  { min, max, ppwu },
) => {
  const leftOffset = min.x + left / ppwu.x
  const topOffset = max.y - top / ppwu.y
  const elementMin = new Vector2(leftOffset, topOffset - height / ppwu.y)
  const elementMax = new Vector2(leftOffset + width / ppwu.x, topOffset)
  return { min: elementMin, max: elementMax, ppwu }
}

export const setScaleXY = (obj, results, camera, dimensions) => {
  const scale = obj.scale.clone()
  const width =
    obj?.geometry?.parameters?.width || (dimensions && dimensions?.x) || 1.0
  const height =
    obj?.geometry?.parameters?.height || (dimensions && dimensions?.y) || 1.0
  const boundsWidth =
    results.bounds.max.getComponent(0) - results.bounds.min.getComponent(0)
  const boundsHeight =
    results.bounds.max.getComponent(1) - results.bounds.min.getComponent(1)
  const widthLessMargin =
    boundsWidth -
    results.margin.getComponent(1) -
    results.margin.getComponent(3)
  const heightLessMargin =
    boundsHeight -
    results.margin.getComponent(0) -
    results.margin.getComponent(2)
  scale.set(
    Math.abs(width === 0 ? width : widthLessMargin / width),
    Math.abs(height === 0 ? height : heightLessMargin / height),
    scale.getComponent(2),
  )

  return scale
}
