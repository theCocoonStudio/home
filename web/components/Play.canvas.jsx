import {
  useRef,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useEffect,
} from 'react'
import { ExtrudeGeometry, Shape } from 'three'

export const Play = forwardRef(function Play(
  { colorTheme, ...props },
  forwardedRef,
) {
  const geometry = useMemo(() => {
    const triangleShape = new Shape()
      .moveTo(-0.2, -0.2)
      .lineTo(-0.2, 0.2)
      .lineTo(0.2, 0)
      .lineTo(-0.2, -0.2)
    const geometry = new ExtrudeGeometry(triangleShape, {
      depth: 0.03,
      bevelEnabled: true,
      bevelSegments: 6,
      steps: 2,
      bevelSize: 0.15,
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
      <mesh geometry={geometry} rotation-x={Math.PI} scale={0.9}>
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
