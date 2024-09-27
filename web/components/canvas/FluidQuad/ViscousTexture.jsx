import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react'
import { configureShaderMaterial } from './helpers'
import frag from './glsl/viscous.frag?raw'
import vert from './glsl/face.vert?raw'
import { RenderTexture, useFBO } from '@react-three/drei'
import { FluidQuad } from './FluidQuad'

configureShaderMaterial({
  ViscousMaterial: {
    vert,
    frag,
    uniforms: {
      boundarySpace: {
        value: null,
      },
      velocity: {
        value: null,
      },
      velocity_new: {
        value: null,
      },
      v: {
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

export const ViscousTexture = forwardRef(function ViscousTexture(
  { boundarySpace, velocity, px, v, dt, iterations, fboSize, ...props },
  forwardRef,
) {
  const ref = useRef()
  useImperativeHandle(forwardRef, () => (v ? ref.current : velocity), [
    v,
    velocity,
  ])
  const target1 = useFBO(fboSize.x, fboSize.y)
  const target2 = useFBO(fboSize.x, fboSize.y)
  const velocity_new = useRef()

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

          velocity_new.current = fbo_in.texture
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

  return v ? (
    <RenderTexture ref={ref} {...props}>
      <FluidQuad frame={frame}>
        <viscousMaterial
          boundarySpace={boundarySpace}
          velocity={velocity}
          velocity_new={velocity_new.current}
          v={v}
          px={px}
          dt={dt}
        />
      </FluidQuad>
    </RenderTexture>
  ) : null
})
