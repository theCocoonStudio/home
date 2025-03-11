import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { ExtrudeGeometry, Shape } from 'three'

export const Panel = forwardRef(function Panel(
  {
    children,
    extrudeSettings,
    width: totalWidth = 1.6,
    height: totalHeight = 0.9,
    borderRadius = 0.005,
    depth = 0.03,
    ...props
  },
  forwardedRef,
) {
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
      ...extrudeSettings,
    }),
    [depth, extrudeSettings],
  )
  const geometry = useMemo(() => {
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
  }, [borderRadius, depth, settings, totalHeight, totalWidth])

  useEffect(
    () => () => {
      geometry.dispose()
    },
    [geometry],
  )

  const mesh = useRef()
  useImperativeHandle(forwardedRef, () => mesh.current, [])
  return (
    <mesh ref={mesh} geometry={geometry} {...props}>
      {children}
      <meshPhysicalMaterial
        color='black'
        clearcoat={1.0}
        clearcoatRoughness={0.3}
        /* metalness={0.9} */
        roughness={0.5}
      />
    </mesh>
  )
})
