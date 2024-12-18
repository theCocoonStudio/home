import { useRef } from 'react'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { useMarkup } from '../../hooks/useMarkup'
import { useShowcase } from 'web/pages/Showcase/hooks/useShowcase'
import { useTheme } from '../../hooks/useTheme'
/* import { Gallery } from './scenes/Gallery.canvas' */
import { Gallery } from './scenes/Gallery2.canvas'
import { CubeScene } from './scenes/CubeScene.canvas'
import { useFrame, useThree } from '@react-three/fiber'

/* simulation mesh */
export const Showcase = function Showcase({
  time,
  bufferTime,
  progressRef,
  setEffectsProps,
  renderPriority,
}) {
  const cubeScene = useRef()
  const gallery = useRef()

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

  return (
    <>
      <Preload all />

      <PerspectiveCamera makeDefault position-z={1} />

      {current === 2 && (
        <>
          <fog attach='fog' args={[colorTheme.black, 0, 15]} />
          <color attach='background' args={[colorTheme.black]} />
        </>
      )}
      {current === 1 && (
        <>
          <color attach='background' args={[colorTheme.black]} />
          <CubeScene
            renderPriority={renderPriority}
            ref={cubeScene}
            active={current === 1}
            bufferTime={bufferTime}
            setEffectsProps={setEffectsProps}
          />
        </>
      )}

      {current === 2 && (
        <Gallery
          renderPriority={renderPriority}
          ref={gallery}
          active={current === 2}
          bufferTime={bufferTime}
          time={time}
        />
      )}
    </>
  )
}
