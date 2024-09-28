import { forwardRef, useImperativeHandle, useRef } from 'react'
import { DoubleSide } from 'three'
import { PerspectiveCamera } from '@react-three/drei'
import { useFluidTexture } from '../../src/hooks/useFluidTexture'
import { useFrame, useThree } from '@react-three/fiber'

/* simulation mesh */
export const FluidSim = forwardRef(function FluidSim(
  { ...props },
  forwardedRef,
) {
  // mesh ref
  const meshRef = useRef()
  useImperativeHandle(forwardedRef, () => meshRef.current)

  const aspect = useThree(({ viewport }) => viewport.aspect)

  const texture = useFluidTexture()
  useFrame(({ gl, scene, camera }) => {
    gl.render(scene, camera)
  }, 2)
  return (
    <>
      <mesh ref={meshRef} {...props} scale-x={aspect}>
        <planeGeometry />
        <meshBasicMaterial side={DoubleSide} map={texture} />
      </mesh>
      <color attach='background' args={['#fff']} />
      <PerspectiveCamera makeDefault position-z={1} />
    </>
  )
})
