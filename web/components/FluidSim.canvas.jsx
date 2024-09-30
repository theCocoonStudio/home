import { forwardRef, useImperativeHandle, useRef } from 'react'
import { DoubleSide } from 'three'
import { PerspectiveCamera } from '@react-three/drei'
import { useFluidTexture } from '../../src/hooks/useFluidTexture'
import { useFrame, useThree } from '@react-three/fiber'
import { VideoTexture } from './VideoTexture.canvas'
import Video from 'public/10.mp4'

const options = {
  iterations_poisson: 32,
  iterations_viscous: 32,
  mouse_force: 20,
  resolution: 0.4,
  cursor_size: 40,
  viscous: 30,
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

  const { width } = useThree(({ viewport }) => viewport.width)

  const texture = useFluidTexture(options, undefined, [
    width * 0.8,
    width * 0.45,
  ])

  return (
    <>
      <mesh
        onClick={() => {
          console.log(texture)
        }}
        ref={meshRef}
        {...props}
        scale={[0.8, 0.45, 1]}
      >
        <planeGeometry />
        <meshBasicMaterial side={DoubleSide} transparent alphaMap={texture}>
          <VideoTexture video={Video} />
        </meshBasicMaterial>
      </mesh>
      <color attach='background' args={['#fff']} />
      <PerspectiveCamera makeDefault position-z={1} />
    </>
  )
})
