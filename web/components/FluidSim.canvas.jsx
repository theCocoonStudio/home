import { forwardRef, useImperativeHandle, useRef } from 'react'
import { DoubleSide } from 'three'
import { PerspectiveCamera } from '@react-three/drei'
import { useFluidTexture } from '../../src/hooks/useFluidTexture'
import { useFrame, useThree } from '@react-three/fiber'

const options = {
  iterations_poisson: 32,
  iterations_viscous: 32,
  mouse_force: 20,
  resolution: 0.5,
  cursor_size: 100,
  viscous: 10,
  isBounce: true,
  dt: 0.014,
  isViscous: true,
  BFECC: true,
}

/* simulation mesh */
export const FluidSim = forwardRef(function FluidSim(
  { ...props },
  forwardedRef,
) {
  // mesh ref
  const meshRef = useRef()
  useImperativeHandle(forwardedRef, () => meshRef.current)

  const aspect = useThree(({ viewport }) => viewport.aspect)

  const texture = useFluidTexture(options)
  useFrame(({ gl, scene, camera }) => {
    gl.render(scene, camera)
  }, 2)
  return (
    <>
      <mesh ref={meshRef} {...props} scale={[0.5 * aspect, 0.5, 0.5]}>
        <planeGeometry />
        <meshBasicMaterial side={DoubleSide} map={texture} />
      </mesh>
      <color attach='background' args={['#fff']} />
      <PerspectiveCamera makeDefault position-z={1} />
    </>
  )
})
