import { PerspectiveCamera } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import { useTheme } from 'website/hooks/useTheme'
import { FluidBackgroundAnimation } from '../../components/FluidBackground.canvas'
import { Suspense, useCallback, useMemo, useRef, useState } from 'react'
import { Performance } from '../../components/Performance.canvas'
import { DirectionalLightAnimation } from '../../components/DirectionalLight.canvas'
import { useThree } from '@react-three/fiber'
import { useResizeEvent } from 'src/hooks/useResizeEvent'
import { SoftwareAnimation } from '../../components/Software.canvas'
import { Vector3 } from 'three'
import { getItemData } from '../../utils/bounds'
import { useItemGeometry } from '../../hooks/useItemGeometry.canvas'
import { PhotographyAnimation } from '../../components/Photography.canvas'
import { MarkupAnimation } from '../../components/MarkupAnimation.canvas'
import { BlogAnimation } from '../../components/Blog.canvas'
import { useScrollAnimation } from '../../hooks/useScrollAnimation.canvas'
import { useTargetItems } from './useTargetItems'
import { useLightbox } from '../../hooks/useLightbox'
import { useDampingTargets } from '../../hooks/useDampingTargets'

export const Home = ({
  config,
  setReady,
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
    style: {
      titleHeight,
      animation: {
        default: defaultAnimation,
        photography: photographyAnimation,
      },
    },
  } = config

  // reactive independent data
  const {
    colors,
    lengths: {
      scrollContainerBorderSize,
      navHeight,
      footerHeight,
      sidePadding,
    },
  } = useTheme()
  const { canvas, get } = useThree(({ gl, get }) => ({
    canvas: gl.domElement,
    get,
  }))

  const { showLightbox } = useLightbox()
  const [itemData, setItemData] = useState()

  // imperative component refs
  const markupRef = useRef()
  const bgRef = useRef()
  const softwareRef = useRef()
  const photographyRef = useRef()
  const blogRef = useRef()
  const lightRef = useRef()

  // animation targets
  const animationTargets = useMemo(
    () => ({
      refs: {
        markupRef,
        softwareRef,
        photographyRef,
        blogRef,
        bgRef,
        lightRef,
      },
    }),
    [],
  )
  useTargetItems(animationTargets)
  //scroll callbacks
  const frame = useScrollAnimation(config, animationTargets)
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
        geometryDepth: initialDepth,
        initialDepth,
        targetDepth,
        count: itemCount,
        getInitialScale: ({ viewportSize, ppwu }) => {
          const sideLength = Math.min(
            viewportSize.x * (1.0 - 0.618) - (3 * sidePadding) / ppwu,
            viewportSize.y -
              navHeight / ppwu -
              footerHeight / ppwu -
              titleHeight / ppwu -
              (4 * sidePadding) / ppwu,
          )
          return [sideLength, sideLength]
        },
        getInitialPosition: ({ viewportSize, ppwu, initialScale }) => {
          return [viewportSize.x / 2 + initialScale.x, -titleHeight / ppwu / 2]
        },
        getIntermediatePosition: ({ initialPosition }) => {
          return [0, initialPosition.y]
        },
        getFocusPosition: ({ viewportSize, intermediatePosition, ppwu }) => {
          const leftBound = -viewportSize.x / 2 + sidePadding / ppwu
          const rightBound =
            viewportSize.x / 2 -
            viewportSize.x * 0.618 -
            (2 * sidePadding) / ppwu
          return [
            leftBound + (rightBound - leftBound) / 2,
            intermediatePosition.y,
          ]
        },
      }),
    )
    // run child resize callbacks
    bgRef?.current?.resizeCallback()
    softwareRef?.current?.resizeCallback()
    photographyRef?.current?.resizeCallback()
    blogRef?.current?.resizeCallback()
    frame()
  }, [
    footerHeight,
    frame,
    get,
    initialDepth,
    itemCount,
    navHeight,
    scrollContainer,
    scrollContainerBorderSize,
    sidePadding,
    targetDepth,
    titleHeight,
    zPos,
  ])
  useResizeEvent(canvas, resizeCallback)
  // reactive dependent data
  const itemGeometry = useItemGeometry(initialDepth)
  const bounds = useDampingTargets({
    default: defaultAnimation,
    photography: photographyAnimation,
    scrollContainerId: scrollContainer,
    itemCount,
    setItemDescriptionTop: markupRef?.current?.setItemDescriptionTop,
    dummySubtitleElement: markupRef?.current?.dummySubtitleElement,
    dummyDescriptionElement: markupRef?.current?.dummyDescriptionElement,
  })

  return (
    <Suspense>
      <EventDispatcherComponent config={config} />
      <MarkupAnimation
        ref={markupRef}
        config={config}
        animationTargets={animationTargets}
        showLightbox={showLightbox}
      />
      <FluidBackgroundAnimation
        ref={bgRef}
        config={config}
        animationTargets={animationTargets}
        showLightbox={showLightbox}
      />
      <SoftwareAnimation
        ref={softwareRef}
        config={config}
        animationTargets={animationTargets}
        itemGeometry={itemGeometry}
        bounds={bounds}
      />

      <PhotographyAnimation
        ref={photographyRef}
        config={config}
        animationTargets={animationTargets}
        itemGeometry={itemGeometry}
        itemData={itemData}
        zPos={zPos}
        targetDepth={targetDepth}
        setReady={setReady}
      />

      <BlogAnimation
        ref={blogRef}
        config={config}
        animationTargets={animationTargets}
        itemGeometry={itemGeometry}
        bounds={bounds}
      />
      <DirectionalLightAnimation
        ref={lightRef}
        config={config}
        animationTargets={animationTargets}
        targetPosition={new Vector3(-0.38, 0.4, 0.5)}
        color={colors.white}
        zPos={zPos}
      />
      <color attach='background' args={[colors.black]} />
      <Performance fpsContainer={fpsContainer} />
      <PerspectiveCamera makeDefault position-z={1} fov={30} />
      <Environment preset='city' environmentIntensity={0.9} />
      <ambientLight intensity={0.7} />
      <Effects renderPriority={renderPriority} />
    </Suspense>
  )
}
