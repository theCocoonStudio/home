import { Canvas } from '@react-three/fiber'
import { forwardRef } from 'react'
/* import styles from 'website/styles/ThreeApp.module.css' */
import { ScrollControls } from '@react-three/drei'

export const ThreeApp = forwardRef(function ThreeApp(
  { children, ...props },
  ref,
) {
  return (
    <Canvas
      shadows
      camera={{ fov: 10 }}
      gl={{
        clearColor: 0x000000,
        autoClear: false,
        shadowMap: { enabled: true },
      }}
      ref={ref}
      {...props}
    >
      <ScrollControls pages={3} enabled={true}>
        {children}
      </ScrollControls>
    </Canvas>
  )
})
