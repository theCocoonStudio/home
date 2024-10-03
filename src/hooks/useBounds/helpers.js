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
  const width = obj.geometry.parameters.width
  const scale = obj.scale.clone()
  const scaleX = Math.abs(
    (results.bounds.max.getComponent(0) - results.bounds.min.getComponent(0)) /
      width,
  )
  const scaleFactor = scaleX / scale.getComponent(0)
  return scale.multiplyScalar(scaleFactor)
}
