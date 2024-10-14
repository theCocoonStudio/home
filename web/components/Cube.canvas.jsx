import { forwardRef, useRef, useImperativeHandle } from 'react'
import { useFrame } from '@react-three/fiber'
import { CubeCamera, Edges, Outlines, RoundedBox } from '@react-three/drei'

export const Cube = forwardRef(function Cube(
  { children, edges = false, ...props },
  ref,
) {
  /* const cube = useBox(() => ({ mass: 1, ...props, position: 5 })) */
  const cube = useRef()

  /* const backlight = useRef() */

  useImperativeHandle(ref, () => cube.current, [cube])

  useFrame((state, delta) => {
    //damp(backlight.current, 'opacity', page === index ? 1 : 0, 1, delta)
    // damp(text.current, 'opacity', page === index ? 1 : 0, 1, delta)
    // dampC(material.current.color, page === index ? '#fff' : '#052205', 1, delta)
  })
  return (
    <mesh ref={cube} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      {children || <meshBasicMaterial transparent opacity={0.3} color='red' />}
      {/*  <mesh scale={1 - 0.05} position={[0, 0, -0.01]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial
          ref={backlight}
          transparent
          opacity={0.3}
          color='#050505'
        />
      </mesh> */}
      {edges && <Edges linewidth={4} scale={1} color='#050505' />}
    </mesh>
  )
})
