import { PerspectiveCamera, useScroll } from '@react-three/drei'
import { Panels } from '../components/Panels.canvas'
import { Environment } from '@react-three/drei'
import { useTheme } from 'website/hooks/useTheme'
import { FluidBackground } from '../components/FluidBackground.canvas'
import { useMarkupBounds } from 'src/hooks/useBounds/useMarkupBounds'
import { TitleText } from '../components/TitleText.canvas'
import { useCallback, useRef } from 'react'
import { Performance } from '../components/Performance.canvas'
import { DragOrb } from '../components/DragOrb.canvas'
import { useFrame } from '@react-three/fiber'
import { SetScroll } from '../components/SetScroll.canvas'

export const Home = () => {
  const { colors } = useTheme()

  const bg = useRef()
  const title = useRef()
  const orb = useRef()

  const callbackAt1 = useCallback((...args) => {
    bg.current?.boundsCallback && bg.current.boundsCallback(...args)
    title.current?.boundsCallback && title.current.boundsCallback(...args)
    orb.current?.boundsCallback && orb.current.boundsCallback(...args)
  }, [])

  const callbackAtHalf = useCallback((...args) => {
    title.current?.boundsCallback && title.current.boundsCallback(...args)
  }, [])

  const data = useScroll()

  useMarkupBounds(
    {
      distance: [1, 0.5],
      callback: [callbackAt1, callbackAtHalf],
    },
    [],
  )

  useFrame((state, delta) => {
    orb.current?.scrollCallback &&
      orb.current.scrollCallback(state, delta, data)
    title.current?.scrollCallback &&
      title.current.scrollCallback(state, delta, data)
  })

  return (
    <>
      {/* <OrbitControls /> */}
      {/* <Panels /> */}
      <FluidBackground
        ref={bg}
        /* stencil={title.current?.stencil} */
        forceCallback={orb.current?.forceCallback}
        colors={colors}
      />
      <DragOrb ref={orb} />
      <SetScroll event='showScroll' rangeMin={0.2} />
      <TitleText fontSize={60} ref={title} mask={false} text={`about`} />

      <color attach='background' args={[colors.white]} />
      <Performance />
      <PerspectiveCamera makeDefault position-z={1} fov={30} />
      <Environment preset='park' environmentIntensity={1} />
    </>
  )
}
