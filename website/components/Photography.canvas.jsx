import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import { PhotographyItems } from './PhotographyItems.canvas'
import { useThree } from '@react-three/fiber'

const _Photography = function PhotographyAnimation(
  {
    config: {
      style: { focusFactor, titleHeight },
      content: {
        sections: {
          photography: { range, items },
        },
      },
    },

    itemData,
    zPos,
    targetDepth,
    depth = 0.02,
  },
  forwardedRef,
) {
  const mesh = useRef()

  const stateCallback = useCallback(({ size, viewport, camera }) => {
    return { size, viewport, camera }
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
    (state, delta, scrollData) => {
      itemsRef.current?.scrollCallback(state, delta, scrollData)

      // background
      const visible = scrollData.visible(...range)
      if (visible && !mesh.current?.visible) {
        mesh.current.visible = true
      } else if (!visible) {
        mesh.current.visible = false
      }
    },
    [range],
  )

  const [photographyItemsGroup, setPhotographyItemsGroup] = useState()
  useImperativeHandle(
    forwardedRef,
    () => ({
      resizeCallback,
      scrollCallback,
      photographyItemsGroup,
      photographyBackgroundRef: mesh,
    }),
    [photographyItemsGroup, resizeCallback, scrollCallback],
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
      />
      <mesh ref={mesh} position-z={zPos - depth} receiveShadow visible={false}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial /* color='blue'  */ />
      </mesh>
    </>
  )
}

export const PhotographyAnimation = forwardRef(_Photography)
