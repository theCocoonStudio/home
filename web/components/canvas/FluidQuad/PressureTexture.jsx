import { forwardRef } from 'react'
import { configureShaderMaterial } from './helpers'
import frag from './glsl/pressure.frag?raw'
import vert from './glsl/face.vert?raw'
import { RenderTexture } from '@react-three/drei'
import { FluidQuad } from './FluidQuad'

configureShaderMaterial({
  PressureMaterial: {
    vert,
    frag,
    uniforms: {
      boundarySpace: {
        value: null,
      },
      pressure: {
        value: null,
      },
      velocity: {
        value: null,
      },
      px: {
        value: null,
      },
      dt: {
        value: null,
      },
    },
  },
})

export const PressureTexture = forwardRef(function PressureTexture(
  { boundarySpace, px, dt, velocity, pressure, ...props },
  ref,
) {
  return (
    <RenderTexture ref={ref} {...props}>
      <FluidQuad>
        <pressureMaterial
          boundarySpace={boundarySpace}
          px={px}
          dt={dt}
          velocity={velocity}
          pressure={pressure}
        />
      </FluidQuad>
    </RenderTexture>
  )
})
