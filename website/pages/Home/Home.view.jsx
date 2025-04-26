import { PerspectiveCamera, useScroll } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import { useTheme } from 'website/hooks/useTheme'
import { FluidBackground } from '../../components/FluidBackground.canvas'
import { useMarkupBounds } from 'src/hooks/useBounds/useMarkupBounds'
import { useCallback, useEffect, useRef } from 'react'
import { Performance } from '../../components/Performance.canvas'
import { DragOrb } from '../../components/DragOrb.canvas'
import { useFrame } from '@react-three/fiber'
import { Title } from '../../components/Title.canvas'
import { ScrollItem } from '../../components/ScrollItem.canvas'
import { Vector2 } from 'three'
import { getMarkupBounds } from '../../utils/bounds'

export const Home = ({
  config: {
    footer: {
      markupIds: { scrollContainer, fpsContainer },
    },
    effects: { renderPriority, Component: Effects },
  },
}) => {
  const { colors } = useTheme()

  const bg = useRef()
  const title = useRef()
  const orb = useRef()
  const item = useRef()

  const scrollBounds = useRef({ min: new Vector2(), max: new Vector2() })

  const data = useScroll()
  const callbackAt1 = useCallback(
    ({ ...args }) => {
      const _args = { ...args, scroll: data }
      title.current?.boundsCallback && title.current.boundsCallback(_args)
      orb.current?.boundsCallback && orb.current.boundsCallback(_args)
    },
    [data],
  )
  const callbackAtHalf = useCallback(
    ({ ...args }) => {
      const _args = { ...args, scroll: data }
      getMarkupBounds(_args, {
        id: scrollContainer,
        marginPx: [1, 0, 1, 0],
        ...scrollBounds.current,
      })
      item.current?.boundsCallback && item.current.boundsCallback(_args)
    },
    [scrollContainer, data],
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

  const light = useRef()

  useEffect(() => {
    light.current.shadow.camera.near = 0
    light.current.shadow.camera.far = 500
    light.current.shadow.camera.right = 1
    light.current.shadow.camera.left = -1
    light.current.shadow.camera.top = 1
    light.current.shadow.camera.bottom = -1
    light.current.shadow.mapSize.width = 1024 // default
    light.current.shadow.mapSize.height = 1024
  }, [])

  return (
    <>
      <directionalLight
        position={[0.2, 0.5, 1.5]}
        castShadow
        ref={light}
        args={['white', 10.3]}
      />
      <FluidBackground
        ref={bg}
        forceCallback={orb.current?.forceCallback}
        colors={colors}
      />
      {/* <ScrollItem zPos={0.5} ref={item} scrollBoundsRef={scrollBounds} /> */}
      {/* <DragOrb ref={orb} /> */}
      {/* <Title ref={title} /> */}
      <color attach='background' args={[colors.black]} />
      <Performance fpsContainer={fpsContainer} />
      <PerspectiveCamera makeDefault position-z={1} fov={30} />
      <Environment preset='city' environmentIntensity={1} />
      <Effects renderPriority={renderPriority} />
    </>
  )
}
