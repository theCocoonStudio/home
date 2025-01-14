import { useCallback, useEffect, useRef } from 'react'
import { Preload } from '@react-three/drei'
import { useMarkup } from '../../hooks/useMarkup'
import { useShowcase } from 'web/pages/Showcase/hooks/useShowcase'
import { useTheme } from '../../hooks/useTheme'
/* import { Gallery } from './scenes/Gallery.canvas' */
import { Gallery } from './scenes/Gallery2.canvas'
import { CubeScene } from './scenes/CubeScene.canvas'
import { Repository } from './scenes/Repository.canvas'
import { useFrame } from '@react-three/fiber'
import { useProgress } from 'src/hooks'
import { useGlobalState } from 'web/hooks/useGlobalState'

/* simulation mesh */
export const Showcase = function Showcase({ setEffects, renderPriority }) {
  const cubeScene = useRef()
  const gallery = useRef()

  const {
    state: { renderOrder },
  } = useGlobalState()
  const {
    refs: {
      showcase: { description },
    },
  } = useMarkup()

  const {
    state: { current, time, bufferTime, count, pause },
    setState: {
      current: setCurrent,
      progressColor: setProgressColor,
      progressRef: setProgressRef,
      elapsedFunc: setElapsedFunc,
    },
  } = useShowcase()

  const colorTheme = useTheme()

  // imperative -> declarative progress transitions
  const progressCallback = useCallback(
    (progress, curr) => {
      const newColor = [
        colorTheme.slate,
        colorTheme.black,
        colorTheme.charcoal,
      ][curr - 1]
      document.documentElement.style.setProperty('--progress', newColor)
      setCurrent(curr)
      setProgressColor(newColor)
    },
    [
      colorTheme.black,
      colorTheme.charcoal,
      colorTheme.slate,
      setCurrent,
      setProgressColor,
    ],
  )
  // progress state
  const { progressRef, setElapsed } = useProgress(
    count,
    time,
    pause,
    progressCallback,
    'showcaseProgress',
    undefined,
    renderOrder.global,
  )

  useEffect(() => {
    setProgressRef(progressRef)
    setElapsedFunc(setElapsed)
  }, [progressRef, setElapsed, setElapsedFunc, setProgressRef])

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
      {
        [
          <CubeScene
            key='cubeScene'
            renderPriority={renderPriority}
            ref={cubeScene}
            active={current === 1}
            bufferTime={bufferTime}
            setEffects={setEffects}
          />,
          <Gallery
            key='gallery'
            renderPriority={renderPriority}
            ref={gallery}
            active={current === 2}
            bufferTime={bufferTime}
            time={time}
            setEffects={setEffects}
          />,
          <Repository
            key='repository'
            renderPriority={renderPriority}
            active={current === 3}
            bufferTime={bufferTime}
            time={time}
            setEffects={setEffects}
          />,
        ][current - 1]
      }
    </>
  )
}
