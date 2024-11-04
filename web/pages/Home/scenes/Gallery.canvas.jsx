import { useFrame } from '@react-three/fiber'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { DoubleSide, MeshBasicMaterial } from 'three'
import { use2DBounds } from 'src/hooks/useBounds/useBounds'
import {
  useTexture,
  MeshReflectorMaterial,
  Clouds,
  Cloud,
  Environment,
} from '@react-three/drei'
import { setScaleXYZOfX } from 'web/helpers/use2DBoundsScaleUtils'
import { damp } from 'maath/easing'
import cloudsUrl from 'public/clouds.jpg'
import dragonflyUrl from 'public/dragonfly.jpeg'
import kitesUrl from 'public/kites.jpg'
import spiderUrl from 'public/spider.jpeg'
import { usePage } from '../../../hooks/usePage'

export const Gallery = forwardRef(function Gallery(
  { progressRef, time, active },
  forwardedRef,
) {
  const group = useRef()
  const cloudPic = useRef()
  const cloudBG = useRef()

  useImperativeHandle(forwardedRef, () => cloudPic.current)

  // TODO useTexture.preload at correct time
  const [clouds, dragonfly, kites, spider] = useTexture([
    cloudsUrl,
    dragonflyUrl,
    kitesUrl,
    spiderUrl,
  ])

  const {
    refs: {
      markup: { tracking },
    },
    theme: colorTheme,
    state: { pause, menu },
  } = usePage()

  const smoothTime = useRef(0.2)
  const {
    off,
    on,
    results: { ppwu },
  } = use2DBounds(cloudBG, {
    trackingElement: true,
    damping: { smoothTime: smoothTime.current },
    trackingElementRef: tracking,
    scaleToFitWidth: false,
    computeScale: setScaleXYZOfX,
  })

  useFrame((state, delta) => {
    if (progressRef.current[1] >= 1 - 0.5 / time) {
      off()
      damp(group.current.position, 'x', -10, 0.5, delta)
    } else if (progressRef.current[0] > 1 - 0.2 / time) {
      on()
      damp(group.current.position, 'x', 0, 0.7, delta)
    }
  })
  return (
    <>
      {active && <fog attach='fog' args={['#050505', 0, 13]} />}

      {active && (
        <Environment
          preset='studio'
          background={false}
          environmentIntensity={0.5}
        />
      )}
      <group ref={group} position-x={20} visible={active}>
        <mesh ref={cloudBG} position-z={-2}>
          <planeGeometry args={[1, 4 / 3]} />
          <meshBasicMaterial fog={false} color={'#000'} />
          <mesh
            ref={cloudPic}
            scale={[1 - 20 / ppwu.x, 1 - 20 / ppwu.y, 1]}
            position-z={0.01}
          >
            <planeGeometry args={[1, 4 / 3]} />
            <meshBasicMaterial map={clouds} side={DoubleSide} fog={false} />
          </mesh>
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-0.85}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={220}
            roughness={1.2}
            depthScale={1.1}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color='#050505'
            metalness={0.6}
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
        <Clouds material={MeshBasicMaterial}>
          <Cloud
            position={[0, 3, -5]}
            segments={40}
            bounds={[10, 0.2, 0.4]}
            volume={2}
            color={colorTheme.white}
            speed={0.5}
            fade={90}
          />
          <Cloud
            position={[0, 3, -5]}
            segments={30}
            bounds={[12, 0.05, 0.4]}
            volume={3}
            color={colorTheme.white}
            speed={0.25}
            fade={40}
          />
          {/* <Cloud seed={1} scale={2} volume={5} color='hotpink' fade={100} /> */}
        </Clouds>
      </group>
    </>
  )
})
