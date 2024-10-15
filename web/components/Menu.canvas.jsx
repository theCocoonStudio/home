import { useThree } from '@react-three/fiber'
import { forwardRef } from 'react'

export const Menu = forwardRef(function Menu({ ...props }, forwardedRef) {
  const { width, height } = useThree(({ size }) => size)

  return (
    <mesh ref={forwardedRef} {...props}>
      <planeGeometry args={[1, (1 * (height - 200)) / width]} />
      <meshBasicMaterial color='red' />
    </mesh>
  )
})
