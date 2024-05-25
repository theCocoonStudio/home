import { useFrame } from '@react-three/fiber'
import { usePointerDiff } from 'src/hooks/usePointerDiff'
import { configureShaderMaterial } from 'src/utils/configureShaderMaterial'
import face_vert from 'src/components/canvas/SimulationMaterial/glsl/face.vert?raw'
import color_frag from 'src/components/canvas/SimulationMaterial/glsl/color.frag?raw'
import { Vector2 } from 'three'
import { ShaderPassesTexture } from 'src/components/canvas/ShaderPasses'
import { forwardRef, useRef } from 'react'
import { AdvectionPass } from './shader-passes/Advection'
import { ExternalForcePass } from './shader-passes/ExternalForce'

configureShaderMaterial({
  OutputShaderMaterial: {
    vert: face_vert,
    frag: color_frag,
    uniforms: {
      velocity: {
        value: null,
      },
      boundarySpace: {
        value: new Vector2(),
      },
    },
  },
})

const defaultOptions = {
  iterations_poisson: 32,
  iterations_viscous: 32,
  mouse_force: 20,
  resolution: 0.5,
  cursor_size: 100,
  viscous: 30,
  isBounce: false,
  dt: 0.014,
  isViscous: false,
  BFECC: true,
}

export const SimulationMaterial = forwardRef(function SimulationMaterial(
  { options = defaultOptions, ...props },
  outputRef,
) {
  const unit = useRef(new Vector2())
  const size = useRef(new Vector2())
  const boundarySpace = useRef(new Vector2())
  const force = useRef(new Vector2(0.0, 0.0))
  const center = useRef(new Vector2(0.0, 0.0))
  const scale = useRef(new Vector2(options.cursor_size, options.cursor_size))

  const diff = usePointerDiff()

  useFrame(({ size: { width, height } }, delta) => {
    const _width = Math.round(options.resolution * width)
    const _height = Math.round(options.resolution * height)

    const u_x = 1.0 / width
    const u_y = 1.0 / height

    unit.current.set(u_x, u_y)
    size.current.set(_width, _height)
  })

  return (
    <outputShaderMaterial ref={outputRef} {...props}>
      <ShaderPassesTexture>
        <AdvectionPass
          boundarySpace={unit.current}
          px={unit.current}
          fboSize={size.current}
          dt={options.dt}
          isBFECC={options.BFECC}
          isBounce={options.isBounce}
        />
        <ExternalForcePass px={unit.current} force={force.current} center={center.current} scale={scale.current} />
      </ShaderPassesTexture>
    </outputShaderMaterial>
  )
})
