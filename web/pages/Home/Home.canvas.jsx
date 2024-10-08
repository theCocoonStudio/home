import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { DoubleSide, Vector3 } from 'three'
import {
  Environment,
  OrbitControls,
  PerformanceMonitor,
  PerspectiveCamera,
} from '@react-three/drei'
import { useFluidTexture } from 'src/hooks/useFluidTexture'
import { useThree } from '@react-three/fiber'
import { VideoTexture } from 'web/components/VideoTexture.canvas'
import Bulb from 'web/components/Bulb.canvas'
import Video from 'public/10.mp4'
import { Effects } from 'web/components/Effects.canvas.jsx'
import { use2DBounds } from 'src/hooks/useBounds/useBounds'

const options = {
  iterations_poisson: 32,
  iterations_viscous: 32,
  mouse_force: 10,
  resolution: 0.5,
  cursor_size: 50,
  viscous: 40,
  isBounce: true,
  dt: 0.014,
  isViscous: true,
  BFECC: true,
}

/* simulation mesh */
export const Home = forwardRef(function FluidSim({ tracking }, forwardedRef) {
  // mesh ref
  const meshRef = useRef()
  useImperativeHandle(forwardedRef, () => meshRef.current)

  const { width, height } = useThree(({ size }) => size)

  const texture = useFluidTexture(options, undefined, [
    width * 0.8,
    width * 0.45,
  ])

  use2DBounds(meshRef, {
    trackingElement: true,
    trackingElementRef: tracking,
  })

  useEffect(() => {
    meshRef.current.lookAt(new Vector3(0, 0, 1))
  })
  return (
    <>
      <PerformanceMonitor>
        {/* <OrbitControls /> */}

        {/* <Bulb scale={0.03} position-z={0.5} /> */}
        <PerspectiveCamera makeDefault position-z={1} />
        <Effects />
        <mesh scale={[0.8, 0.45, 1]} ref={meshRef}>
          <planeGeometry />
          <meshBasicMaterial
            side={DoubleSide}
            transparent
            /* alphaMap={texture} */
            /* color='red' */
          >
            <VideoTexture video={Video} />
          </meshBasicMaterial>
        </mesh>
        <color attach='background' args={['#050505']} />

        <Environment preset='city' />
      </PerformanceMonitor>
    </>
  )
})
