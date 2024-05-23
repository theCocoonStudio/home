import { Canvas, useFrame } from '@react-three/fiber'
import { usePointerDiff } from 'src/hooks/usePointerDiff'
import { configureShaderMaterial } from 'src/utils/configureShaderMaterial'
import face_vert from './glsl/sim/face.vert'
import color_frag from './glsl/sim/color.frag'
import { Vector2 } from 'three'
import { ShaderPassesTexture, ShaderPass } from 'src/components/ShaderPassesTexture'
import { useRef } from 'react'

configureShaderMaterial({
  OutputShaderMaterial: {
    vert: face_vert,
    frag: color_frag,
    uniforms: {
      velocity: {
        value: this.simulation.fbos.vel_0.texture,
      },
      boundarySpace: {
        value: new Vector2(),
      },
    },
  },
  AdvectionShaderMaterial: {},
})

const options = {
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

export default function Simulation({ ...options }) {
  const unit = useRef(new Vector2())
  const limit = useRef(new Vector2())

  const diff = usePointerDiff()

  useFrame(({ size }, delta) => {
    const width = Math.round(options.resolution * size.width)
    const height = Math.round(options.resolution * size.height)

    const u_x = 1.0 / width
    const u_y = 1.0 / height

    unit.current.set(u_x, u_y)
    limit.current.set(width, height)
  })

  return (
    <>
      <Canvas onCreated={({ gl }) => gl.setClearColor(0x000000)} id='mainCanvas'>
        <mesh>
          <planeBufferGeometry args={[2, 2]} />
          <outputShaderMaterial>
            <ShaderPassesTexture>
              <ShaderPass></ShaderPass>
            </ShaderPassesTexture>
          </outputShaderMaterial>
        </mesh>
      </Canvas>
    </>
  )
}
