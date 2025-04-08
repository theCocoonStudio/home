import { OrbitControls, PerspectiveCamera, useScroll } from '@react-three/drei'
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
import { ScrollItem } from '../components/ScrollItem.canvas'
import { Vector2 } from 'three'
import { getMarkupBounds } from '../utils/bounds'

export const Home = () => {
  const {
    colors,
    markupIds: {
      scroll: { container },
    },
  } = useTheme()

  const bg = useRef()
  const title = useRef()
  const orb = useRef()
  const item = useRef()

  const scrollBounds = useRef({ min: new Vector2(), max: new Vector2() })

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
  const callbackAtHalf = useCallback(
    ({ ...args }) => {
      const _args = { ...args, scroll: data }
      getMarkupBounds(_args, {
        id: container,
        marginPx: [1, 0, 1, 0],
        ...scrollBounds.current,
      })
      item.current?.boundsCallback && item.current.boundsCallback(_args)
    },
    [container, data],
  )

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
    item.current?.scrollCallback &&
      item.current.scrollCallback(state, delta, data)
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
      <ScrollItem zPos={0.5} ref={item} scrollBoundsRef={scrollBounds} />
      <DragOrb ref={orb} />
      <SetScroll event='showScroll' rangeMin={0.01} />
      <Title ref={title} />
      <color attach='background' args={[colors.white]} />
      <Performance />
      <PerspectiveCamera makeDefault position-z={1} fov={30} />
      <Environment preset='park' environmentIntensity={0.5} />
    </>
  )
}
