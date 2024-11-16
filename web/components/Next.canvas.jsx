import { useFrame } from '@react-three/fiber'
import { dampC } from 'maath/easing'
import {
  useRef,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useEffect,
} from 'react'
import { AdditiveBlending, Color, ExtrudeGeometry, Shape } from 'three'

export const Next = forwardRef(function Next(
  { prev, colorTheme, renderPriority, opacity = 0.7, ...props },
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
      depth: 0.1,
      bevelEnabled: true,
      bevelSegments: 6,
      steps: 6,
      bevelSize: 0.2,
      bevelThickness: 0.2,
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
      depth: 0.25,
      bevelEnabled: true,
      bevelSegments: 6,
      steps: 6,
      bevelSize: 0.1,
      bevelThickness: 0.2,
    })
    geometry.center()
    return { triangleGeometry, geometry }
  }, [])

  const mesh = useRef()
  const mesh2 = useRef()
  const ref = useRef()
  const material = useRef()
  const material2 = useRef()
  useImperativeHandle(forwardedRef, () => ref.current)

  useEffect(
    () => () => {
      geometry.dispose()
      triangleGeometry.dispose()
    },
    [geometry, triangleGeometry],
  )
  const materialColor = useMemo(() => {
    return new Color(colorTheme)
  }, [colorTheme])

  /* eslint-disable-next-line */
  useFrame(({ state, delta }) => {
    dampC(material.current.color, materialColor, 0.2, delta)
    dampC(material2.current.color, materialColor, 0.2, delta)
  }, renderPriority)

  return (
    <group ref={ref} {...props} rotation-y={prev ? Math.PI : 0}>
      <mesh
        ref={mesh}
        geometry={triangleGeometry}
        rotation-x={Math.PI}
        scale={[0.7, 0.9, 0.6]}
        morphTargetInfluences={[0]}
        position-x={0.15}
      >
        <meshStandardMaterial
          ref={material}
          roughness={0.9}
          metalness={0.1}
          opacity={opacity}
          transparent
          blending={AdditiveBlending}
        />
      </mesh>
      <mesh
        ref={mesh2}
        scale={[0.3 * 0.6, 0.6, 0.6]}
        position-x={-0.5 + (0.2 * 0.6) / 2}
        rotation-x={Math.PI}
        morphTargetInfluences={[0]}
        geometry={geometry}
      >
        <meshStandardMaterial
          ref={material2}
          roughness={0.9}
          metalness={0.1}
          opacity={opacity}
          transparent
          blending={AdditiveBlending}
        />
      </mesh>
    </group>
  )
})
