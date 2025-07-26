import { useCallback, useEffect, useRef } from 'react'
import { useFrameCallback } from 'src/hooks/useFrameCallback/useFrameCallback'
import { Environment, PerspectiveCamera } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { damp } from 'maath/easing'
import { useLightbox } from '../hooks/useLightbox'
import { useScrollEvent } from '../pages/Home/useScrollEvent'
import { useTheme } from '../hooks/useTheme'

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

  const { showLightbox } = useLightbox()

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

  const material = useRef()
  const frameCallback = useCallback(
    (state, delta) => {
      if (material.current) {
        if (showLightbox) {
          return damp(material.current, 'opacity', 0.0, 100.0, delta)
        } else {
          return damp(material.current, 'opacity', 1.0, 100.0, delta)
        }
      }
      return false
    },
    [showLightbox],
  )

  const frame = useFrameCallback()

  useEffect(() => {
    frame(frameCallback)
  }, [frame, frameCallback, showLightbox])

  const section = useScrollEvent()

  const {
    colors: { slate, charcoal, purple, white },
  } = useTheme()
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
          <meshStandardMaterial
            ref={material}
            color={
              {
                preScroll: '#111',
                software: slate,
                photography: charcoal,
                blog: purple,
                postScroll: white,
              }[section]
            }
            roughness={0.1}
            transparent
            opacity={1}
          />
        </mesh>
      </group>

      <Environment preset='city' environmentIntensity={3} />
      <PerspectiveCamera makeDefault position-z={1} fov={10} />
    </>
  )
}
