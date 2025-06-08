import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { useTheme } from '../hooks/useTheme'
import { damp } from 'maath/easing'
import { Color } from 'three'
import { PhotographyItems } from './PhotographyItems.canvas'
import { lerp } from 'three/src/math/MathUtils.js'
import { useThree } from '@react-three/fiber'

const _Photography = function Photography(
  {
    config: {
      style: { focusFactor, titleHeight },
      content: {
        sections: {
          photography: { range, items },
        },
      },
    },
    itemDescriptionId,
    bgRef,
    lightRef,
    itemData,
    zPos,
    targetDepth,
    depth = 0.02,
  },
  forwardedRef,
) {
  const { colors } = useTheme()

  const [itemDescription, setItemDescription] = useState()

  const mesh = useRef()

  const stateCallback = useCallback(({ size, viewport, camera }) => {
    return { size, viewport, camera }
  }, [])
  const { size, viewport, camera } = useThree(stateCallback)

  const resizeCallback = useCallback(() => {
    if (!itemDescription) {
      const el = document.getElementById(itemDescriptionId)
      if (el) {
        setItemDescription(el)
      }
      const current =
        mesh?.current &&
        viewport.getCurrentViewport(
          camera,
          mesh?.current.position.clone(),
          size,
        )

      const { width, height } = current || {}
      current?.width &&
        mesh.current.scale.set(width, height, mesh.current.scale.z)
    }
  }, [camera, itemDescription, itemDescriptionId, size, viewport])

  const dampedOffset = useRef(0.0)
  const slate = useRef(new Color(colors.slate))
  const midnight = useRef(new Color(colors.midnight))
  const itemsRef = useRef()
  const scrollCallback = useCallback(
    (state, delta, scrollData) => {
      itemsRef.current?.scrollCallback(state, delta, scrollData)
      const offset = scrollData.range(
        items[0].range[0],
        (items[0].range[1] * (1 - focusFactor)) / 2,
      )
      const toDamp = damp(dampedOffset, 'current', offset, 0.0, delta)
      if (toDamp) {
        // background color
        bgRef.current.backingMaterialRef.current.color.lerpColors(
          slate.current,
          midnight.current,
          dampedOffset.current,
        )
        // light intensity
        lightRef.current.light.intensity = lerp(
          lightRef.current.defaultIntensity,
          3.5,
          dampedOffset.current,
        )
      }
      // background
      const visible = scrollData.visible(...range)
      if (visible && !mesh.current?.visible) {
        mesh.current.visible = true
      } else if (!visible) {
        mesh.current.visible = false
      }
      // light shadow
      const fullOffset = scrollData.range(...range)
      if (fullOffset < scrollData.eps || fullOffset > 1.0 - scrollData.eps) {
        if (lightRef.current.light.castShadow) {
          lightRef.current.light.castShadow = false
        }
      } else if (!lightRef.current.light.castShadow) {
        lightRef.current.light.castShadow = true
      }
    },
    [bgRef, focusFactor, items, lightRef, range],
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
        range={range}
        items={items}
        itemData={itemData}
        itemDescription={itemDescription}
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

export const Photography = forwardRef(_Photography)
