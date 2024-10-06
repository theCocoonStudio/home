export const deepClone = (obj) => {
  const result = {}
  for (const property in obj) {
    // base condition 1
    if (typeof obj[property] !== 'object') {
      result[property] = obj[property]
    } else {
      // base condition 2
      if (typeof obj[property]?.clone === 'function') {
        result[property] = obj[property].clone()
      } else {
        // recursive case
        result[property] = deepClone(obj[property])
      }
    }
  }
  return result
}

export const setScale = (obj, results) => {
  const scale = obj.scale.clone()
  const width = obj.geometry.parameters.width || 1.0
  const height = obj.geometry.parameters.height || 1.0

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
    Math.abs(widthLessMargin / width),
    Math.abs(heightLessMargin / height),
    scale.getComponent(2),
  )

  return scale
}
