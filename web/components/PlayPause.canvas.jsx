import {
  useRef,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useEffect,
} from 'react'
import { AdditiveBlending, Color, ExtrudeGeometry, Shape } from 'three'
import { damp, damp3, dampC } from 'maath/easing'
import { useFrame } from '@react-three/fiber'

export const PlayPause = forwardRef(function PlayPause(
  { pause, colorTheme, renderPriority, opacity = 0.7, ...props },
  forwardedRef,
) {
  const geometry = useMemo(() => {
    // play geometry
    const triangleShape = new Shape()
      .moveTo(-0.2, -0.2)
      .lineTo(-0.2, 0.2)
      .lineTo(0.2, 0)
      .lineTo(-0.2, -0.2)
    const triangleGeometry = new ExtrudeGeometry(triangleShape, {
      depth: 0.3,
      bevelEnabled: true,
      bevelSegments: 6,
      steps: 5,
      bevelSize: 0.25,
      bevelThickness: 0.1,
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
      depth: 0.2,
      bevelEnabled: true,
      bevelSegments: 6,
      steps: 5,
      bevelSize: 0.18,
      bevelThickness: 0.1,
    })
    geometry.center()
    // morph targets
    geometry.morphAttributes.position = [triangleGeometry.attributes.position]
    triangleGeometry.dispose()
    return geometry
  }, [])

  const mesh = useRef()
  const mesh2 = useRef()
  const material = useRef()
  const material2 = useRef()
  const ref = useRef()
  useImperativeHandle(forwardedRef, () => ref.current)

  useEffect(
    () => () => {
      geometry.dispose()
    },
    [geometry],
  )

  const materialColor = useMemo(() => {
    return new Color(colorTheme)
  }, [colorTheme])

  useFrame((state, delta) => {
    dampC(material.current.color, materialColor, 0.2, delta)
    dampC(material2.current.color, materialColor, 0.2, delta)
    if (pause) {
      material.current.opacity = 0
      mesh2.current.scale.y = 0
      damp(mesh.current.morphTargetInfluences, '0', 1, 0.18, delta)
      damp(mesh.current.position, 'x', 0, 0.18, delta)
      damp3(mesh.current.scale, [0.9, 0.9, 0.9], 0.18, delta)
    } else {
      damp(material.current, 'opacity', opacity, 0.18, delta)
      damp3(mesh.current.scale, [0.375 * 0.6, 0.6, 0.6], 0.18, delta)
      damp3(mesh2.current.scale, [0.375 * 0.6, 0.6, 0.6], 0.18, delta)
      damp(mesh.current.morphTargetInfluences, '0', 0, 0.18, delta)
      damp(mesh.current.position, 'x', 0.6 * 0.35, 0.18, delta)
    }
  }, renderPriority)
  return (
    <group ref={ref} {...props}>
      <mesh
        ref={mesh}
        geometry={geometry}
        rotation-x={Math.PI}
        scale={pause ? 0.9 : [0.375 * 0.6, 0.6, 0.6]}
        morphTargetInfluences={[0]}
        position-x={0.6 * 0.35}
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
      <mesh
        ref={mesh2}
        geometry={geometry}
        scale={[0.375 * 0.6, 0.6, 0.6]}
        position-x={-0.6 * 0.35}
        rotation-x={Math.PI}
        morphTargetInfluences={[0]}
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
    </group>
  )
})
