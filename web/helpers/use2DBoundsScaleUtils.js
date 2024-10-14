export const setScaleXYOfXZOfX = (obj, results) => {
  const scale = obj.scale.clone()
  const scaleX = Math.abs(
    results.bounds.max.getComponent(0) - results.bounds.min.getComponent(0),
  )
  scale.set(scaleX, scaleX, scaleX)
  return scale
}
