import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { Wall } from 'web/components/Wall.canvas'
import { Display } from 'web/components/Display.canvas'
import { OrbitControls, useHelper, Text } from '@react-three/drei'

import { useTheme } from '../../../hooks/useTheme'
import { useShowcase } from 'web/pages/Showcase/hooks/useShowcase'
import { SuspendedEnvironment } from 'web/components/SuspendedEnvironment.canvas'
import { useFrame, useThree } from '@react-three/fiber'
import { usePageControls } from 'web/hooks/usePageControls'
import { folder, useControls } from 'leva'

export const Gallery = forwardRef(function Gallery(
  { bufferTime, time, renderPriority, camera, setEffects },
  forwardedRef,
) {
  const group = useRef()
  const photo = useRef()
  const light = useRef()
  const text = useRef()
  const wallRef = useRef()

  const {
    state: { current, pause, menu },
  } = useShowcase()

  const colorTheme = useTheme()

  const smoothTime = useRef(bufferTime)

  useImperativeHandle(
    forwardedRef,
    () => ({
      inactive: (delta) => {},
      active: (delta) => {},
    }),
    [],
  )

  const { scene: mainScene } = useThree(({ scene }) => ({
    scene,
  }))
  const { store3 } = usePageControls()

  const [{ preset }, set] = useControls(
    () => ({
      Environment: folder(
        {
          preset: {
            value: 'sunset',
            label: 'lights',
            options: [
              'apartment',
              'city',
              'dawn',
              'forest',
              'lobby',
              'night',
              'park',
              'studio',
              'warehouse',
            ],
          },
        },
        { collapsed: true },
      ),
    }),
    { store: store3 },
  )

  useEffect(() => {
    if (current === 2) {
      set({ preset: 'sunset' })
    }
  }, [current, set])

  const scene = useThree(({ scene }) => scene)
  useEffect(() => {
    light.current.shadow.camera.near = 0.1
    light.current.shadow.camera.far = 5
    light.current.shadow.camera.right = 1
    light.current.shadow.camera.left = -1
    light.current.shadow.camera.top = 1
    light.current.shadow.camera.bottom = -1
    /* scene.add(new CameraHelper(light.current.shadow.camera)) */
  }, [])

  useFrame((state, delta) => {
    /* light.current.position.x += delta / 2 */
  })

  return (
    <>
      <directionalLight
        position={[-1.5, 1, 0.5]}
        castShadow
        ref={light}
        args={[colorTheme.white, 8]}
      />

      <SuspendedEnvironment
        preset={preset}
        background={false}
        environmentIntensity={1}
        environmentRotation={[-Math.PI / 8, -Math.PI, 0]}
        scene={mainScene}
      />
      <group ref={group} position={[0, 0, -0.3]}>
        <Wall />
        <Display setEffects={setEffects} type={'canvas'} />
      </group>
      <OrbitControls />
    </>
  )
})
