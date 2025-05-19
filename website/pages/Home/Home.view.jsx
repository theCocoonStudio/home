import { OrbitControls, PerspectiveCamera, useScroll } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import { useTheme } from 'website/hooks/useTheme'
import { FluidBackground } from '../../components/FluidBackground.canvas'
import { useCallback, useContext, useRef, useState } from 'react'
import { Performance } from '../../components/Performance.canvas'
import { DirectionalLight } from '../../components/DirectionalLight.canvas'
import { PrescrollAnimation } from '../../components/PrescrollAnimation.canvas'
import { useFrame, useThree } from '@react-three/fiber'
import { useResizeEvent } from 'src/hooks/useResizeEvent'
import { ScrollEventContext } from './ScrollEventContext'
import { Software } from '../../components/Software.canvas'
import { Vector3 } from 'three'
import { getItemData } from '../../utils/bounds'
import { useItemGeometry } from '../../hooks/useItemGeometry.canvas'

export const Home = ({
  config: {
    footer: {
      markupIds: { scrollContainer, fpsContainer },
    },
    effects: { renderPriority, Component: Effects },
    scroll: { ranges },
    main: {
      EventDispatcherComponent,
      markupIds: { title, subtitle, description },
    },
    items: { count, software, photography, music, blog },
  },
  zPos = 0.1,
  itemSizePx = 400,
  initialDepth = 0.05,
  targetDepth = 0.0005,
}) => {
  // reactive data
  const {
    colors,
    lengths: { navHeight, scrollContainerBorderSize, atomicPadding },
  } = useTheme()
  const { canvas, get } = useThree(({ gl, get }) => ({
    canvas: gl.domElement,
    get,
  }))
  const scrollData = useScroll()
  const [itemData, setItemData] = useState()
  // component refs
  const preScrollAnimation = useRef()
  const softwareRef = useRef()
  const bg = useRef()
  // responsive callbacks
  const resizeCallback = useCallback(() => {
    // compute item data
    setItemData(
      getItemData({
        id: scrollContainer,
        scrollContainerBorderSize,
        state: get(),
        target: new Vector3(0, 0, zPos),
        zPos,
        itemSizePx,
        geometryDepth: initialDepth,
        initialDepth,
        targetDepth,
        count,
        focusTransformPx: new Vector3(-8 * atomicPadding, 0, 0),
        focusTransformScale: new Vector3(-0.5, 0, 0),
        initialTransformPx: new Vector3(itemSizePx, 0, 0),
      }),
    )

    // run child resize callbacks
    bg?.current?.resizeCallback()
    preScrollAnimation?.current?.resizeCallback()
    softwareRef?.current?.resizeCallback()
  }, [
    atomicPadding,
    count,
    get,
    initialDepth,
    itemSizePx,
    scrollContainer,
    scrollContainerBorderSize,
    targetDepth,
    zPos,
  ])
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
      softwareRef.current?.scrollCallback &&
        softwareRef.current.scrollCallback(state, delta, scrollData)
    }
  })

  const { setRange } = useContext(ScrollEventContext)
  const itemGeometry = useItemGeometry(initialDepth)

  return (
    <>
      <EventDispatcherComponent ranges={ranges} setRange={setRange} />
      <PrescrollAnimation
        ref={preScrollAnimation}
        range={ranges.preScroll}
        bgRef={bg}
      />
      <Software
        ref={softwareRef}
        range={ranges.software}
        titleId={title}
        subtitleId={subtitle}
        descriptionId={description}
        scrollData={scrollData}
        bgRef={bg}
        itemGeometry={itemGeometry}
        items={software}
        itemData={itemData}
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
      {/* <OrbitControls /> */}
    </>
  )
}
