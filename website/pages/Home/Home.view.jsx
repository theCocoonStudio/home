import { PerspectiveCamera, Stars } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Performance } from '../../components/Performance.canvas'
import { useTargetItems } from './useTargetItems'
import { useLightbox } from '../../hooks/useLightbox'
import { Background } from '../../components/Background.canvas'
import { Floor } from '../../components/Floor.canvas'
import { Models } from '../../components/Models.canvas'
import { useTheme } from '../../hooks/useTheme'
import { HomeItems } from '../../components/HomeItems.canvas'
import { useCommonSizeData } from '../../hooks/useCommonSizeData.canvas'

export const Home = ({ config, setReady, ready }) => {
  const {
    effects: { renderPriority, Component: Effects },

    main: { EventDispatcherComponent },
    data: {
      content: { items: itemsConfig },
      markupIds: { itemDescription },
    },
  } = config

  const { showLightbox } = useLightbox()

  // theme
  const {
    page: { backgroundHeightProportion },
  } = useTheme()

  // imperative component refs
  const background = useRef()
  const floor = useRef()
  const models = useRef()
  const items = useRef()
  // animation targets
  const animationTargets = useMemo(
    () => ({
      refs: { background, floor, models, items },
    }),
    [],
  )
  useTargetItems(animationTargets)

  // common child size data
  const commonSizeDataProps = useCommonSizeData({
    positionZ0: -80,
    heightProportion0: backgroundHeightProportion,
    heightProportion1: backgroundHeightProportion,
  })

  // child derived data
  const [modelsSize, setModelsSize] = useState()
  // reactive dependent data
  useEffect(() => {
    setReady(true)
  }, [])

  return (
    <Suspense>
      {/* <EventDispatcherComponent config={config} /> */}
      <color attach='background' args={['#111']} />
      <fog attach='fog' args={['#111', 82, 115]} />
      <Performance />
      <PerspectiveCamera
        makeDefault
        position-z={5}
        fov={10}
      ></PerspectiveCamera>
      <Environment preset='city' environmentIntensity={0.7} />
      <ambientLight intensity={0.7} />
      <Background {...commonSizeDataProps} ref={background} />
      <Models
        ref={models}
        setModelsSize={setModelsSize}
        {...commonSizeDataProps}
      />
      <Floor ref={floor} {...commonSizeDataProps} />
      <HomeItems
        ref={items}
        modelsSize={modelsSize}
        itemsConfig={itemsConfig}
        itemDescriptionIdBase={itemDescription}
        {...commonSizeDataProps}
      />
      <Stars radius={50} depth={50} count={15000} factor={7} fade speed={1} />
      <Effects
        renderPriority={renderPriority}
        animationTargets={animationTargets}
        enabled
        ready={ready}
      />
    </Suspense>
  )
}
