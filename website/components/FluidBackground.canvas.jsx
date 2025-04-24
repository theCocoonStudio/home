import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import { useFluidTexture } from 'src/hooks/useFluidTexture'
import { useThree } from '@react-three/fiber'

const _opts = {
  poissonIterations: 32,
  viscousIterations: 32,
  forceValue: 10,
  resolution: 0.5,
  forceSize: 40,
  viscosity: 15,
  dt: 0.014,
  isViscous: true,
  BFECC: true,
  isBounce: true,
}

const _FluidBackground = forwardRef(function FluidBackground(
  { forceCallback, colors, ...props },
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
      forceCallback,
    }
  }, [forceCallback])

  const texture = useFluidTexture(options)

  const stateCallback = useCallback(({ size, viewport, camera }) => {
    return { size, viewport, camera }
  }, [])
  const { size, viewport, camera } = useThree(stateCallback)

  useEffect(() => {
    const current =
      mesh?.current &&
      viewport.getCurrentViewport(camera, mesh?.current.position.clone(), size)
    current?.width &&
      mesh.current.scale.set(
        current.width,
        current.height,
        mesh.current.scale.z,
      )
  }, [camera, size, viewport])
  return (
    <mesh ref={mesh} {...props}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial
        /* transparent
        alphaMap={texture} */
        bumpMap={texture}
        bumpScale={50}
        roughness={0.1}
        opacity={1}
        metalness={0.5}
      >
        {/*  <GradientTexture
          attach='map'
          stops={[0.1, 0.5, 0.9]} // As many stops as you want
          colors={[colors.red, colors.slate, colors.purple]} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
        /> */}
      </meshStandardMaterial>
    </mesh>
  )
})
export const FluidBackground = memo(_FluidBackground)
