import { BufferGeometry, BufferAttribute } from 'three'
import { Primitive } from 'src/components/canvas/Primitive'
import { configureShaderMaterial } from 'src/utils/configureShaderMaterial'
import line_vert from 'src/components/canvas/SimulationMaterial/glsl/line.vert?raw'
import advection_frag from 'src/components/canvas/SimulationMaterial/glsl/advection.frag?raw'
import { forwardRef, useMemo } from 'react'

configureShaderMaterial({
  BoundaryShaderMaterial: {
    vert: line_vert,
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
const squareVertices = new Float32Array([
  // left
  -1, -1, 0, -1, 1, 0,

  // top
  -1, 1, 0, 1, 1, 0,

  // right
  1, 1, 0, 1, -1, 0,

  // bottom
  1, -1, 0, -1, -1, 0,
])

const RawBoundary = ({ vertices = squareVertices, visible, ...uniforms }, ref) => {
  const geometry = useMemo(() => {
    const boundaryG = new BufferGeometry()
    boundaryG.setAttribute('position', new BufferAttribute(vertices, 3))
    return boundaryG
  }, [vertices])

  return (
    <lineSegments visible={visible} ref={ref}>
      <Primitive object={geometry} attach='geometry' />
      <boundaryShaderMaterial {...uniforms} />
    </lineSegments>
  )
}

export const Boundary = forwardRef(RawBoundary)
