import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { Wall } from 'web/components/Wall.canvas'
import { Display } from 'web/components/Display.canvas'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useTheme } from '../../../hooks/useTheme'
import { useShowcase } from 'web/pages/Showcase/hooks/useShowcase'
import { SuspendedEnvironment } from 'web/components/SuspendedEnvironment.canvas'
import { useFrame, useThree } from '@react-three/fiber'
import { usePageControls } from 'web/hooks/usePageControls'
import { folder, useControls } from 'leva'
import { damp, damp3 } from 'maath/easing'

export const Gallery = forwardRef(function Gallery(
  { bufferTime, time, renderPriority, setEffects },
  forwardedRef,
) {
  const group = useRef()
  const light = useRef()

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
  const { store3, store2, store1 } = usePageControls()

  const [{ preset, facade }, set] = useControls(
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
      Facade: folder(
        {
          facade: {
            value: 'carbon',
            label: 'material',
            options: ['brick', 'plaster'],
          },
        },
        { collapsed: true },
      ),
    }),
    { store: store3 },
  )
  const [{ intensity }, set2] = useControls(
    () => ({
      'Directional Light': folder(
        {
          intensity: {
            value: 8,
            label: 'intensity',
          },
        },
        { collapsed: true },
      ),
    }),
    { store: store2 },
  )
  const [{ type, sample, material }, set3] = useControls(
    () => ({
      Media: folder(
        {
          type: {
            value: 'photo',
            label: 'type',
            options: ['video', 'graphic'],
          },
          sample: {
            value: 'dragonfly',
            label: 'sample',
            options: ['clouds', 'spider', 'kites'],
          },
        },
        { collapsed: true },
      ),
      Print: folder(
        {
          material: {
            value: 'canvas',
            label: 'material',
            options: ['metal', 'backlit'],
          },
        },
        { collapsed: true },
      ),
    }),
    { store: store1 },
  )

  useEffect(() => {
    if (current === 2) {
      set({ preset: 'sunset', facade: 'carbon' })
      set2({ intensity: 8 })
      set3({ material: 'canvas', type: 'photo' })
    }
  }, [current, set, set2, set3])

  useEffect(() => {
    light.current.shadow.camera.near = 0.1
    light.current.shadow.camera.far = 5
    light.current.shadow.camera.right = 1
    light.current.shadow.camera.left = -1
    light.current.shadow.camera.top = 1
    light.current.shadow.camera.bottom = -1
    /* scene.add(new CameraHelper(light.current.shadow.camera)) */
  }, [])
  const cam = useRef()
  const elapsed = useRef(0)
  useFrame(({ clock }, delta) => {
    /*    if (!pause) {
      elapsed.current += delta
      damp(
        cam.current.position,
        'x',
        1.5 * Math.sin(elapsed.current / 2),
        delta,
      )
    } */
  })

  return (
    <>
      <directionalLight
        position={[-1.5, 1, 0.5]}
        castShadow
        ref={light}
        args={[colorTheme.white, intensity]}
      />

      <SuspendedEnvironment
        preset={preset}
        background={false}
        environmentIntensity={1}
        /* environmentRotation={[-Math.PI / 8, -Math.PI, 0]} */
        scene={mainScene}
      />
      <group ref={group} position={[0, 0, 0]}>
        <Wall facade={facade} />
        <Display setEffects={setEffects} type={material} image={sample} />
      </group>
      <fog attach='fog' args={[colorTheme.black, 0, 4]} />
      <color attach='background' args={[colorTheme.black]} />
      <OrbitControls />
      <PerspectiveCamera ref={cam} fov={55} makeDefault position-z={1} />
    </>
  )
})
