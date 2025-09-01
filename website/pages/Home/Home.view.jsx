import { PerspectiveCamera } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import { useTheme } from 'website/hooks/useTheme'
import { FluidBackgroundAnimation } from '../../components/FluidBackground.canvas'
import { Suspense, useCallback, useEffect, useMemo, useRef } from 'react'
import { Performance } from '../../components/Performance.canvas'
import { DirectionalLightAnimation } from '../../components/DirectionalLight.canvas'
import { useThree } from '@react-three/fiber'
import { useResizeEvent } from 'src/hooks/useResizeEvent'
import { SoftwareAnimation } from '../../components/Software.canvas'
import { Vector3 } from 'three'
import { useItemGeometry } from '../../hooks/useItemGeometry.canvas'
import { PhotographyAnimation } from '../../components/Photography.canvas'
import { MarkupAnimation } from '../../components/MarkupAnimation.canvas'
import { BlogAnimation } from '../../components/Blog.canvas'
import { useScrollAnimation } from '../../hooks/useScrollAnimation.canvas'
import { useTargetItems } from './useTargetItems'
import { useLightbox } from '../../hooks/useLightbox'
import { useDampingTargets } from '../../hooks/useDampingTargets'

export const Home = ({ config, setReady, zPos = 0.1, initialDepth = 0.05 }) => {
  const {
    footer: {
      markupIds: { scrollContainer, fpsContainer },
    },
    effects: { renderPriority, Component: Effects },

    main: { EventDispatcherComponent },
    content: { itemCount },
    style: {
      animation: {
        default: defaultAnimation,
        photography: photographyAnimation,
      },
    },
  } = config

  // reactive independent data
  const { colors } = useTheme()
  const { canvas } = useThree(({ gl, get }) => ({
    canvas: gl.domElement,
    get,
  }))

  const { showLightbox } = useLightbox()

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
  const { frame, ranges } = useScrollAnimation(config, animationTargets)
  // responsive callbacks
  const resizeCallback = useCallback(() => {
    // run child resize callbacks
    bgRef?.current?.resizeCallback()
    softwareRef?.current?.resizeCallback()
    photographyRef?.current?.resizeCallback()
    blogRef?.current?.resizeCallback()
    frame()
  }, [frame])
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

  useEffect(() => {
    setReady(true)
  }, [])
  return (
    <Suspense>
      <EventDispatcherComponent config={config} />
      <MarkupAnimation
        ref={markupRef}
        config={config}
        animationTargets={animationTargets}
        showLightbox={showLightbox}
      />

      <PhotographyAnimation
        ref={photographyRef}
        config={config}
        /* setReady={setReady} */
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
      <PerspectiveCamera makeDefault position-z={1} fov={30}>
        <FluidBackgroundAnimation
          ref={bgRef}
          config={config}
          animationTargets={animationTargets}
          showLightbox={showLightbox}
          ranges={ranges}
        />
        <SoftwareAnimation
          ref={softwareRef}
          config={config}
          animationTargets={animationTargets}
          itemGeometry={itemGeometry}
          bounds={bounds}
        />
        <BlogAnimation
          ref={blogRef}
          config={config}
          animationTargets={animationTargets}
          itemGeometry={itemGeometry}
          bounds={bounds}
        />
      </PerspectiveCamera>
      <Environment preset='city' environmentIntensity={0.9} />
      <ambientLight intensity={0.7} />
      <Effects renderPriority={renderPriority} />
    </Suspense>
  )
}
