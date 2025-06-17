import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { useTheme } from '../hooks/useTheme'
import { ScrollDamper } from '../utils/damping'
import { useTexture } from '@react-three/drei'
import { BoxGeometry, MeshBasicMaterial, Vector3 } from 'three'
import { setImageScale } from '../utils/bounds'
import { useCanvasMaterial } from '../hooks/useCanvasMaterial.canvas'

export const PhotographyItems = forwardRef(function PhotographyItems(
  {
    items,
    itemData,
    focusFactor,
    titleHeight,
    zPos,
    depth,
    targetDepth,
    setPhotographyItemsGroup,
    range,
  },
  forwardedRef,
) {
  const group = useRef()
  const scrollDamper = useRef(new ScrollDamper())
  const { colors } = useTheme()
  const {
    lengths: { footerHeight, navHeight, atomicPadding },
  } = useTheme()

  const { urls } = useMemo(() => {
    return { urls: items.map((item) => item.url) }
  }, [items])

  const textures = useTexture([...urls])

  const photoSizesPx = useRef([])
  const photoData = useMemo(() => {
    if (itemData) {
      const {
        viewportSize,
        ppwu,
        initialPosition: defaultInitialPosition,
      } = itemData
      const positionZ = zPos - depth / 2

      const maxHeight =
        viewportSize.y -
        footerHeight / ppwu -
        navHeight / ppwu -
        titleHeight / ppwu -
        (atomicPadding * 30) / ppwu
      const maxWidth = viewportSize.x /* / 2 */ - (atomicPadding * 16) / ppwu

      const initialScale = []
      const initialPosition = []
      const intermediatePosition = []
      const focusPosition = []
      textures.forEach((texture, index) => {
        const scale = new Vector3(0, 0, depth)
        setImageScale(
          maxWidth,
          maxHeight,
          texture.source.data.width,
          texture.source.data.height,
          scale,
        )
        initialScale[index] = scale

        const initialPos = new Vector3(
          -viewportSize.x / 2 - scale.x,
          defaultInitialPosition.y + (atomicPadding * 6) / ppwu,
          positionZ,
        )
        initialPosition[index] = initialPos

        const intermediatePos = initialPos.clone()
        intermediatePos.setX(initialPos.x / 2)
        intermediatePosition[index] = intermediatePos

        const focusPos = intermediatePos.clone()
        focusPos.setX(0.0)
        focusPosition[index] = focusPos
        photoSizesPx.current[index] = {
          width: scale.x * ppwu,
          top:
            viewportSize.y * 0.5 * ppwu -
            focusPos.y * ppwu +
            scale.y * 0.5 * ppwu +
            atomicPadding * 8,
        }
      })
      return {
        initialScale,
        initialPosition,
        intermediatePosition,
        focusPosition,
      }
    }
  }, [
    atomicPadding,
    depth,
    footerHeight,
    itemData,
    navHeight,
    textures,
    titleHeight,
    zPos,
  ])

  const geometry = useMemo(() => new BoxGeometry(1, 1, 1), [])
  const activeMaterial = useCanvasMaterial()
  const inactiveMaterial = useMemo(
    () => new MeshBasicMaterial({ color: colors.midnight }),
    [colors.midnight],
  )
  useEffect(
    () => () => {
      geometry.dispose()
      inactiveMaterial.dispose()
      textures.forEach((texture) => texture.dispose())
    },
    [geometry, inactiveMaterial, textures],
  )

  useEffect(() => {
    setPhotographyItemsGroup(group.current)
  }, [setPhotographyItemsGroup])

  const softwareItems = useMemo(() => {
    if (photoData?.initialScale) {
      return items.map(({ index, range }, i) => {
        return (
          <mesh
            key={`photographyItems${index}`}
            geometry={geometry}
            position-x={-10}
            userData={{ index, range }}
          />
        )
      })
    }
  }, [geometry, items, photoData])

  const damper = useMemo(() => {
    if (group.current?.children && itemData) {
      const itemsArr = group.current?.children.map((child, index) => ({
        ref: child,
        ...items[index],
      }))
      const {
        initialScale,
        initialPosition,
        intermediatePosition,
        focusPosition,
      } = photoData
      const { targetScale, targetPositions } = itemData
      return scrollDamper.current.setData(
        itemsArr,
        {
          initialScale,
          targetScale: targetScale.clone().setZ(targetDepth),
          initialPosition,
          intermediatePosition,
          focusPosition,
          targetPositions,
        },
        {
          focusFactor,
          /* rotate: false, */
        },
      )
    }
  }, [focusFactor, itemData, items, photoData, targetDepth])

  const photographyButtonVisible = useRef(false)
  const activeItemIndex = useRef(null)
  const frameCallback = useCallback(
    ({ targetIndex, item: { ref }, index }) => {
      if (targetIndex === 3) {
        photographyButtonVisible.current = true
        activeItemIndex.current = index
      } else {
        photographyButtonVisible.current = false
        activeItemIndex.current = undefined
      }
      group.current.children.forEach((child) => {
        if (child === ref) {
          if (child.material !== activeMaterial) {
            const repeat = [
              1.6 * photoData.initialScale[index].x,
              1.6 * photoData.initialScale[index].y,
              1.6 * photoData.initialScale[index].z,
            ]
            activeMaterial[0].normalMap.repeat.set(repeat[2], repeat[1])
            activeMaterial[0].metalnessMap.repeat.set(repeat[2], repeat[1])
            activeMaterial[0].roughnessMap.repeat.set(repeat[2], repeat[1])
            activeMaterial[0].needsUpdate = true

            activeMaterial[2].normalMap.repeat.set(repeat[0], repeat[2])
            activeMaterial[2].metalnessMap.repeat.set(repeat[0], repeat[2])
            activeMaterial[2].roughnessMap.repeat.set(repeat[0], repeat[2])
            activeMaterial[2].needsUpdate = true

            activeMaterial[4].map = textures[index]
            activeMaterial[4].normalMap.repeat.set(repeat[0], repeat[1])
            activeMaterial[4].metalnessMap.repeat.set(repeat[0], repeat[1])
            activeMaterial[4].roughnessMap.repeat.set(repeat[0], repeat[1])
            activeMaterial[4].needsUpdate = true

            activeMaterial[5].normalMap.repeat.set(repeat[0], repeat[1])
            activeMaterial[5].metalnessMap.repeat.set(repeat[0], repeat[1])
            activeMaterial[5].roughnessMap.repeat.set(repeat[0], repeat[1])
            activeMaterial[5].needsUpdate = true

            ref.material = activeMaterial
            ref.castShadow = true
            //
          }
        } else {
          if (child.material !== inactiveMaterial) {
            child.material = inactiveMaterial
            child.castShadow = false
          }
        }
      })
    },
    [activeMaterial, inactiveMaterial, photoData, textures],
  )
  const materialSet = useRef(false)
  const scrollCallback = useCallback(
    (state, delta, scrollData) => {
      if (!scrollData.visible(...range)) {
        if (photographyButtonVisible.current) {
          photographyButtonVisible.current = false
          activeItemIndex.current = undefined
        }
        if (materialSet.current === false) {
          group.current.children.forEach((child) => {
            child.material = inactiveMaterial
            child.castShadow = false
          })
          materialSet.current = true
        }
      } else {
        materialSet.current = false
      }
      if (damper) {
        damper.frame(delta, scrollData, group.current && frameCallback)
      }
    },
    [damper, frameCallback, inactiveMaterial, range],
  )

  useImperativeHandle(
    forwardedRef,
    () => ({
      scrollCallback,
      photographyButtonVisibleRef: photographyButtonVisible,
      activeItemIndexRef: activeItemIndex,
      photoSizesPxRef: photoSizesPx,
    }),
    [scrollCallback],
  )

  return (
    <>
      <group
        ref={group}
        onPointerDown={() => {
          console.log('hi')
        }}
      >
        {softwareItems}
      </group>
    </>
  )
})
