import { Canvas } from '@react-three/fiber'
import { forwardRef } from 'react'
import styles from 'website/styles/ThreeApp.module.css'

export const ThreeApp = forwardRef(function ThreeApp(
  { children, ...props },
  ref,
) {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 12, 7], fov: 35 }}
      gl={{
        clearColor: 0x000000,
        autoClear: false,
        shadowMap: { enabled: true },
      }}
      ref={ref}
      className={`${styles.canvas}`}
      {...props}
    >
      {children}
    </Canvas>
  )
})
