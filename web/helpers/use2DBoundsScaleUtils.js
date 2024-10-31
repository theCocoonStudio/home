export const setScaleXYZOfX = (obj, results) => {
  const scale = obj.scale.clone()
  const scaleX = Math.abs(
    results.bounds.max.getComponent(0) - results.bounds.min.getComponent(0),
  )
  scale.set(scaleX, scaleX, scaleX)
  return scale
}

export const setScaleXYZOfY = (obj, results) => {
  const scale = obj.scale.clone()
  const scaleY =
    Math.abs(
      results.bounds.max.getComponent(1) - results.bounds.min.getComponent(1),
    ) -
    results.margin.getComponent(0) -
    results.margin.getComponent(2)
  scale.set(scaleY, scaleY, scaleY)
  return scale
}
