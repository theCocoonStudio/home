import { useThree } from '@react-three/fiber'
import { forwardRef, useImperativeHandle, useRef } from 'react'

export const Menu = forwardRef(function Menu(
  { colorTheme, menu, ...props },
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
          color={colorTheme.slate}
          opacity={0.03}
          transparent
        />
      </mesh>
    </>
  )
})
