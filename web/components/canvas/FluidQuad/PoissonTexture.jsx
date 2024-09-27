import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react'
import { configureShaderMaterial } from './helpers'
import frag from './glsl/poisson.frag?raw'
import vert from './glsl/face.vert?raw'
import { RenderTexture, useFBO } from '@react-three/drei'
import { FluidQuad } from './FluidQuad'

configureShaderMaterial({
  PoissonMaterial: {
    vert,
    frag,
    uniforms: {
      boundarySpace: {
        value: null,
      },
      pressure: {
        value: null,
      },
      divergence: {
        value: null,
      },
      px: {
        value: null,
      },
    },
  },
})

export const PoissonTexture = forwardRef(function PoissonTexture(
  { boundarySpace, divergence, px, fboSize, iterations, ...props },
  forwardRef,
) {
  const ref = useRef()
  useImperativeHandle(forwardRef, () => ref.current)

  const target1 = useFBO(fboSize.x, fboSize.y)
  const target2 = useFBO(fboSize.x, fboSize.y)
  const pressure = useRef()

  const frame = useMemo(
    () => [
      ({ gl, scene, camera }) => {
        let fbo_in, fbo_out
        // iterations - 1 iterations
        for (var i = 0; i < iterations; i++) {
          if (i % 2 == 0) {
            fbo_in = target1
            fbo_out = target2
          } else {
            fbo_in = target2
            fbo_out = target1
          }

          pressure.current = fbo_in.texture
          gl.setRenderTarget(fbo_out)
          // last render (iteration) will run through RenderTexture
          if (i !== iterations - 1) {
            gl.render(scene, camera)
          }
        }
      },
      -1, // isolated priority applies only inside this RenderTexture;
    ],
    [iterations, target1, target2],
  )

  return (
    <RenderTexture ref={ref} {...props}>
      <FluidQuad frame={frame}>
        <poissonMaterial
          boundarySpace={boundarySpace}
          px={px}
          pressure={pressure.current}
          divergence={divergence}
        />
      </FluidQuad>
    </RenderTexture>
  )
})
