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
  { pause, colorTheme, renderPriority, ...props },
  forwardedRef,
) {
  const { geometry, triangleGeometry } = useMemo(() => {
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

    return { triangleGeometry, geometry }
  }, [])

  const mesh = useRef()
  const mesh2 = useRef()
  const triangleMesh = useRef()

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
    <group ref={ref} {...props} scale={0.5} position-z={0.05}>
      {pause ? (
        <mesh
          ref={triangleMesh}
          geometry={triangleGeometry}
          scale={0.8}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial
            roughness={0.2}
            metalness={0.4}
            color={colorTheme.white}
            opacity={0.8}
            transparent
          />
        </mesh>
      ) : (
        <>
          <mesh
            ref={mesh}
            geometry={geometry}
            rotation-x={Math.PI}
            scale={[0.375 * 0.65, 0.65, 0.65]}
            position-x={0.65 * 0.35}
            castShadow
            receiveShadow
          >
            <meshStandardMaterial
              roughness={0.2}
              metalness={0.4}
              color={colorTheme.white}
              opacity={0.8}
              transparent
            />
          </mesh>
          <mesh
            ref={mesh2}
            geometry={geometry}
            scale={[0.375 * 0.65, 0.65, 0.65]}
            position-x={-0.65 * 0.35}
            rotation-x={Math.PI}
            castShadow
            receiveShadow
          >
            <meshStandardMaterial
              roughness={0.2}
              metalness={0.4}
              color={colorTheme.white}
              opacity={0.8}
              transparent
            />
          </mesh>
        </>
      )}
    </group>
  )
})
