import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import { ShaderPass } from './ShaderPass'

export function configureShaderMaterial(materials = {}) {
  for (const name in materials) {
    const { uniforms, vert, frag } = materials[name]
    const Material = shaderMaterial(uniforms, vert, frag)
    extend({ [name]: Material })
  }
}

export function configureSimulationRenderer(gl) {
  gl.autoClear = false
  gl.setClearColor(0x000000)
}
