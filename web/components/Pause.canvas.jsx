import {
  useRef,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useEffect,
} from 'react'
import { ExtrudeGeometry, Shape } from 'three'

export const Pause = forwardRef(function Pause(
  { colorTheme, ...props },
  forwardedRef,
) {
  const geometry = useMemo(() => {
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
      bevelSegments: 7,
      steps: 2,
      bevelSize: 0.08,
      bevelThickness: 0.03,
    })
    geometry.center()
    return geometry
  }, [])

  const ref = useRef()
  useImperativeHandle(forwardedRef, () => ref.current)

  useEffect(
    () => () => {
      geometry.dispose()
    },
    [geometry],
  )
  return (
    <group ref={ref} {...props}>
      <mesh
        geometry={geometry}
        scale={[0.375 * 0.58, 0.58, 0.58]}
        position-x={0.58 * 0.35}
        rotation-x={Math.PI}
      >
        <meshStandardMaterial
          roughness={0.2}
          metalness={0.4}
          color={colorTheme.white}
          opacity={0.3}
          transparent
        />
      </mesh>
      <mesh
        geometry={geometry}
        scale={[0.375 * 0.58, 0.58, 0.58]}
        position-x={-0.58 * 0.35}
        rotation-x={Math.PI}
      >
        <meshStandardMaterial
          roughness={0.2}
          metalness={0.4}
          color={colorTheme.white}
          opacity={0.3}
          transparent
        />
      </mesh>
    </group>
  )
})
