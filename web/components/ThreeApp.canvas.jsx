import { Canvas } from '@react-three/fiber'
import { forwardRef } from 'react'

const ThreeApp = forwardRef(function ThreeApp({ children, ...props }, ref) {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 12, 7], fov: 35 }}
      gl={{ clearColor: 0x000000, autoClear: false }}
      ref={ref}
      {...props}
    >
      {children}
    </Canvas>
  )
})

export default ThreeApp
