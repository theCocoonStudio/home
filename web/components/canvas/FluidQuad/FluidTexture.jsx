import { forwardRef, useEffect, useMemo, useRef } from 'react'
import { configureShaderMaterial } from './helpers'
import frag from './glsl/color.frag?raw'
import vert from './glsl/face.vert?raw'
import { useFrame, useThree } from '@react-three/fiber'
import { RenderTexture } from '@react-three/drei'
import { Vector2 } from 'three'
import { PressureTexture } from './PressureTexture'
import { PoissonTexture } from './PoissonTexture'
import { DivergenceTexture } from './DivergenceTexture'
import { ViscousTexture } from './ViscousTexture'
import { ForceTexture } from './ForceTexture'
import { AdvectionTexture } from './AdvectionTexture'
import { FluidQuad } from './FluidQuad'

configureShaderMaterial({
  FluidMaterial: {
    vert,
    frag,
    uniforms: {
      velocity: { value: null },
      boundarySpace: { value: new Vector2() },
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

export const FluidTexture = forwardRef(function FluidTexture(
  { options: _options, ...props },
  ref,
) {
  const options = useMemo(
    () => ({ ...defaultOptions, ..._options }),
    [_options],
  )

  // shader pass textures
  const advectionTexture = useRef()
  const forceTexture = useRef()
  const viscousTexture = useRef()
  const divergenceTexture = useRef()
  const poissonTexture = useRef()
  const pressureTexture = useRef()

  // singleton uniforms
  const boundarySpace = useRef(new Vector2())
  const cellScale = useRef(new Vector2())
  const fboSize = useRef(new Vector2())

  // singleton uniform updates
  const { width, height } = useThree(({ size: { width, height } }) => ({
    width,
    height,
  }))
  useEffect(() => {
    fboSize.current.set(
      Math.round(width * options.resolution),
      Math.round(height * options.resolution),
    )

    cellScale.current.set(1.0 / fboSize.current.x, 1.0 / fboSize.current.y)

    if (options.isBounce) {
      boundarySpace.current.set(0, 0)
    } else {
      boundarySpace.current.copy(cellScale.current)
    }
  }, [height, options.isBounce, options.resolution, width])

  // simulation updates
  useFrame(() => {})

  return (
    <>
      <AdvectionTexture
        ref={advectionTexture}
        boundarySpace={cellScale.current}
        px={cellScale.current}
        fboSize={fboSize.current}
        velocity={pressureTexture.current}
        dt={options.dt}
        isBFECC={options.BFECC}
        isBounce={options.isBounce}
        //renderTextureProps
        width={fboSize.current.x}
        height={fboSize.current.y}
        renderPriority={-7}
      />
      <ForceTexture
        ref={forceTexture}
        px={cellScale.current}
        inputTexture={advectionTexture.current}
        mouse_force={options.mouse_force}
        cursor_size={options.cursor_size}
        //renderTextureProps
        width={fboSize.current.x}
        height={fboSize.current.y}
        renderPriority={-6}
      />
      <ViscousTexture
        ref={viscousTexture}
        boundarySpace={boundarySpace.current}
        px={cellScale.current}
        dt={options.dt}
        velocity={forceTexture.current}
        v={options.viscous}
        iterations={options.iterations_viscous}
        fboSize={fboSize.current}
        //renderTextureProps
        width={fboSize.current.x}
        height={fboSize.current.y}
        renderPriority={-5}
      />
      <DivergenceTexture
        ref={divergenceTexture}
        boundarySpace={boundarySpace.current}
        px={cellScale.current}
        dt={options.dt}
        velocity={viscousTexture.current}
        //renderTextureProps
        width={fboSize.current.x}
        height={fboSize.current.y}
        renderPriority={-4}
      />
      <PoissonTexture
        ref={poissonTexture}
        boundarySpace={boundarySpace.current}
        px={cellScale.current}
        divergence={divergenceTexture.current}
        fboSize={fboSize.current}
        iterations={options.iterations_poisson}
        //renderTextureProps
        width={fboSize.current.x}
        height={fboSize.current.y}
        renderPriority={-3}
      />
      <PressureTexture
        ref={pressureTexture}
        boundarySpace={boundarySpace.current}
        px={cellScale.current}
        dt={options.dt}
        pressure={poissonTexture.current}
        velocity={viscousTexture.current}
        //renderTextureProps
        width={fboSize.current.x}
        height={fboSize.current.y}
        renderPriority={-2}
      />
      <RenderTexture ref={ref} {...props}>
        <FluidQuad>
          <fluidMaterial
            velocity={pressureTexture.current}
            boundarySpace={boundarySpace.current}
            //renderTextureProps
            width={fboSize.current.x}
            height={fboSize.current.y}
            renderPriority={-1}
          />
        </FluidQuad>
      </RenderTexture>
    </>
  )
})
