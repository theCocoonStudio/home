import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { useFluidTexture } from 'src/hooks/useFluidTexture'
import { useThree } from '@react-three/fiber'

const _opts = {
  poissonIterations: 32,
  viscousIterations: 32,
  forceValue: 20,
  resolution: 0.5,
  forceSize: 30,
  viscosity: 30,
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
  const backing = useRef()

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

  const stateCallback = useCallback(({ size, viewport, camera }) => {
    return { size, viewport, camera }
  }, [])
  const { size, viewport, camera } = useThree(stateCallback)

  useEffect(() => {
    const current =
      mesh?.current &&
      viewport.getCurrentViewport(camera, mesh?.current.position.clone(), size)

    const { width, height } = current || {}
    current?.width &&
      mesh.current.scale.set(width, height, mesh.current.scale.z)

    const curentBacking =
      backing?.current &&
      viewport.getCurrentViewport(
        camera,
        backing?.current.position.clone(),
        size,
      )

    const { width: bWidth, height: bHeight } = curentBacking || {}
    curentBacking?.width &&
      backing.current.scale.set(bWidth, bHeight, backing.current.scale.z)
  }, [camera, size, viewport])

  const texture = useFluidTexture(options)

  useImperativeHandle(forwardedRef, () => mesh.current, [])

  return (
    <>
      <mesh ref={mesh} /* receiveShadow castShadow */ {...props}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial
          transparent
          alphaMap={texture}
          bumpMap={texture}
          bumpScale={300}
          roughness={0.5}
          metalness={0.7}
          color='white'
        ></meshStandardMaterial>
      </mesh>
      <mesh ref={backing} position-z={-0.5}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial transparent color={colors.slate} />
      </mesh>
    </>
  )
})
export const FluidBackground = memo(_FluidBackground)
