import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import { useFrameCallback } from 'src/hooks/useFrameCallback/useFrameCallback'
import { Environment, PerspectiveCamera } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { damp } from 'maath/easing'
import { useLightbox } from '../hooks/useLightbox'
import { useResizeEvent } from 'src/hooks/useResizeEvent'

export const Logo = forwardRef(function Logo({ ...props }, forwardedRef) {
  const ref = useRef()
  const material = useRef()
  const mesh = useRef()
  const get = useThree(({ get }) => get)

  useEffect(() => {
    get().setEvents({ enabled: false })
  }, [get])

  const { showLightbox } = useLightbox()

  const scale = useCallback(() => {
    if (ref.current) {
      const { viewport, size, camera } = get()
      const { width } = viewport.getCurrentViewport(
        camera,
        ref.current.position.clone().setZ(Math.sqrt(2) / 2),
        size,
      )
      const scale = width / (0.75 * Math.sqrt(2))
      ref.current.scale.set(scale, scale, scale)
    }
  }, [get])

  useResizeEvent(scale)

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

  useImperativeHandle(
    forwardedRef,
    () => ({
      group: ref.current,
      mesh: mesh.current,
      material: material.current,
    }),
    [],
  )
  return (
    <>
      <group
        rotation-y={Math.PI / 4}
        rotation-z={Math.PI / 4}
        ref={ref}
        position-z={0.5}
      >
        <mesh ref={mesh}>
          <boxGeometry />
          <meshStandardMaterial
            ref={material}
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
})
