import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Vector2 } from 'three'
import { advectionPassConfig } from './AdvectionPass'
import { forcePassConfig } from './ForcePass'
import { viscousPassConfig } from './ViscousPass'
import { divergencePassConfig } from './DivergencePass'
import { poissonPassConfig } from './PoissonPass'
import { pressurePassConfig } from './PressurePass'
import { outputPassConfig } from './OutputPass'
import { useFBO } from '@react-three/drei'
import { ShaderPass } from './ShaderPass'

export const useFluidTexture = (
  {
    iterations_poisson = 32,
    iterations_viscous = 32,
    mouse_force = 20,
    resolution = 0.5,
    cursor_size = 100,
    viscous = 30,
    isBounce = false,
    dt = 0.014,
    isViscous = false,
    BFECC = true,
  } = {},
  priority = 1,
) => {
  // independent data (along with hook's passed args)
  const { width, height } = useThree(({ size: { width, height } }) => ({
    width,
    height,
  }))

  const pointerDiff = useRef(new Vector2(0, 0))
  const oldPointer = useRef(new Vector2(0, 0))

  // fboReferences
  const vel0 = useFBO(width, height)
  const vel1 = useFBO(width, height)
  const visc0 = useFBO(width, height)
  const visc1 = useFBO(width, height)
  const div = useFBO(width, height)
  const pressure0 = useFBO(width, height)
  const pressure1 = useFBO(width, height)
  const output = useFBO(width, height)

  // uniform references
  const uniforms = useRef({
    boundarySpace: new Vector2(),
    cellScale: new Vector2(),
    fboSize: new Vector2(),
    force: new Vector2(),
    center: new Vector2(),
    scale: new Vector2(cursor_size, cursor_size),
  })

  // reactive uniform updates
  useEffect(() => {
    const { boundarySpace, cellScale, fboSize } = uniforms.current

    fboSize.set(Math.round(width * resolution), Math.round(height * resolution))
    cellScale.set(1.0 / fboSize.x, 1.0 / fboSize.y)

    if (isBounce) {
      boundarySpace.set(0, 0)
    } else {
      boundarySpace.copy(cellScale)
    }
  }, [height, isBounce, resolution, width])

  // shader passes references
  const advectionPass = useRef(
    new ShaderPass(advectionPassConfig)
      .updateUniforms({
        boundarySpace: {
          value: uniforms.current.cellScale,
        },
        px: {
          value: uniforms.current.cellScale,
        },
        fboSize: {
          value: uniforms.current.fboSize,
        },
        velocity: {
          value: vel0.texture,
        },
        dt: {
          value: dt,
        },
        isBFECC: {
          value: true,
        },
      })
      .setFBO(vel1),
  )
  const forcePass = useRef(
    new ShaderPass(forcePassConfig)
      .updateUniforms({
        px: {
          value: uniforms.current.cellScale,
        },
        force: {
          value: uniforms.current.force,
        },
        center: {
          value: uniforms.current.center,
        },
        scale: {
          value: uniforms.current.scale,
        },
      })
      .setFBO(vel1),
  )
  const viscousPass = useRef(
    new ShaderPass(viscousPassConfig)
      .updateUniforms({
        boundarySpace: {
          value: uniforms.current.boundarySpace,
        },
        velocity: {
          value: vel1.texture,
        },
        velocity_new: {
          value: visc0.texture,
        },
        v: {
          value: viscous,
        },
        px: {
          value: uniforms.current.cellScale,
        },
        dt: {
          value: dt,
        },
      })
      .setFBO(visc1),
  )
  const divergencePass = useRef(
    new ShaderPass(divergencePassConfig)
      .updateUniforms({
        boundarySpace: {
          value: uniforms.current.boundarySpace,
        },
        velocity: {
          value: visc0.texture,
        },
        dt: {
          value: dt,
        },
        px: {
          value: uniforms.current.cellScale,
        },
      })
      .setFBO(div),
  )
  const poissonPass = useRef(
    new ShaderPass(poissonPassConfig)
      .updateUniforms({
        boundarySpace: {
          value: uniforms.current.boundarySpace,
        },
        pressure: {
          value: pressure0.texture,
        },
        divergence: {
          value: div.texture,
        },
        px: {
          value: uniforms.current.cellScale,
        },
      })
      .setFBO(pressure1),
  )
  const pressurePass = useRef(
    new ShaderPass(pressurePassConfig)
      .updateUniforms({
        boundarySpace: {
          value: uniforms.current.boundarySpace,
        },
        pressure: {
          value: pressure0.texture,
        },
        velocity: {
          value: visc0.texture,
        },
        px: {
          value: uniforms.current.cellScale,
        },
        dt: {
          value: dt,
        },
      })
      .setFBO(vel0),
  )
  const outputPass = useRef(
    new ShaderPass(outputPassConfig)
      .updateUniforms({
        velocity: {
          value: vel0.texture,
        },
        boundarySpace: {
          value: new Vector2(),
        },
      })
      .setFBO(output),
  )

  // simulation updates
  useFrame(({ gl, pointer }) => {
    // advection pass
    advectionPass.current.updateUniforms({
      dt: {
        value: dt,
      },
      isBFECC: {
        value: BFECC,
      },
    }).children.visible = isBounce
    advectionPass.current.render(gl)

    // external force pass
    pointerDiff.current.subVectors(pointer, oldPointer.current)
    oldPointer.current.copy(pointer)

    uniforms.current.force.set(
      (pointerDiff.current.x / 2) * mouse_force,
      (pointerDiff.current.y / 2) * mouse_force,
    )
    const cursorSizeX = cursor_size * uniforms.current.cellScale.x
    const cursorSizeY = cursor_size * uniforms.current.cellScale.y

    const centerX = Math.min(
      Math.max(pointer.x, -1 + cursorSizeX + uniforms.current.cellScale.x * 2),
      1 - cursorSizeX - uniforms.current.cellScale.x * 2,
    )
    const centerY = Math.min(
      Math.max(pointer.y, -1 + cursorSizeY + uniforms.current.cellScale.y * 2),
      1 - cursorSizeY - uniforms.current.cellScale.y * 2,
    )
    uniforms.current.center.set(centerX, centerY)
    uniforms.current.scale.set(cursor_size, cursor_size)

    console.log(forcePass.current.material.uniforms.force.value)
    forcePass.current.render(gl)

    // viscosity pass
    let vel = vel1
    if (isViscous) {
      let fbo_in, fbo_out
      this.uniforms.v.value = viscous
      for (let i = 0; i < iterations_viscous; i++) {
        if (i % 2 == 0) {
          fbo_in = visc0
          fbo_out = visc1
        } else {
          fbo_in = visc1
          fbo_out = visc0
        }
        viscousPass.current
          .updateUniforms({
            v: {
              value: viscous,
            },
            dt: {
              value: dt,
            },
            velocity_new: {
              value: fbo_in.texture,
            },
          })
          .setFBO(fbo_out)
          .render(gl)
      }
      vel = fbo_out
    }

    // divergence pass
    divergencePass.current
      .updateUniforms({
        velocity: { value: vel.texture },
        dt: {
          value: dt,
        },
      })
      .render(gl)

    // poisson pass
    let p_in, p_out
    for (let i = 0; i < iterations_poisson; i++) {
      if (i % 2 == 0) {
        p_in = pressure0
        p_out = pressure1
      } else {
        p_in = pressure1
        p_out = pressure0
      }
      poissonPass.current
        .updateUniforms({ pressure: { value: p_in.texture } })
        .setFBO(p_out)
        .render(gl)
    }
    const pressure = p_out

    // pressure pass
    pressurePass.current
      .updateUniforms({
        dt: {
          value: dt,
        },
        velocity: {
          value: vel.texture,
        },
        pressure: {
          value: pressure.texture,
        },
      })
      .render(gl)

    // output pass
    outputPass.current.render(gl)
  }, priority)

  // TODO: dispose

  return output.texture
}
