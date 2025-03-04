import { Environment } from '@react-three/drei'
import { useEffect, useMemo } from 'react'
import { ExtrudeGeometry, Shape } from 'three'
import { CarbonMaterial } from 'web/components/CarbonMaterial.canvas'

export const Panel = ({
  extrudeSettings,
  width: totalWidth = 1.6,
  height: totalHeight = 0.9,
  borderRadius = 0.005,
  depth = 0.01,
  ...props
}) => {
  const settings = useMemo(
    () => ({
      steps: 2,
      depth: depth,
      bevelEnabled: true,
      bevelThickness: depth,
      bevelSize: depth,
      bevelOffset: 0,
      bevelSegments: 6,
      curveSegments: 12,
      ...extrudeSettings,
    }),
    [depth, extrudeSettings],
  )
  const geometry = useMemo(() => {
    const width = totalWidth - 2 * depth
    const height = totalHeight - 2 * depth
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
  }, [borderRadius, depth, settings, totalHeight, totalWidth])

  useEffect(
    () => () => {
      geometry.dispose()
    },
    [geometry],
  )
  return (
    <mesh geometry={geometry} {...props}>
      <CarbonMaterial repeat={[16, 9]} />
      <Environment preset='warehouse' />
    </mesh>
  )
}
