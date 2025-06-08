import { Canvas } from '@react-three/fiber'
import { forwardRef } from 'react'
import { PCFSoftShadowMap } from 'three'
/* import styles from 'website/styles/ThreeApp.module.css' */

export const ThreeApp = forwardRef(function ThreeApp(
  { children, ...props },
  ref,
) {
  return (
    <Canvas
      shadows
      gl={{
        clearColor: 0x000000,
        autoClear: false,
        shadowMap: { enabled: true, type: PCFSoftShadowMap },
        /* stencil: true, */
        antialias: true,
      }}
      ref={ref}
      {...props}
    >
      {children}
    </Canvas>
  )
})
