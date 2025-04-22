import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Camera, PlaneGeometry, Vector2 } from 'three'
import { useFBO } from '@react-three/drei'
import { advectionPassConfig } from './AdvectionPass.canvas'
import { forcePassConfig } from './ForcePass.canvas'
import { viscousPassConfig } from './ViscousPass.canvas'
import { divergencePassConfig } from './DivergencePass.canvas'
import { poissonPassConfig } from './PoissonPass.canvas'
import { pressurePassConfig } from './PressurePass.canvas'
import { outputPassConfig } from './OutputPass.canvas'
import { ShaderPass } from './ShaderPass'

const defaultOpts = {
  iterations_poisson: 32,
  iterations_viscous: 32,
  mouse_force: 20,
  resolution: 0.5,
  cursor_size: 100,
  viscous: 30,
  isBounce: true,
  dt: 0.014,
  isViscous: false,
  BFECC: true,
}

const defaultForceCallback = (delta, clock, pointer, pointerDiff) => ({
  force: pointerDiff,
  center: pointer,
})
export const useFluidTexture = (
  options = {},
  priority = -1,
  [fboWidth, fboHeight, fboOpts = {}] = [],
  pause,
) => {
  const {
    iterations_poisson,
    iterations_viscous,
    mouse_force,
    resolution,
    cursor_size,
    viscous,
    isBounce,
    dt,
    isViscous,
    BFECC,
    forceCallback,
  } = { ...defaultOpts, ...options }

  // independent data (along with hook's passed args)
  const sizeCallback = useCallback(
    (state) => ({
      width: fboWidth || Math.floor(state.get().size.width * resolution),
      height: fboHeight || Math.floor(state.get().size.height * resolution),
    }),
    [fboHeight, fboWidth, resolution],
  )
  const sizeEqFn = useCallback((prev, curr) => {
    return prev.width === curr.width && prev.height === curr.height
  }, [])

  const { width, height } = useThree(sizeCallback, sizeEqFn)

  // shared objects
  const camera = useRef(new Camera())
  const geometry = useRef(new PlaneGeometry(2.0, 2.0))

  // intermediate values
  const pointerDiff = useRef(new Vector2(0, 0))
  const oldPointer = useRef(new Vector2(0, 0))

  // fboReferences
  const vel0 = useFBO(width, height, {
    depthBuffer: false,
    ...fboOpts,
  })
  const vel1 = useFBO(width, height, {
    depthBuffer: false,
    ...fboOpts,
  })
  const visc0 = useFBO(width, height, {
    depthBuffer: false,
    ...fboOpts,
  })
  const visc1 = useFBO(width, height, {
    depthBuffer: false,
    ...fboOpts,
  })
  const div = useFBO(width, height, {
    depthBuffer: false,
    ...fboOpts,
  })
  const pressure0 = useFBO(width, height, {
    depthBuffer: false,
    ...fboOpts,
  })
  const pressure1 = useFBO(width, height, {
    depthBuffer: false,
    ...fboOpts,
  })
  const output = useFBO(width, height, {
    depthBuffer: false,
    ...fboOpts,
  })

  // uniform references
  const uniforms = useRef({
    boundarySpace: new Vector2(),
    cellScale: new Vector2(),
    fboSize: new Vector2(),
    force: new Vector2(),
    center: new Vector2(),
    scale: new Vector2(cursor_size, cursor_size),
    dt,
    viscous,
    BFECC,
  })

  // reactive uniform updates
  useEffect(() => {
    // vectors
    const { boundarySpace, cellScale, fboSize } = uniforms.current
    fboSize.set(width, height)
    cellScale.set(1.0 / fboSize.x, 1.0 / fboSize.y)

    if (isBounce) {
      boundarySpace.set(0, 0)
    } else {
      boundarySpace.copy(cellScale)
    }
    // primitives
    uniforms.current.dt = dt
    uniforms.current.viscous = viscous
    uniforms.current.BFECC = BFECC
  }, [BFECC, dt, height, isBounce, viscous, width])

  // shader passes references
  const advectionPass = useRef(
    new ShaderPass({
      ...advectionPassConfig,
      camera: camera.current,
      geometry: geometry.current,
    })
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
    new ShaderPass({
      ...forcePassConfig,
      camera: camera.current,
      geometry: geometry.current,
    })
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
    new ShaderPass({
      ...viscousPassConfig,
      camera: camera.current,
      geometry: geometry.current,
    })
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
    new ShaderPass({
      ...divergencePassConfig,
      camera: camera.current,
      geometry: geometry.current,
    })
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
    new ShaderPass({
      ...poissonPassConfig,
      camera: camera.current,
      geometry: geometry.current,
    })
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
    new ShaderPass({
      ...pressurePassConfig,
      camera: camera.current,
      geometry: geometry.current,
    })
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
    new ShaderPass({
      ...outputPassConfig,
      camera: camera.current,
      geometry: geometry.current,
    })
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
  useFrame(({ gl, pointer, clock }, delta) => {
    if (!pause?.current) {
      // advection pass
      advectionPass.current.children.visible = isBounce
      advectionPass.current.children.material.uniforms =
        advectionPass.current.uniforms
      advectionPass.current.render(gl)

      // external force pass
      pointerDiff.current.subVectors(pointer, oldPointer.current)
      oldPointer.current.copy(pointer)

      const fc =
        typeof forceCallback === 'function'
          ? forceCallback
          : defaultForceCallback

      const {
        force,
        center,
        radius = cursor_size,
      } = fc(
        delta,
        clock.getElapsedTime(),
        pointer.clone(),
        pointerDiff.current.clone(),
      )

      uniforms.current.force.set(force.x * mouse_force, force.y * mouse_force)
      uniforms.current.center.set(center.x, center.y)
      uniforms.current.scale.set(radius, radius)

      forcePass.current.render(gl)

      // viscosity pass
      let vel = vel1
      if (isViscous) {
        let fbo_in, fbo_out
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
    }
  }, priority)

  // dispose on component unmount
  useEffect(
    () => () => {
      // dispose passed-in values (useFBO autodisposes)
      geometry.current.dispose()
      // dispose internal values
      advectionPass.current.dispose(true, false, false, true)
      forcePass.current.dispose(true, false, false, true)
      viscousPass.current.dispose(true, false, false, true)
      divergencePass.current.dispose(true, false, false, true)
      poissonPass.current.dispose(true, false, false, true)
      pressurePass.current.dispose(true, false, false, true)
      outputPass.current.dispose(true, false, false, true)
    },
    [],
  )

  return output.texture
}
