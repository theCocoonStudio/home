import { useCallback, useEffect, useMemo } from 'react'
import { Shape, ExtrudeGeometry } from 'three'

export const useItemGeometry = (depth = 0.1, borderRadius = 0.02) => {
  const settings = useMemo(
    () => ({
      steps: 2,
      depth: depth / 3,
      bevelEnabled: true,
      bevelThickness: depth / 3,
      bevelSize: depth / 3,
      bevelOffset: 0,
      bevelSegments: 6,
      curveSegments: 12,
    }),
    [depth],
  )
  const geometry = useMemo(() => {
    const totalWidth = 1.0
    const totalHeight = 1.0
    const width = totalWidth - (2 * depth) / 3
    const height = totalHeight - (2 * depth) / 3
    const shape = new Shape()
      .moveTo(-width / 2, -height / 2 + borderRadius)
      .lineTo(-width / 2, height / 2 - borderRadius)
      .arc(borderRadius, 0, borderRadius, Math.PI, Math.PI / 2, true)
      .lineTo(width / 2 - borderRadius, height / 2)
      .arc(0, -borderRadius, borderRadius, Math.PI / 2, 0, true)
      .lineTo(width / 2, -height / 2 + borderRadius)
      .arc(-borderRadius, 0, borderRadius, 0, (Math.PI * 3) / 2, true)
      .lineTo(-width / 2 + borderRadius, -height / 2)
      .arc(0, borderRadius, borderRadius, (Math.PI * 3) / 2, Math.PI, true)

    const geometry = new ExtrudeGeometry(shape, settings)
    geometry.center()

    return geometry
  }, [borderRadius, depth, settings])

  useEffect(
    () => () => {
      geometry.dispose()
    },
    [geometry],
  )

  const getDepthScaleFactor = useCallback(
    (targetDepth) => targetDepth / depth,
    [depth],
  )

  const returnVal = useMemo(
    () => ({ geometry, getDepthScaleFactor, depth }),
    [depth, geometry, getDepthScaleFactor],
  )
  return returnVal
}
