import { OrbitControls, PerspectiveCamera, useScroll } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import { useTheme } from 'website/hooks/useTheme'
import { FluidBackground } from '../../components/FluidBackground.canvas'
import { useCallback, useMemo, useRef, useState } from 'react'
import { Performance } from '../../components/Performance.canvas'
import { DirectionalLight } from '../../components/DirectionalLight.canvas'
import { useFrame, useThree } from '@react-three/fiber'
import { useResizeEvent } from 'src/hooks/useResizeEvent'
import { Software } from '../../components/Software.canvas'
import { Vector3 } from 'three'
import { getItemData } from '../../utils/bounds'
import { useItemGeometry } from '../../hooks/useItemGeometry.canvas'
import { Photography } from '../../components/Photography.canvas'
import { useMarkupId } from '../../hooks/useMarkupId'
import { useBoundPathForce } from '../../hooks/useBoundPathForce.canvas'
import { useFluidBackgroundAnimation } from '../../hooks/useFluidBackgroundAnimation.canvas'
import { useMarkupAnimation } from '../../hooks/useMarkupAnimation.canvas'

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

    main: {
      EventDispatcherComponent,
      markupIds: { title, subtitle, description, itemDescription },
    },
    content: { itemCount, sections },
    style: { itemSizePx, titleHeight, focusFactor },
  } = config
  // reactive data
  const {
    colors,
    lengths: {
      navHeight,
      footerHeight,
      scrollContainerBorderSize,
      atomicPadding,
    },
  } = useTheme()
  const { canvas, get } = useThree(({ gl, get }) => ({
    canvas: gl.domElement,
    get,
  }))
  const scrollData = useScroll()
  const [itemData, setItemData] = useState()

  // component refs
  const softwareRef = useRef()
  const photographyRef = useRef()
  const bgRef = useRef()
  const lightRef = useRef()
  // markup
  const titleElement = useMarkupId(title)
  const subtitleElement = useMarkupId(subtitle)
  const descriptionElement = useMarkupId(description)
  const itemDescriptionElement = useMarkupId(itemDescription)
  // animation Callbacks
  const {
    forceCallback: boundPathForceCallback,
    resizeCallback: boundPathForceResizeCallback,
  } = useBoundPathForce(bgRef)
  // animation targets
  const animationTargets = useMemo(
    () => ({
      markup: {
        titleElement,
        subtitleElement,
        descriptionElement,
        itemDescriptionElement,
      },
      refs: { softwareRef, photographyRef, bgRef, lightRef },
      callbacks: { boundPathForceCallback },
    }),
    [
      boundPathForceCallback,
      descriptionElement,
      itemDescriptionElement,
      subtitleElement,
      titleElement,
    ],
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
    // run animation-callback resize callbacks
    boundPathForceResizeCallback()
    // run child resize callbacks
    softwareRef?.current?.resizeCallback()
    photographyRef?.current?.resizeCallback()
    bgRef?.current?.resizeCallback()
  }, [
    atomicPadding,
    boundPathForceResizeCallback,
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
  const bgCallback = useFluidBackgroundAnimation(config, animationTargets)
  const markupCallback = useMarkupAnimation(config, animationTargets)
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

      bgCallback(state, delta, scrollData)
      markupCallback(state, delta, scrollData)
      softwareRef.current?.scrollCallback &&
        softwareRef.current.scrollCallback(state, delta, scrollData)
      photographyRef.current?.scrollCallback &&
        photographyRef.current.scrollCallback(state, delta, scrollData)
      bgRef.current?.scrollCallback &&
        bgRef.current.scrollCallback(state, delta, scrollData)
    }
  })

  const itemGeometry = useItemGeometry(initialDepth)

  return (
    <>
      <EventDispatcherComponent config={config} />
      <Software
        ref={softwareRef}
        config={config}
        titleId={title}
        subtitleId={subtitle}
        descriptionId={description}
        itemDescriptionId={itemDescription}
        scrollData={scrollData}
        bgRef={bgRef}
        itemGeometry={itemGeometry}
        itemData={itemData}
      />
      <Photography
        ref={photographyRef}
        config={config}
        itemDescriptionId={itemDescription}
        bgRef={bgRef}
        lightRef={lightRef}
        itemGeometry={itemGeometry}
        itemData={itemData}
        zPos={zPos}
        targetDepth={targetDepth}
      />
      <FluidBackground ref={bgRef} colors={colors} />
      <DirectionalLight
        ref={lightRef}
        position={[-0.18, 0.1, 0.5]}
        color={colors.white}
        bgRef={bgRef}
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
