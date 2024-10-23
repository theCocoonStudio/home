import {
  useRef,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useEffect,
} from 'react'
import { ExtrudeGeometry, Shape } from 'three'
import { damp, damp3 } from 'maath/easing'
import { useFrame } from '@react-three/fiber'

export const PlayPause = forwardRef(function PlayPause(
  { pause, colorTheme, ...props },
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
    // morph targets
    geometry.morphAttributes.position = [triangleGeometry.attributes.position]
    triangleGeometry.dispose()
    return geometry
  }, [])

  const mesh = useRef()
  const mesh2 = useRef()
  const material = useRef()
  const ref = useRef()
  useImperativeHandle(forwardedRef, () => ref.current)

  useEffect(
    () => () => {
      geometry.dispose()
    },
    [geometry],
  )
  useFrame((state, delta) => {
    if (pause) {
      material.current.opacity = 0
      mesh2.current.scale.y = 0
      damp(mesh.current.morphTargetInfluences, '0', 1, 0.18, delta)
      damp(mesh.current.position, 'x', 0, 0.18, delta)
      damp3(mesh.current.scale, [0.9, 0.9, 0.9], 0.18, delta)
    } else {
      damp(material.current, 'opacity', 0.2, 0.18, delta)
      damp3(mesh.current.scale, [0.375 * 0.68, 0.68, 0.68], 0.18, delta)
      damp3(mesh2.current.scale, [0.375 * 0.68, 0.68, 0.68], 0.18, delta)
      damp(mesh.current.morphTargetInfluences, '0', 0, 0.18, delta)
      damp(mesh.current.position, 'x', 0.68 * 0.35, 0.18, delta)
    }
  })
  return (
    <group ref={ref} {...props}>
      <mesh
        ref={mesh}
        geometry={geometry}
        rotation-x={Math.PI}
        scale={pause ? 0.9 : [0.375 * 0.68, 0.68, 0.68]}
        morphTargetInfluences={[0]}
        position-x={0.68 * 0.35}
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
        geometry={geometry}
        scale={[0.375 * 0.68, 0.68, 0.68]}
        position-x={-0.68 * 0.35}
        rotation-x={Math.PI}
        morphTargetInfluences={[0]}
      >
        <meshStandardMaterial
          ref={material}
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
