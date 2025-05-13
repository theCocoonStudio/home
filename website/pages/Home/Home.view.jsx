import { PerspectiveCamera, useScroll } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import { useTheme } from 'website/hooks/useTheme'
import { FluidBackground } from '../../components/FluidBackground.canvas'
import { useCallback, useContext, useRef } from 'react'
import { Performance } from '../../components/Performance.canvas'
import { DirectionalLight } from '../../components/DirectionalLight.canvas'
import { PrescrollAnimation } from '../../components/PrescrollAnimation.canvas'
import { useFrame, useThree } from '@react-three/fiber'
import { useResizeEvent } from 'src/hooks/useResizeEvent'
import { ScrollEventContext } from './ScrollEventContext'
import { Software } from '../../components/Software.canvas'

export const Home = ({
  config: {
    footer: {
      markupIds: { scrollContainer, fpsContainer },
    },
    effects: { renderPriority, Component: Effects },
    scroll: { ranges },
    main: {
      EventDispatcherComponent,
      markupIds: { title, subtitle },
    },
  },
}) => {
  // reactive data
  const { colors } = useTheme()
  const canvas = useThree(({ gl }) => gl.domElement)
  const scrollData = useScroll()
  // refs
  const preScrollAnimation = useRef()
  const software = useRef()
  const bg = useRef()
  // responsive callbacks
  const resizeCallback = useCallback(() => {
    bg?.current?.resizeCallback()
    preScrollAnimation?.current?.resizeCallback()
    software?.current?.resizeCallback()
  }, [])
  useResizeEvent(canvas, resizeCallback)
  //scroll callbacks
  const offsetCache = useRef(0.0)
  const tailFrames = useRef(0)
  useFrame((state, delta) => {
    if (
      Math.abs(scrollData.offset - offsetCache.current) > scrollData.eps ||
      tailFrames.current++ < 10
    ) {
      if (Math.abs(scrollData.offset - offsetCache.current) > scrollData.eps) {
        tailFrames.current = 0
      }
      offsetCache.current = scrollData.offset
      preScrollAnimation.current?.scrollCallback &&
        preScrollAnimation.current.scrollCallback(state, delta, scrollData)
      software.current?.scrollCallback &&
        software.current.scrollCallback(state, delta, scrollData)
    }
  })

  const { setRange } = useContext(ScrollEventContext)

  return (
    <>
      <EventDispatcherComponent ranges={ranges} setRange={setRange} />
      <PrescrollAnimation
        ref={preScrollAnimation}
        range={ranges.preScroll}
        bgRef={bg}
      />
      <Software
        ref={software}
        range={ranges.about}
        titleId={title}
        subtitleId={subtitle}
        scrollData={scrollData}
      />
      <FluidBackground ref={bg} colors={colors} />
      <DirectionalLight
        position={[0.25, 1.5, 1.5]}
        color={colors.white}
        intensity={10.3}
      />
      <color attach='background' args={[colors.black]} />
      <Performance fpsContainer={fpsContainer} />
      <PerspectiveCamera makeDefault position-z={1} fov={30} />
      <Environment preset='city' environmentIntensity={1} />
      <Effects renderPriority={renderPriority} />
    </>
  )
}
