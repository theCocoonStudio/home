import { OrbitControls, PerspectiveCamera, useScroll } from '@react-three/drei'
import { Panels } from '../components/Panels.canvas'
import { Environment } from '@react-three/drei'
import { useTheme } from 'website/hooks/useTheme'
import { FluidBackground } from '../components/FluidBackground.canvas'
import { useMarkupBounds } from 'src/hooks/useBounds/useMarkupBounds'
import { TitleText } from '../components/TitleText.canvas'
import { useCallback, useEffect, useRef } from 'react'
import { Performance } from '../components/Performance.canvas'
import { DragOrb } from '../components/DragOrb.canvas'

export const Home = () => {
  const { colors } = useTheme()

  const bg = useRef()
  const title = useRef()
  const scroll = useRef()
  const orb = useRef()

  const callbackAt1 = useCallback((...args) => {
    bg.current?.boundsCallback && bg.current.boundsCallback(...args)
    title.current?.boundsCallback && title.current.boundsCallback(...args)
    orb.current?.boundsCallback && orb.current.boundsCallback(...args)
  }, [])

  const data = useScroll()

  useEffect(() => {
    bg.current?.scrollCallback(data.offset)
  })

  useMarkupBounds(
    {
      distance: [1],
      callback: [callbackAt1],
    },
    [],
  )

  return (
    <>
      {/* <OrbitControls /> */}
      {/* <Panels /> */}
      <FluidBackground
        ref={bg}
        stencil={title.current?.stencil}
        forceCallback={orb.current?.forceCallback}
        colors={colors}
      />
      <DragOrb ref={orb} />
      {/* <TitleText
        fontSize={60}
        ref={title}
        mask={true}
        text={`Technically creative`}
      /> */}

      <color attach='background' args={[colors.white]} />
      <Performance />
      <PerspectiveCamera makeDefault position-z={1} fov={30} />
      <Environment preset='park' environmentIntensity={1} />
    </>
  )
}
