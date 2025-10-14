import { Lightformer, PerspectiveCamera, Stars } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import { memo, Suspense, useMemo, useRef, useState } from 'react'
import { Performance } from '../../components/Performance.canvas'
import { useTargetItems } from './useTargetItems'
import { Background } from '../../components/Background.canvas'
import { Floor } from '../../components/Floor.canvas'
import { Models } from '../../components/Models.canvas'
import { useTheme } from '../../hooks/useTheme'
import { HomeItems } from '../../components/HomeItems.canvas'
import { useCommonSizeData } from '../../hooks/useCommonSizeData.canvas'

const Home = ({ config, ready, atStartOrFinish }) => {
  const {
    effects: { renderPriority, Component: Effects },

    data: {
      content: { items: itemsConfig },
      markupIds: { itemDescription, scrollContainerId, loaderVideo },
    },
  } = config

  // theme
  const {
    page: { backgroundHeightProportion, backgroundZ0 },
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
    positionZ0: backgroundZ0,
    heightProportion0: backgroundHeightProportion,
    heightProportion1: backgroundHeightProportion,
  })

  // child derived data
  const [modelsSize, setModelsSize] = useState()

  return (
    <Suspense>
      <color attach='background' args={['#050505']} />
      <fog attach='fog' args={['#050505', 82, 115]} />
      <Performance />
      <PerspectiveCamera
        makeDefault
        position-z={5}
        fov={10}
      ></PerspectiveCamera>
      {/*  <Environment preset='city' environmentIntensity={0.12} /> */}
      <Environment resolution={1024} environmentIntensity={0.4}>
        <group rotation={[-Math.PI / 3, 0, 0]}>
          <Lightformer
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
            <Lightformer
              key={i}
              form='circle'
              intensity={4}
              rotation={[Math.PI / 2, 0, 0]}
              position={[x, 4, i * 4]}
              scale={[4, 1, 1]}
            />
          ))}
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[50, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[50, 2, 1]}
          />
        </group>
      </Environment>
      <ambientLight intensity={0.5} />
      <Background
        {...commonSizeDataProps}
        videoId={loaderVideo}
        pause={atStartOrFinish.either}
        ref={background}
      />
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
        scrollContainerId={scrollContainerId}
        {...commonSizeDataProps}
      />
      <Stars radius={50} depth={50} count={15000} factor={6} fade speed={1} />
      <Effects
        renderPriority={renderPriority}
        animationTargets={animationTargets}
        enabled
        ready={ready}
      />
    </Suspense>
  )
}

export default memo(Home)
