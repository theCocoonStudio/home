import { useEffect, useRef } from 'react'

import { Environment, PerspectiveCamera } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export const Logo = function Logo({ size }) {
  const ref = useRef()

  const {
    camera,
    viewport,
    size: cSize,
  } = useThree(({ viewport, camera, size }) => ({
    camera,
    viewport,
    size,
  }))

  useEffect(() => {
    const { factor } = viewport.getCurrentViewport(
      camera,
      ref.current.position.clone(),
      cSize,
    )
    ref.current.scale.set(size / factor, size / factor, size / factor)
  }, [cSize, camera, size, viewport])

  const { get } = useThree(({ get }) => ({
    get,
  }))

  useEffect(() => {
    get().setEvents({ enabled: false })
  }, [get])

  return (
    <>
      <group
        /* rotation-x={0.35} // straight up view (x,y = 0) */
        rotation-y={Math.PI / 4}
        rotation-z={Math.PI / 4}
        ref={ref}
        position-z={0.5}
      >
        {/* <primitive object={iLogo} ref={iMesh} /> */}
        <mesh>
          <boxGeometry />
          {/* <CarbonMaterial repeat={[0.6, 0.6]} /> */}
          <meshStandardMaterial color={'#111'} roughness={0.1} />
        </mesh>
      </group>

      <Environment preset='city' environmentIntensity={3} />
      <PerspectiveCamera makeDefault position-z={1} fov={10} />
    </>
  )
}
