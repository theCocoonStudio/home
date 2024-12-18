import {
  forwardRef,
  Suspense,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { useMarkup } from '../../hooks/useMarkup'
import { useShowcase } from 'web/pages/Showcase/hooks/useShowcase'
import { useTheme } from '../../hooks/useTheme'
/* import { Gallery } from './scenes/Gallery.canvas' */
import { Gallery } from './scenes/Gallery2.canvas'
import { CubeScene } from './scenes/CubeScene.canvas'
import { useFrame, useThree } from '@react-three/fiber'
import { SuspendedEnvironment } from 'web/components/SuspendedEnvironment.canvas'
import { usePageControls } from 'web/hooks/usePageControls'
import { folder, useControls } from 'leva'

/* simulation mesh */
export const Showcase = forwardRef(function Showcase(
  { time, bufferTime, progressRef, setEffectsProps, renderPriority },
  forwardedRef,
) {
  const cubeScene = useRef()
  const gallery = useRef()
  useImperativeHandle(forwardedRef, () => [
    cubeScene.current?.sun,
    gallery.current?.sun,
  ])

  const {
    refs: {
      showcase: { description },
    },
  } = useMarkup()

  const {
    state: { current },
  } = useShowcase()

  const colorTheme = useTheme()

  useFrame((state, delta) => {
    // cube scene
    let opacity = '0'
    if (progressRef.current[0] < 1 - bufferTime / time && current === 1) {
      opacity = '1'
      cubeScene.current?.active(delta)
    } else {
      cubeScene.current?.inactive(delta)
    }
    // gallery scene
    if (progressRef.current[1] < 1 - bufferTime / time && current === 2) {
      gallery.current?.active(delta)
      opacity = '1'
    } else {
      gallery.current?.inactive(delta)
    }

    // opacity
    if (window && description.current) {
      const op = window
        .getComputedStyle(description.current)
        .getPropertyValue('opacity')
      if (op !== opacity && (op === '1' || op === '0')) {
        description.current.style.opacity = opacity
      }
    }
  }, renderPriority)

  const { scene: mainScene } = useThree(({ scene }) => ({
    scene,
  }))
  const { store3 } = usePageControls()
  const [{ godRaysExposure, godRaysWeight, forceSource, preset }, set] =
    useControls(
      () => ({
        GodRays: folder(
          {
            godRaysExposure: {
              value: 0.5,
              label: 'exposure',
            },
            godRaysWeight: {
              value: 0.8,
              label: 'weight',
            },
          },
          { collapsed: true },
        ),
        Simulation: folder(
          {
            forceSource: {
              value: 'cube',
              label: 'force',
              options: ['mouse'],
            },
          },
          { collapsed: true },
        ),
        Environment: folder(
          {
            preset: {
              value: 'studio',
              label: 'lights',
              options: [
                'apartment',
                'city',
                'dawn',
                'forest',
                'lobby',
                'night',
                'park',
                'sunset',
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
    set({
      godRaysExposure: 0.5,
      godRaysWeight: 0.8,
    })
  }, [current, set])
  useEffect(() => {
    if ([cubeScene, gallery][current - 1].current.sun) {
      setEffectsProps({
        sun: [cubeScene, gallery][current - 1].current.sun,
        godRaysExposure,
        godRaysWeight,
      })
    }
  }, [current, godRaysExposure, godRaysWeight, setEffectsProps])
  const camera = useThree(({ camera }) => camera)
  return (
    <>
      <Preload all />

      <PerspectiveCamera makeDefault position-z={1} />
      <SuspendedEnvironment
        preset={preset}
        background={false}
        environmentIntensity={[1, 0.5, 1, 1, 1][current - 1]}
        environmentRotation={[0, -Math.PI, 0]}
        scene={mainScene}
      />
      {current === 2 && (
        <>
          <fog attach='fog' args={[colorTheme.black, 0, 15]} />
          <color attach='background' args={[colorTheme.black]} />
        </>
      )}
      {current === 1 && (
        <Suspense
          fallback={
            <div>
              <h1>hi</h1>
            </div>
          }
        >
          <color attach='background' args={[colorTheme.black]} />
          <CubeScene
            renderPriority={renderPriority}
            ref={cubeScene}
            active={current === 1}
            bufferTime={bufferTime}
            forceSource={forceSource}
          />
        </Suspense>
      )}

      {current === 2 && (
        <Gallery
          renderPriority={renderPriority}
          ref={gallery}
          active={current === 2}
          bufferTime={bufferTime}
          time={time}
          camera={camera}
          defaultCamPos={[0, 0, 1]}
        />
      )}
    </>
  )
})
