import { PerspectiveCamera, useScroll } from '@react-three/drei'
import { Panels } from '../components/Panels.canvas'
import { Environment } from '@react-three/drei'
import { useTheme } from 'website/hooks/useTheme'
import { FluidBackground } from '../components/FluidBackground.canvas'
import { useMarkupBounds } from 'src/hooks/useBounds/useMarkupBounds'
import { useCallback, useRef } from 'react'
import { Performance } from '../components/Performance.canvas'
import { DragOrb } from '../components/DragOrb.canvas'
import { useFrame } from '@react-three/fiber'
import { SetScroll } from '../components/SetScroll.canvas'
import { Title } from '../components/Title.canvas'

export const Home = () => {
  const { colors } = useTheme()

  const bg = useRef()
  const title = useRef()
  const orb = useRef()

  const data = useScroll()
  const callbackAt1 = useCallback(
    ({ ...args }) => {
      const _args = { ...args, scroll: data }
      bg.current?.boundsCallback && bg.current.boundsCallback(_args)
      title.current?.boundsCallback && title.current.boundsCallback(_args)
      orb.current?.boundsCallback && orb.current.boundsCallback(_args)
    },
    [data],
  )

  useMarkupBounds(
    {
      distance: [1],
      callback: [callbackAt1],
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
        forceCallback={orb.current?.forceCallback}
        colors={colors}
      />
      <DragOrb ref={orb} />
      <SetScroll event='showScroll' rangeMin={0.01} />
      <Title ref={title} />
      <color attach='background' args={[colors.white]} />
      <Performance />
      <PerspectiveCamera makeDefault position-z={1} fov={30} />
      <Environment preset='park' environmentIntensity={1} />
    </>
  )
}
