import { useRef, forwardRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { ShaderContext } from 'src/context/shader'
import { useShaderPassesMaterial } from 'src/components/canvas/ShaderPassesMaterial'

export const ShaderPassesMaterial = forwardRef(function ShaderProvider({ children, config = [], ...props }, ref) {
  useShaderPassesMaterial(config)

  return <ShaderContext.Provider {...props}>{children}</ShaderContext.Provider>
})
