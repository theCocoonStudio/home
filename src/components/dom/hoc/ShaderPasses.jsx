import { Canvas as WrappedCanvas } from '@react-three/fiber'
import { ShaderProvider } from 'src/context/providers/ShaderProvider'

export function ShaderPasses({ shaderTargets, children, ...props }) {
  return <ShaderProvider>{children}</ShaderProvider>
}
