import { forwardRef } from 'react'
import { ShaderPass } from 'src/components/canvas/ShaderPasses'
import { configureShaderMaterial } from 'src/utils/configureShaderMaterial'
import face_vert from 'src/components/canvas/SimulationMaterial/glsl/face.vert?raw'
import advection_frag from 'src/components/canvas/SimulationMaterial/glsl/advection.frag?raw'
import { Boundary } from './Boundary'

configureShaderMaterial({
  AdvectionShaderMaterial: {
    vert: face_vert,
    frag: advection_frag,
    uniforms: {
      boundarySpace: {
        value: null,
      },
      px: {
        value: null,
      },
      fboSize: {
        value: null,
      },
      velocity: {
        value: null,
      },
      dt: {
        value: null,
      },
      isBFECC: {
        value: true,
      },
    },
  },
})

export const AdvectionPass = forwardRef(function AdvectionPass({ isBounce, ...uniforms }, ref) {
  return (
    <ShaderPass ref={ref} name='AdvectionPass'>
      {({ PressurePass }) => (
        <>
          <camera />
          <mesh>
            <planeGeometry args={[2.0, 2.0]} />
            <advectionShaderMaterial {...uniforms} velocity={PressurePass?.current} />
          </mesh>
          <Boundary visible={isBounce} {...uniforms} velocity={PressurePass?.current} />
        </>
      )}
    </ShaderPass>
  )
})
