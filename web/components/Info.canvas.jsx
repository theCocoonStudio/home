import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { damp } from 'maath/easing'
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { Color, ExtrudeGeometry, MeshBasicMaterial, Shape } from 'three'

export const Info = forwardRef(function Info(
  { colorTheme, info, ...props },
  forwardedRef,
) {
  const group = useRef()
  useImperativeHandle(forwardedRef, () => group.current, [])

  const geometry = useMemo(() => {
    // play geometry
    const circle = new Shape()
    let r = 0.5
    let angle = 0
    const increment = (Math.PI * 2) / 32
    circle.moveTo(r * Math.cos(angle), r * Math.sin(angle))
    for (let i = 1; i < 32; i++) {
      angle += increment
      circle.lineTo(r * Math.cos(angle), r * Math.sin(angle))
    }
    circle.lineTo(r * Math.cos(0), r * Math.sin(0))
    const circleGeometry = new ExtrudeGeometry(circle, {
      depth: 0.03,
      bevelEnabled: true,
      bevelSegments: 6,
      steps: 2,
      bevelSize: 0.05,
      bevelThickness: 0.02,
    })
    circleGeometry.center()

    return circleGeometry
  }, [])

  const material = useMemo(
    () =>
      new MeshBasicMaterial({
        color: new Color('white'),
      }),
    [],
  )
  useEffect(
    () => () => {
      geometry.dispose()
      material.dispose()
    },
    [geometry, material],
  )

  useFrame((state, delta) => {
    damp(group.current.rotation, 'z', info ? Math.PI / 2 : 0, 0.2, delta)
  })
  return (
    <group ref={group} {...props}>
      <mesh geometry={geometry} scale={0.7} {...props}>
        <meshStandardMaterial
          roughness={0.2}
          metalness={0.7}
          color={colorTheme.white}
          opacity={0.3}
          transparent
        />
        <Text
          center
          /* color={'white'} */
          depthOffset={-0.05}
          scale={0.7}
          characters='i'
          material={material}
          fontWeight={'bold'}
        >
          i
        </Text>
      </mesh>
    </group>
  )
})
