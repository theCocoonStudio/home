import { PerspectiveCamera, Stars } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import { Suspense, useEffect, useMemo, useRef } from 'react'
import { Performance } from '../../components/Performance.canvas'
import { useTargetItems } from './useTargetItems'
import { useLightbox } from '../../hooks/useLightbox'
import { Background } from '../../components/Background.canvas'
import { Floor } from '../../components/Floor.canvas'
import { Models } from '../../components/Models.canvas'

export const Home = ({ config, setReady, ready }) => {
  const {
    effects: { renderPriority, Component: Effects },

    main: { EventDispatcherComponent },
  } = config

  const { showLightbox } = useLightbox()

  // imperative component refs
  const background = useRef()
  const floor = useRef()
  const models = useRef()
  // animation targets
  const animationTargets = useMemo(
    () => ({
      refs: { background, floor, models },
    }),
    [],
  )
  useTargetItems(animationTargets)

  // reactive dependent data
  useEffect(() => {
    setReady(true)
  }, [])

  return (
    <Suspense>
      {/* <EventDispatcherComponent config={config} /> */}
      <color attach='background' args={['#111']} />
      <fog attach='fog' args={['#111', 82, 115]} />
      <Performance />
      <PerspectiveCamera
        makeDefault
        position-z={1}
        fov={10}
      ></PerspectiveCamera>
      <Environment preset='city' environmentIntensity={0.7} />
      <ambientLight intensity={0.7} />
      <Background
        positionZ0={-80}
        heightProportion0={0.6}
        heightProportion1={0.6}
        ref={background}
      />
      <Floor positionZ0={-80} heightProportion0={0.6} ref={floor} />
      <Models ref={models} positionZ0={-80} heightProportion0={0.6} />
      <Stars radius={50} depth={50} count={10000} factor={7} fade speed={1} />
      <Effects
        renderPriority={renderPriority}
        animationTargets={animationTargets}
        enabled
        ready={ready}
      />
    </Suspense>
  )
}
