import { useThree } from '@react-three/fiber'
import { forwardRef, useImperativeHandle, useRef } from 'react'

export const Menu = forwardRef(function Menu(
  { colorTheme, current, ...props },
  forwardedRef,
) {
  const { width, height } = useThree(({ size }) => size)
  const mesh = useRef()
  useImperativeHandle(forwardedRef, () => mesh.current)
  const material = useRef()

  return (
    <>
      <mesh ref={mesh} {...props}>
        <planeGeometry args={[1, (1 * (height - 200)) / width]} />
        <meshStandardMaterial
          ref={material}
          color={[colorTheme.slate, colorTheme.black][current - 1]}
          opacity={[0.03, 0.2][current - 1]}
          transparent
        />
      </mesh>
    </>
  )
})
