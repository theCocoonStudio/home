import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Camera, HalfFloatType, PlaneGeometry, RGFormat, Vector2 } from 'three'
import { useFBO } from '@react-three/drei'
import { advectionPassConfig } from './AdvectionPass.canvas'
import { forcePassConfig } from './ForcePass.canvas'
import { meshForcePassConfig } from './MeshForcePass.canvas'
import { viscousPassConfig } from './ViscousPass.canvas'
import { divergencePassConfig } from './DivergencePass.canvas'
import { poissonPassConfig } from './PoissonPass.canvas'
import { pressurePassConfig } from './PressurePass.canvas'
import { outputPassConfig } from './OutputPass.canvas'
import { ShaderPass } from './ShaderPass'
import { FrameSplitter } from '../../../website/utils/frame'

// force calculation default
const defaultForceCallback = (delta, clock, pointer, pointerDiff) => ({
  force: pointerDiff,
  center: pointer,
})
export const useFluidTexture = ({
  /* simulation physics options */
  poissonIterations = 32,
  viscousIterations = 32,
  forceValue = 1,
  resolution = 0.5,
  runEvery = 1,
  forceSize = 100,
  viscous = 30,
  isBounce = true,
  dt = 0.014,
  isViscous = true,
  BFECC = true,
  forceCallbackRef,
  forceMesh,
  customCamera,
  /* fbo options */
  fboWidth,
  fboHeight,
  fboOpts = { type: HalfFloatType, format: RGFormat },
  outputFboOpts = { type: HalfFloatType },
  /* render options */
  manual = false, // auto mode default
  priority = -1, // auto mode only
  pause = false, // auto mode only,
  pauseRef = {},
  manualRef = {},
}) => {
  // reactive state data (along with passed args)
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
  const { gl, camera: defaultCamera } = useThree(({ gl, camera }) => ({
    gl,
    camera,
  }))

  // shared object refs
  const camera = useRef(new Camera())
  const geometry = useRef(new PlaneGeometry(2.0, 2.0))

  // intermediate value refs
  const pointerDiff = useRef(new Vector2(0, 0))
  const oldPointer = useRef(new Vector2(0, 0))
  const oldForceMeshPosition = useRef(new Vector2(0, 0))
  const viewportSize = useRef(new Vector2(0, 0))

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
    ...outputFboOpts,
  })

  // uniforms refs
  const uniforms = useRef({
    boundarySpace: new Vector2(),
    cellScale: new Vector2(),
    fboSize: new Vector2(),
    force: new Vector2(),
    meshForce: new Vector2(),
    center: new Vector2(),
    scale: new Vector2(forceSize, forceSize),
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

  // init shader passes references
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

  const meshForcePass = useRef(
    new ShaderPass({
      ...meshForcePassConfig,
      camera: null,
      geometry: forceMesh ? forceMesh.geometry : null,
    })
      .updateUniforms({
        force: {
          value: uniforms.current.meshForce,
        },
      })
      .setFBO(vel1),
  )

  useEffect(() => {
    if (forceMesh) {
      meshForcePass.current.geometry = forceMesh.geometry
      meshForcePass.current.mesh.geometry = meshForcePass.current.geometry
      meshForcePass.current.camera = customCamera || defaultCamera
      oldPointer.current.set(0, 0)
    } else {
      oldForceMeshPosition.current.set(0, 0)
    }
  }, [customCamera, defaultCamera, forceMesh])

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
          value: new Vector2(0, 0),
        },
      })
      .setFBO(output),
  )
  // render callback
  const render = useCallback(
    (state, delta) => {
      // advection pass
      advectionPass.current.children.visible = isBounce
      advectionPass.current.children.material.uniforms =
        advectionPass.current.uniforms
      advectionPass.current.render(gl)

      // external force pass
      if (!forceMesh) {
        const fc =
          typeof forceCallbackRef.current === 'function'
            ? forceCallbackRef.current
            : defaultForceCallback

        const { clock, pointer } = state || {}

        if (pointer) {
          pointerDiff.current.subVectors(pointer, oldPointer.current)
          oldPointer.current.copy(pointer)
        }

        const {
          force,
          center,
          radius = forceSize,
        } = fc(
          delta,
          clock && clock.getElapsedTime(),
          pointer && pointer.clone(),
          pointer && pointerDiff.current.clone(),
        )

        uniforms.current.force.set(force.x * forceValue, force.y * forceValue)
        uniforms.current.center.set(center.x, center.y)
        uniforms.current.scale.set(radius, radius)
        forcePass.current.render(gl)
      } else {
        meshForcePass.current.mesh.position.copy(forceMesh.position)
        meshForcePass.current.mesh.scale
          .copy(forceMesh.scale)
          .multiplyScalar(0.99)
        meshForcePass.current.mesh.rotation.copy(forceMesh.rotation)
        meshForcePass.current.mesh.matrixWorldNeedsUpdate = true
        const activeCamera = customCamera || defaultCamera
        activeCamera.getViewSize(
          activeCamera.position.z - forceMesh.position.z,
          viewportSize.current,
        )

        uniforms.current.meshForce
          .set(
            (forceMesh.position.x - oldForceMeshPosition.current.x) /
              viewportSize.current.x,
            (forceMesh.position.y - oldForceMeshPosition.current.y) /
              viewportSize.current.y,
          )
          .multiplyScalar(2)

        oldForceMeshPosition.current.set(
          forceMesh.position.x,
          forceMesh.position.y,
        )
        meshForcePass.current.render(gl)
      }
      // viscosity pass
      let vel = vel1
      if (isViscous) {
        let fbo_in, fbo_out
        for (let i = 0; i < viscousIterations; i++) {
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
      for (let i = 0; i < poissonIterations; i++) {
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
    },
    [
      isBounce,
      gl,
      forceMesh,
      vel1,
      isViscous,
      forceCallbackRef,
      forceSize,
      forceValue,
      customCamera,
      defaultCamera,
      viscousIterations,
      visc0,
      visc1,
      poissonIterations,
      pressure0,
      pressure1,
    ],
  )

  // frame splitter and reactive updates
  const frameSplitter = useMemo(() => new FrameSplitter(), [])
  useEffect(() => {
    frameSplitter.set(render, runEvery)
  }, [frameSplitter, render, runEvery])
  // simulation updates
  useFrame((state, delta) => {
    if (!manual && !pause && !pauseRef?.current && !manualRef?.current) {
      frameSplitter.frame(state, delta)
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
      meshForcePass.current.dispose(true, false, false, true)
      viscousPass.current.dispose(true, false, false, true)
      divergencePass.current.dispose(true, false, false, true)
      poissonPass.current.dispose(true, false, false, true)
      pressurePass.current.dispose(true, false, false, true)
      outputPass.current.dispose(true, false, false, true)
    },
    [],
  )

  return { texture: output.texture, render }
}
