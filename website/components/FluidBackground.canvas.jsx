import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { useFluidTexture } from 'src/hooks/useFluidTexture'
import { Vector2 } from 'three'
import { GradientTexture } from '@react-three/drei'

const _opts = {
  poissonIterations: 32,
  viscousIterations: 32,
  forceValue: 60,
  resolution: 0.5,
  forceSize: 90,
  viscosity: 80,
  dt: 0.014,
  isViscous: true,
  BFECC: true,
  isBounce: true,
}

export const FluidBackground = forwardRef(function FluidBackground(
  { stencil = {}, ...props },
  forwardedRef,
) {
  const mesh = useRef()

  const center = useRef(new Vector2(0, 0))

  const forceCallback = useMemo(() => {
    return (delta, elapsedTime) => {
      const force = new Vector2(
        Math.cos(elapsedTime),
        Math.sin(elapsedTime),
      ).multiplyScalar(0.5)
      return { force, center: center.current }
    }
  }, [])

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
      /* forceCallback, */
    }
  }, [])

  const texture = useFluidTexture(options)

  const boundsCallback = useCallback(({ min, max }) => {
    const width = max.x - min.x
    const height = max.y - min.y
    mesh.current.scale.setComponent(0, width)
    mesh.current.scale.setComponent(1, height)
  }, [])

  useImperativeHandle(forwardedRef, () => ({ boundsCallback }), [
    boundsCallback,
  ])

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
          stops={[0, 0.5, 1]} // As many stops as you want
          colors={['red', 'green', 'blue']} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
        />
      </meshBasicMaterial>
    </mesh>
  )
})
