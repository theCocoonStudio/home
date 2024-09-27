import { forwardRef } from 'react'
import { configureShaderMaterial } from './helpers'
import frag from './glsl/divergence.frag?raw'
import vert from './glsl/face.vert?raw'
import { FluidQuad } from './FluidQuad'
import { RenderTexture } from '@react-three/drei'

configureShaderMaterial({
  DivergenceMaterial: {
    vert,
    frag,
    uniforms: {
      boundarySpace: {
        value: null,
      },
      velocity: {
        value: null,
      },
      dt: {
        value: null,
      },
      px: {
        value: null,
      },
    },
  },
})

export const DivergenceTexture = forwardRef(function DivergenceTexture(
  { boundarySpace, velocity, px, dt, ...props },
  ref,
) {
  return (
    <RenderTexture ref={ref} {...props}>
      <FluidQuad>
        <divergenceMaterial
          boundarySpace={boundarySpace}
          velocity={velocity}
          px={px}
          dt={dt}
        />
      </FluidQuad>
    </RenderTexture>
  )
})
