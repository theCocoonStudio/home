import {
  useRef,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useEffect,
} from 'react'
import { ExtrudeGeometry, Shape } from 'three'

export const Next = forwardRef(function Next(
  { prev, colorTheme, ...props },
  forwardedRef,
) {
  const { triangleGeometry, geometry } = useMemo(() => {
    // play geometry
    const triangleShape = new Shape()
      .moveTo(-0.2, -0.2)
      .lineTo(-0.2, 0.2)
      .lineTo(0.2, 0)
      .lineTo(-0.2, -0.2)
    const triangleGeometry = new ExtrudeGeometry(triangleShape, {
      depth: 0.03,
      bevelEnabled: true,
      bevelSegments: 6,
      steps: 2,
      bevelSize: 0.15,
      bevelThickness: 0.03,
    })
    triangleGeometry.center()
    // pause geometry
    const factor = 0.5
    const shape = new Shape()
      .moveTo(-factor, -factor)
      .lineTo(factor, -factor)
      .lineTo(factor, factor)
      .lineTo(-factor, factor)
      .lineTo(-factor, -factor)

    const geometry = new ExtrudeGeometry(shape, {
      depth: 0.1,
      bevelEnabled: true,
      bevelSegments: 6,
      steps: 2,
      bevelSize: 0.08,
      bevelThickness: 0.03,
    })
    geometry.center()
    return { triangleGeometry, geometry }
  }, [])

  const mesh = useRef()
  const mesh2 = useRef()
  const ref = useRef()
  useImperativeHandle(forwardedRef, () => ref.current)

  useEffect(
    () => () => {
      geometry.dispose()
      triangleGeometry.dispose()
    },
    [geometry, triangleGeometry],
  )

  return (
    <group ref={ref} {...props} rotation-y={prev ? Math.PI : 0}>
      <mesh
        ref={mesh}
        geometry={triangleGeometry}
        rotation-x={Math.PI}
        scale={[0.85, 1.1, 0.75]}
        morphTargetInfluences={[0]}
        position-x={0.15}
      >
        <meshStandardMaterial
          roughness={0.2}
          metalness={0.4}
          color={colorTheme.white}
          opacity={0.2}
          transparent
        />
      </mesh>
      <mesh
        ref={mesh2}
        scale={[0.2 * 0.75, 0.75, 0.75]}
        position-x={-0.5 + (0.2 * 0.75) / 2}
        rotation-x={Math.PI}
        morphTargetInfluences={[0]}
        geometry={geometry}
      >
        <meshStandardMaterial
          roughness={0.2}
          metalness={0.4}
          color={colorTheme.white}
          opacity={0.2}
          transparent
        />
      </mesh>
    </group>
  )
})
