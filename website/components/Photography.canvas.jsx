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
import { useScrollEvent } from '../pages/Home/useScrollEvent'

const _Photography = function PhotographyAnimation(
  {
    config: {
      style: { focusFactor, titleHeight },
      content: {
        sections: {
          photography: { range, items },
          blog: { range: blogRange, items: blogItems },
        },
      },
    },
    animationTargets,
    itemData,
    zPos,
    targetDepth,
    depth = 0.03,
    repeatFactor = 5,
  },
  forwardedRef,
) {
  const mesh = useRef()

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

  const postScroll = useScrollEvent('postScroll')
  useEffect(() => {
    if (photographyItemsGroup) {
      photographyItemsGroup.visible = postScroll ? false : true
    }
  }, [postScroll, photographyItemsGroup])
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
      />
      <mesh ref={mesh} position-z={zPos - depth} receiveShadow castShadow>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial
          transparent
          normalMap={normalMap}
          normalMap-wrapS={RepeatWrapping}
          normalMap-wrapT={RepeatWrapping}
          normalMap-repeat={[
            /* repeatFactor * viewport.width,
            repeatFactor * viewport.height, */
            repeatFactor,
            repeatFactor,
          ]}
          normalScale={10}
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
