import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import normal from 'assets/wall/normal.jpg'
import roughness from 'assets/wall/roughness.jpg'
import { PhotographyItems } from './PhotographyItems.canvas'
import { useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { RepeatWrapping } from 'three'
import { damp } from 'maath/easing'
import { useSettings } from 'website/pages/Home/useSettings'

const _Photography = function PhotographyAnimation(
  {
    config: {
      style: { titleHeight },
      content: {
        sections: {
          photography: { range, items },
        },
      },
    },
    itemData,
    zPos,
    targetDepth,
    setReady,
    depth = 0.03,
    repeatFactor = 4.2,
  },
  forwardedRef,
) {
  const mesh = useRef()

  const { focusFactor } = useSettings()
  const stateCallback = useCallback(({ aspect, size, viewport, camera }) => {
    return { size, viewport, camera, aspect }
  }, [])
  const { size, viewport, camera } = useThree(stateCallback)

  const resizeCallback = useCallback(() => {
    const current =
      mesh?.current &&
      viewport.getCurrentViewport(camera, mesh?.current.position.clone(), size)

    const { width, height } = current || {}
    current?.width &&
      mesh.current.scale.set(width, height, mesh.current.scale.z)
  }, [camera, size, viewport])

  const itemsRef = useRef()
  const scrollCallback = useCallback(
    (state, delta, scrollData, scrollRanges) => {
      itemsRef.current?.scrollCallback(state, delta, scrollData, scrollRanges)

      // background
      const offset = scrollRanges.startPhotographyOffset
      const hideOffset = scrollRanges.startBlogOffset
      damp(
        mesh.current.material,
        'opacity',
        offset > 1.0 - scrollData.eps ? 0.8 * 1.0 - hideOffset : 0.8 * offset,
        0.05,
        delta,
      )
    },
    [],
  )

  const [photographyItemsGroup, setPhotographyItemsGroup] = useState()
  useImperativeHandle(
    forwardedRef,
    () => ({
      resizeCallback,
      scrollCallback,
      photographyItemsGroup,
      photographyBackgroundRef: mesh,
      photographyButtonVisibleRef: itemsRef.current.photographyButtonVisibleRef,
      activeItemIndexRef: itemsRef.current.activeItemIndexRef,
      photoSizesPxRef: itemsRef.current.photoSizesPxRef,
    }),
    [photographyItemsGroup, resizeCallback, scrollCallback],
  )

  const [normalMap, roughnessMap] = useTexture([normal, roughness])
  useEffect(
    () => () => {
      normalMap.dispose()
      roughnessMap.dispose()
    },
    [normalMap, roughnessMap],
  )

  return (
    <>
      <PhotographyItems
        ref={itemsRef}
        items={items}
        itemData={itemData}
        focusFactor={focusFactor}
        titleHeight={titleHeight}
        zPos={zPos}
        depth={depth}
        targetDepth={targetDepth}
        setPhotographyItemsGroup={setPhotographyItemsGroup}
        range={range}
        setReady={setReady}
      />
      <mesh ref={mesh} position-z={zPos - depth} receiveShadow castShadow>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial
          transparent
          opacity={0}
          normalMap={normalMap}
          normalMap-wrapS={RepeatWrapping}
          normalMap-wrapT={RepeatWrapping}
          normalMap-repeat={[
            /* repeatFactor * viewport.width,
            repeatFactor * viewport.height, */
            repeatFactor,
            repeatFactor,
          ]}
          normalScale={40}
          roughnessMap={roughnessMap}
          roughnessMap-wrapS={RepeatWrapping}
          roughnessMap-wrapT={RepeatWrapping}
          roughnessMap-repeat={[
            repeatFactor * viewport.width,
            repeatFactor * viewport.height,
          ]}
          roughness={2}
        />
      </mesh>
    </>
  )
}

export const PhotographyAnimation = forwardRef(_Photography)
