import { Canvas } from '@react-three/fiber'
import { forwardRef } from 'react'
import { Page } from './Page.canvas'

const ThreeApp = forwardRef(function ThreeApp({ ...props }, ref) {
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
      {...props}
    >
      <Page />
    </Canvas>
  )
})

export default ThreeApp
