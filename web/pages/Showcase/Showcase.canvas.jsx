import { forwardRef, useImperativeHandle, useRef } from 'react'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { useMarkup } from '../../hooks/useMarkup'
import { useGlobalState } from '../../hooks/useGlobalState'
import { useTheme } from '../../hooks/useTheme'
import { Gallery } from './scenes/Gallery.canvas'
import { CubeScene } from './scenes/CubeScene.canvas'
import { useFrame, useThree } from '@react-three/fiber'
import { SuspendedEnvironment } from 'web/components/SuspendedEnvironment.canvas'

/* simulation mesh */
export const Showcase = forwardRef(function Showcase(
  {
    time,
    bufferTime,
    progressRef,
    setSun,
    renderPriority,
    cubeSceneProps,
    galleryProps,
    preset,
  },
  forwardedRef,
) {
  const cubeScene = useRef()
  const gallery = useRef()
  useImperativeHandle(forwardedRef, () => [
    cubeScene.current.sun,
    gallery.current.sun,
  ])

  const {
    refs: {
      showcase: { description },
    },
  } = useMarkup()

  const {
    state: { current },
  } = useGlobalState()

  const colorTheme = useTheme()

  useFrame((state, delta) => {
    // cube scene
    let opacity = '0'
    if (progressRef.current[0] < 1 - bufferTime / time && current === 1) {
      opacity = '1'
      cubeScene.current.active(delta)
    } else {
      cubeScene.current.inactive(delta)
    }
    // gallery scene
    if (progressRef.current[1] < 1 - bufferTime / time && current === 2) {
      gallery.current.active(delta)
      opacity = '1'
    } else {
      gallery.current.inactive(delta)
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

  return (
    <>
      <Preload all />
      <color attach='background' args={[colorTheme.black]} />
      <PerspectiveCamera makeDefault position-z={1} />
      <SuspendedEnvironment
        preset={preset}
        background={false}
        environmentIntensity={[1, 0.5, 1, 1, 1][current - 1]}
        scene={mainScene}
      />
      {current === 2 && <fog attach='fog' args={['#050505', 0, 12]} />}
      <CubeScene
        renderPriority={renderPriority}
        ref={cubeScene}
        active={current === 1}
        bufferTime={bufferTime}
        {...cubeSceneProps}
      />

      <Gallery
        renderPriority={renderPriority}
        ref={gallery}
        active={current === 2}
        bufferTime={bufferTime}
        setSun={setSun}
        time={time}
        {...galleryProps}
      />
    </>
  )
})
