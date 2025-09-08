import { PerspectiveCamera } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import { useTheme } from 'website/hooks/useTheme'
import { Suspense, useCallback, useEffect, useMemo, useRef } from 'react'
import { Performance } from '../../components/Performance.canvas'
import { useThree } from '@react-three/fiber'
import { useResizeEvent } from 'src/hooks/useResizeEvent'
import { useTargetItems } from './useTargetItems'
import { useLightbox } from '../../hooks/useLightbox'
import { MainScene } from '../../components/MainScene.canvas'

export const Home = ({ config, setReady }) => {
  const {
    effects: { renderPriority, Component: Effects },

    main: { EventDispatcherComponent },
  } = config

  // reactive independent data
  const { colors } = useTheme()
  const { canvas } = useThree(({ gl, get }) => ({
    canvas: gl.domElement,
    get,
  }))

  const { showLightbox } = useLightbox()

  // imperative component refs
  const main = useRef()
  // animation targets
  const animationTargets = useMemo(
    () => ({
      refs: {},
    }),
    [],
  )
  useTargetItems(animationTargets)
  //scroll callbacks

  // responsive callbacks
  const resizeCallback = useCallback(() => {
    // run child resize callbacks
    main.current?.resizeCallback()
  }, [])
  useResizeEvent(canvas, resizeCallback) /
    // reactive dependent data
    useEffect(() => {
      setReady(true)
    }, [])
  return (
    <Suspense>
      {/* <EventDispatcherComponent config={config} /> */}
      <color attach='background' args={[colors.black]} />
      <Performance />
      <PerspectiveCamera
        makeDefault
        position-z={1}
        fov={30}
      ></PerspectiveCamera>
      <Environment preset='city' environmentIntensity={0.9} />
      <ambientLight intensity={0.7} />
      <MainScene ref={main} />
      <Effects renderPriority={renderPriority} />
    </Suspense>
  )
}
