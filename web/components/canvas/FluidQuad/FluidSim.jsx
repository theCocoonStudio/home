import { forwardRef, useImperativeHandle, useRef } from 'react'
import { FluidTexture } from './FluidTexture'
import { DoubleSide } from 'three'
import { PerspectiveCamera } from '@react-three/drei'
import { useFluidTexture } from './useFluidTexture'
import { useFrame } from '@react-three/fiber'

/* simulation mesh */
export const FluidSim = forwardRef(function FluidSim(
  { options, ...props },
  forwardedRef,
) {
  // mesh ref
  const meshRef = useRef()
  useImperativeHandle(forwardedRef, () => meshRef.current)

  const texture = useFluidTexture()
  useFrame(({ gl, scene, camera }) => {
    gl.render(scene, camera)
  }, 2)
  return (
    <mesh ref={meshRef} {...props}>
      <color attach='background' args={['#fff']} />
      <PerspectiveCamera makeDefault position-z={1} />
      <planeGeometry />
      <meshBasicMaterial side={DoubleSide} map={texture}>
        {/* <FluidTexture attach='map' options={options} /> */}
      </meshBasicMaterial>
    </mesh>
  )
})
