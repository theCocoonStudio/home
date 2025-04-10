import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import { use2DBounds } from 'src/hooks/useBounds/useBounds'
import {
  useTexture,
  MeshReflectorMaterial,
  Clouds,
  Cloud,
} from '@react-three/drei'
import { setScaleXYZOfX } from 'web/helpers/use2DBoundsScaleUtils'
import { damp } from 'maath/easing'
import cloudsUrl from 'public/clouds.jpg'
import dragonflyUrl from 'public/dragonfly.jpeg'
import kitesUrl from 'public/kites.jpg'
import spiderUrl from 'public/dragonfly2.jpeg'
import { useTheme } from '../../../hooks/useTheme'
import { useShowcase } from 'web/pages/Showcase/hooks/useShowcase'
import { useMarkup } from '../../../hooks/useMarkup'
import { setScaleXYZOfY } from 'web/helpers/use2DBoundsScaleUtils'
import { MeshBasicMaterial } from 'three'

export const Gallery = forwardRef(function Gallery(
  { bufferTime, time, renderPriority },
  forwardedRef,
) {
  const group = useRef()
  const cloudPic = useRef()
  const cloudBG = useRef()
  const dragonflyBG = useRef()
  const dragonflyPic = useRef()
  const kitesBG = useRef()
  const kitesPic = useRef()
  const spiderBG = useRef()
  const spidePic = useRef()
  const reflector = useRef()

  // TODO useTexture.preload at correct time
  const [clouds, dragonfly, kites, spider] = useTexture([
    cloudsUrl,
    dragonflyUrl,
    kitesUrl,
    spiderUrl,
  ])

  const {
    refs: {
      showcase: { tracking, code },
    },
  } = useMarkup()
  const {
    state: { current, pause, menu },
  } = useShowcase()

  const colorTheme = useTheme()

  const smoothTime = useRef(bufferTime)
  const child1 = useRef()
  const child2 = useRef()
  const child3 = useRef()
  const [visible, setVisible] = useState(false)
  const [index, setIndex] = useState(3)

  useEffect(() => {
    if (current === 2) {
      child1.current = tracking.current.children[0]
      child2.current = tracking.current.children[1]
      child3.current = tracking.current.children[2]
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [current, tracking])

  const {
    results: { ppwu },
  } = use2DBounds(cloudBG, {
    trackingElement: true,
    damping: { smoothTime: smoothTime.current },
    trackingElementRef: [child1, child2, child3, code][index - 1],
    scaleToFitWidth: false,
    computeScale: index === 4 ? setScaleXYZOfY : setScaleXYZOfX,
    damp: visible,
    top: index === 4 ? undefined : 1 - 4 / 6,
    renderPriority,
  })

  use2DBounds(dragonflyBG, {
    trackingElement: true,
    damping: { smoothTime: smoothTime.current },
    trackingElementRef: [child2, child3, code, child1][index - 1],
    scaleToFitWidth: false,
    computeScale: menu && index === 3 ? setScaleXYZOfY : setScaleXYZOfX,
    damp: visible,
    top: menu && index === 3 ? undefined : 1 - 0.7074005419 / 2,
    renderPriority,
  })
  use2DBounds(kitesBG, {
    trackingElement: true,
    damping: { smoothTime: smoothTime.current },
    trackingElementRef: [child3, code, child1, child2][index - 1],
    scaleToFitWidth: false,
    computeScale: index === 2 ? setScaleXYZOfY : setScaleXYZOfX,
    damp: visible,
    top: index === 2 ? undefined : 1 - 4 / 6,
    renderPriority,
  })
  use2DBounds(spiderBG, {
    trackingElement: true,
    damping: { smoothTime: smoothTime.current },
    trackingElementRef: [code, child1, child2, child3][index - 1],
    scaleToFitWidth: false,
    computeScale: index === 1 ? setScaleXYZOfY : setScaleXYZOfX,
    damp: visible,
    top: index === 1 ? undefined : 1 - 1.162826899 / 2,
    renderPriority,
  })

  useImperativeHandle(
    forwardedRef,
    () => ({
      inactive: (delta) => {
        damp(group.current.position, 'x', 10, bufferTime, delta)
        reflector.current.position.y = -10
      },
      active: (delta) => {
        damp(group.current.position, 'x', 0, bufferTime, delta)
        damp(
          reflector.current.position,
          'y',
          menu ? -1 : -0.59,
          bufferTime,
          delta,
        )
      },
    }),
    [bufferTime, menu],
  )

  useEffect(() => {
    const callback = () => {
      setIndex((prev) => (prev === 4 ? 1 : prev + 1))
    }
    let id

    if (current === 2 && !pause) {
      id = setInterval(callback, (time * 1000) / 4)
    } else {
      clearInterval(id)
      if (current !== 2) {
        setIndex(3)
      }
    }
    return () => clearInterval(id)
  }, [current, pause, time])

  return (
    <group ref={group} visible={visible}>
      <group ref={cloudBG} position-z={-2}>
        <mesh ref={cloudPic}>
          <planeGeometry args={index === 4 ? [3 / 4, 1] : [1, 4 / 3]} />
          <meshBasicMaterial map={clouds} />
        </mesh>
      </group>
      <group ref={dragonflyBG} position-z={-2}>
        <mesh ref={dragonflyPic}>
          <planeGeometry
            args={
              menu && index === 3 ? [1 / 0.7074005419, 1] : [1, 0.7074005419]
            }
          />
          <meshBasicMaterial map={dragonfly} />
        </mesh>
      </group>
      <group ref={kitesBG} position-z={-2}>
        <mesh ref={kitesPic}>
          <planeGeometry args={index === 2 ? [3 / 4, 1] : [1, 4 / 3]} />
          <meshBasicMaterial map={kites} />
        </mesh>
      </group>
      <group ref={spiderBG} position-z={-2}>
        <mesh ref={spidePic}>
          <planeGeometry
            args={index === 1 ? [1 / 1.162826899, 1] : [1, 1.162826899]}
          />
          <meshBasicMaterial map={spider} />
        </mesh>
      </group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} ref={reflector}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[400, 300]}
          resolution={1024}
          mixBlur={0.81}
          mixContrast={1.05}
          mixStrength={79}
          roughness={1}
          metalness={0.6}
          depthScale={0.5}
          minDepthThreshold={0.5}
          maxDepthThreshold={2}
          /* color='#050505' */
          color={colorTheme.black}
        />
      </mesh>
      <mesh position-z={-15}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial
          /* opacity={0.9}
            transparent */
          color={'#050505'}
          metalness={0.5}
        />
      </mesh>
      <Clouds material={MeshBasicMaterial} position-z={-8.5} position-y={0.29}>
        <Cloud
          scale={0.8}
          seed={2}
          position-y={4.5}
          segments={40}
          bounds={[10, 0.2, 1.4]}
          volume={3}
          color={colorTheme.white}
          speed={0.1}
          fade={10}
        />
        <Cloud
          scale={0.8}
          seed={3}
          position-y={4}
          position-z={1}
          segments={30}
          bounds={[10, 0.05, 0.2]}
          volume={2.5}
          color={colorTheme.black}
          speed={0.15}
          opacity={0.6}
          fade={20}
        />
      </Clouds>
    </group>
  )
})
