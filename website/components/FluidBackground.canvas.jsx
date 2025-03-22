import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { useFluidTexture } from 'src/hooks/useFluidTexture'
import { GradientTexture } from '@react-three/drei'

const _opts = {
  poissonIterations: 32,
  viscousIterations: 32,
  forceValue: 50,
  resolution: 0.5,
  forceSize: 50,
  viscosity: 30,
  dt: 0.014,
  isViscous: true,
  BFECC: true,
  isBounce: true,
}

export const FluidBackground = forwardRef(function FluidBackground(
  { stencil = {}, forceCallback, colors, ...props },
  forwardedRef,
) {
  const mesh = useRef()

  const options = useMemo(() => {
    const {
      poissonIterations: iterations_poisson,
      viscousIterations: iterations_viscous,
      forceValue: mouse_force,
      resolution,
      forceSize: cursor_size,
      viscosity: viscous,
      dt,
      isViscous,
      BFECC,
      isBounce,
    } = _opts
    return {
      iterations_poisson,
      iterations_viscous,
      mouse_force,
      resolution,
      cursor_size,
      viscous,
      dt,
      isViscous,
      BFECC,
      isBounce,
    }
  }, [])

  const texture = useFluidTexture(
    forceCallback ? { options, forceCallback } : options,
  )

  const boundsCallback = useCallback(({ min, max }) => {
    const width = max.x - min.x
    const height = max.y - min.y
    mesh.current.scale.setComponent(0, width)
    mesh.current.scale.setComponent(1, height)
  }, [])

  const scrollCallback = useCallback((data) => {
    console.log(data)
  }, [])

  useImperativeHandle(
    forwardedRef,
    () => ({ boundsCallback, scrollCallback }),
    [boundsCallback, scrollCallback],
  )

  return (
    <mesh ref={mesh} {...props}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        transparent
        alphaMap={texture}
        opacity={1.0}
        {...stencil}
      >
        <GradientTexture
          attach='map'
          stops={[0.1, 0.5, 0.9]} // As many stops as you want
          colors={[colors.slate, colors.mint, colors.slate]} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
        />
      </meshBasicMaterial>
    </mesh>
  )
})
