import { forwardRef } from 'react'
import { ShaderPass } from 'src/components/canvas/ShaderPasses'
import { configureShaderMaterial } from 'src/utils/configureShaderMaterial'
import mouse_vert from 'src/components/canvas/SimulationMaterial/glsl/mouse.vert'
import externalForce_frag from './glsl/sim/externalForce.frag'
import { Boundary } from './Boundary'

configureShaderMaterial({
  ExternalForceShaderMaterial: {
    vert: mouse_vert,
    frag: externalForce_frag,
    uniforms: {
      px: {
        value: null,
      },
      force: {
        value: null,
      },
      center: {
        value: null,
      },
      scale: {
        value: null,
      },
    },
  },
})

export const ExternalForcePass = forwardRef(function ExternalForcePass({ cursorSize, ...uniforms }, ref) {
  return (
    <ShaderPass ref={ref} name='ExternalForcePass'>
      <camera />
      <mesh>
        <planeGeometry args={[1, 1]} />
        <externalForceShaderMaterial {...uniforms} />
      </mesh>
    </ShaderPass>
  )
})
