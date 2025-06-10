import { OrbitControls, PerspectiveCamera, useScroll } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import { useTheme } from 'website/hooks/useTheme'
import { FluidBackgroundAnimation } from '../../components/FluidBackground.canvas'
import { useCallback, useMemo, useRef, useState } from 'react'
import { Performance } from '../../components/Performance.canvas'
import { DirectionalLightAnimation } from '../../components/DirectionalLight.canvas'
import { useFrame, useThree } from '@react-three/fiber'
import { useResizeEvent } from 'src/hooks/useResizeEvent'
import { SoftwareAnimation } from '../../components/Software.canvas'
import { Vector3 } from 'three'
import { getItemData } from '../../utils/bounds'
import { useItemGeometry } from '../../hooks/useItemGeometry.canvas'
import { PhotographyAnimation } from '../../components/Photography.canvas'
import { MarkupAnimation } from '../../components/MarkupAnimation.canvas'

export const Home = ({
  config,
  zPos = 0.1,
  initialDepth = 0.05,
  targetDepth = 0.0005,
}) => {
  const {
    footer: {
      markupIds: { scrollContainer, fpsContainer },
    },
    effects: { renderPriority, Component: Effects },

    main: { EventDispatcherComponent },
    content: { itemCount },
    style: { itemSizePx, titleHeight },
  } = config
  // reactive data
  const {
    colors,
    lengths: { scrollContainerBorderSize, atomicPadding },
  } = useTheme()
  const { canvas, get } = useThree(({ gl, get }) => ({
    canvas: gl.domElement,
    get,
  }))
  const scrollData = useScroll()
  const [itemData, setItemData] = useState()

  // imperative component refs
  const markupRef = useRef()
  const bgRef = useRef()
  const softwareRef = useRef()
  const photographyRef = useRef()
  const lightRef = useRef()

  // animation targets
  const animationTargets = useMemo(
    () => ({
      refs: { markupRef, softwareRef, photographyRef, bgRef, lightRef },
    }),
    [],
  )
  // responsive callbacks
  const resizeCallback = useCallback(() => {
    // compute item data
    setItemData(
      getItemData({
        scrollContainerId: scrollContainer,
        scrollContainerBorderSize,
        state: get(),
        target: new Vector3(0, 0, zPos),
        zPos,
        itemSizePx,
        geometryDepth: initialDepth,
        initialDepth,
        targetDepth,
        count: itemCount,
        focusTransformPx: new Vector3(-4 * atomicPadding, -titleHeight / 2, 0),
        focusTransformScale: new Vector3(-0.5, 0, 0),
        intermediateTransformPx: new Vector3(0, -titleHeight / 2, 0),
        initialTransformPx: new Vector3(itemSizePx, -titleHeight / 2, 0),
      }),
    )
    // run child resize callbacks
    bgRef?.current?.resizeCallback()
    softwareRef?.current?.resizeCallback()
    photographyRef?.current?.resizeCallback()
  }, [
    atomicPadding,
    get,
    initialDepth,
    itemCount,
    itemSizePx,
    scrollContainer,
    scrollContainerBorderSize,
    targetDepth,
    titleHeight,
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

      markupRef.current?.scrollCallback &&
        markupRef.current.scrollCallback(state, delta, scrollData)
      bgRef.current?.scrollCallback &&
        bgRef.current.scrollCallback(state, delta, scrollData)
      softwareRef.current?.scrollCallback &&
        softwareRef.current.scrollCallback(state, delta, scrollData)
      photographyRef.current?.scrollCallback &&
        photographyRef.current.scrollCallback(state, delta, scrollData)
      lightRef.current?.scrollCallback &&
        lightRef.current.scrollCallback(state, delta, scrollData)
    }
  })

  const itemGeometry = useItemGeometry(initialDepth)

  return (
    <>
      <EventDispatcherComponent config={config} />
      <MarkupAnimation
        ref={markupRef}
        config={config}
        animationTargets={animationTargets}
        scrollData={scrollData}
      />
      <FluidBackgroundAnimation
        ref={bgRef}
        config={config}
        animationTargets={animationTargets}
      />
      <SoftwareAnimation
        ref={softwareRef}
        config={config}
        animationTargets={animationTargets}
        itemGeometry={itemGeometry}
        itemData={itemData}
      />
      <PhotographyAnimation
        ref={photographyRef}
        config={config}
        animationTargets={animationTargets}
        itemGeometry={itemGeometry}
        itemData={itemData}
        zPos={zPos}
        targetDepth={targetDepth}
      />
      <DirectionalLightAnimation
        ref={lightRef}
        config={config}
        animationTargets={animationTargets}
        position={[-0.18, 0.1, 0.5]}
        color={colors.white}
        zPos={zPos}
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
