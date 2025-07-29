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

export const Logo = forwardRef(function Logo(
  { initialLogoColor },
  forwardedRef,
) {
  const ref = useRef()
  const material = useRef()
  const mesh = useRef()
  const {
    camera,
    viewport,
    size: cSize,
    get,
    canvas,
  } = useThree(({ viewport, camera, size, gl, get }) => ({
    camera,
    viewport,
    size,
    get,
    canvas: gl.domElement,
  }))

  useEffect(() => {
    get().setEvents({ enabled: false })
  }, [get])

  const { showLightbox } = useLightbox()

  const scale = useCallback(() => {
    if (ref.current) {
      const size =
        canvas.clientWidth > 768 ? 30 : canvas.clientWidth > 450 ? 25 : 20

      const { factor } = viewport.getCurrentViewport(
        camera,
        ref.current.position.clone(),
        cSize,
      )
      ref.current.scale.set(size / factor, size / factor, size / factor)
    }
  }, [cSize, camera, canvas.clientWidth, viewport])

  useResizeEvent(canvas, scale)

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
        /* rotation-x={0.35} // straight up view (x,y = 0) */
        rotation-y={Math.PI / 4}
        rotation-z={Math.PI / 4}
        ref={ref}
        position-z={0.5}
      >
        {/* <primitive object={iLogo} ref={iMesh} /> */}
        <mesh ref={mesh}>
          <boxGeometry />
          {/* <CarbonMaterial repeat={[0.6, 0.6]} /> */}
          <meshStandardMaterial
            ref={material}
            color={initialLogoColor}
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
