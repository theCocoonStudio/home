import { forwardRef, useEffect, useMemo, useRef } from 'react'
import { configureShaderMaterial, configureSimulationRenderer } from './helpers'
import frag from './glsl/advection.frag?raw'
import vert from './glsl/face.vert?raw'
import lineVert from './glsl/line.vert?raw'
import { FluidQuad } from './FluidQuad'
import { RenderTexture } from '@react-three/drei'

configureShaderMaterial({
  AdvectionMaterial: {
    vert,
    frag,
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
        value: null,
      },
    },
  },
  AdvectionBoundaryMaterial: {
    vert: lineVert,
    frag,
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
        value: null,
      },
    },
  },
})

export const AdvectionTexture = forwardRef(function AdvectionTexture(
  { isBounce, isBFECC, boundarySpace, px, fboSize, velocity, dt, ...props },
  ref,
) {
  const quad = useRef()
  const boundary = useRef()

  // boundary buffer attribute
  const position = useMemo(
    () =>
      new Float32Array([
        // left
        -1, -1, 0, -1, 1, 0,

        // top
        -1, 1, 0, 1, 1, 0,

        // right
        1, 1, 0, 1, -1, 0,

        // bottom
        1, -1, 0, -1, -1, 0,
      ]),
    [],
  )

  // match boundary with quad
  useEffect(() => {
    boundary.current.position.copy(quad.current.position)
    boundary.current.rotation.copy(quad.current.rotation)
    boundary.current.scale.copy(quad.current.scale)
    boundary.current.matrixWorldNeedsUpdate = true
  }, [])

  return (
    <RenderTexture ref={ref} {...props}>
      <FluidQuad ref={quad}>
        <advectionMaterial
          boundarySpace={boundarySpace}
          px={px}
          fboSize={fboSize}
          velocity={velocity}
          dt={dt}
          isBFECC={isBFECC}
        />
        <lineSegments
          ref={boundary}
          visible={isBounce}
          onBeforeRender={configureSimulationRenderer}
        >
          <bufferGeometry>
            <bufferAttribute
              args={[position, 3]}
              attach='attributes-position'
            />
          </bufferGeometry>
          <advectionBoundaryMaterial
            boundarySpace={boundarySpace}
            px={px}
            fboSize={fboSize}
            velocity={velocity}
            dt={dt}
            isBFECC={isBFECC}
          />
        </lineSegments>
      </FluidQuad>
    </RenderTexture>
  )
})
