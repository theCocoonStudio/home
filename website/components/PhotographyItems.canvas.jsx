import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { CanvasMaterial } from '../../web/components/CanvasMaterial.canvas'
import { useTheme } from '../hooks/useTheme'
import { ScrollDamper } from '../utils/damping'
import { useTexture } from '@react-three/drei'
import { BoxGeometry, Vector3 } from 'three'
import { setImageScale } from '../utils/bounds'

export const PhotographyItems = forwardRef(function PhotographyItems(
  {
    range,
    items,
    itemData,
    itemDescription,
    focusFactor,
    titleHeight,
    zPos,
    depth,
    targetDepth,
    setPhotographyItemsGroup,
  },
  forwardedRef,
) {
  const group = useRef()
  const scrollDamper = useRef(new ScrollDamper())

  const {
    colors,
    lengths: { footerHeight, navHeight, atomicPadding },
  } = useTheme()

  const { urls } = useMemo(() => {
    return { urls: items.map((item) => item.url) }
  }, [items])

  const textures = useTexture([...urls])

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
        (atomicPadding * 16) / ppwu
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
          defaultInitialPosition.y,
          positionZ,
        )
        initialPosition[index] = initialPos

        const intermediatePos = initialPos.clone()
        intermediatePos.setX(initialPos.x / 2)
        intermediatePosition[index] = intermediatePos

        const focusPos = intermediatePos.clone()
        focusPos.setX(0.0)
        focusPosition[index] = focusPos
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

  useEffect(
    () => () => {
      geometry.dispose()
    },
    [geometry],
  )

  useEffect(() => {
    setPhotographyItemsGroup(group.current)
  }, [setPhotographyItemsGroup])

  const softwareItems = useMemo(
    () =>
      items.map(({ index, range }, i) => (
        <mesh
          castShadow
          key={`items${index}`}
          geometry={geometry}
          position-x={-10}
          userData={{ index, range }}
        >
          <CanvasMaterial
            repeatFactor={0.4}
            /* color={colors.slate} */
            map={textures[i]}
            environmentIntensity={0}
          />
        </mesh>
      )),
    [geometry, items, textures],
  )

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
        },
      )
    }
  }, [focusFactor, itemData, items, photoData, targetDepth])

  const itemDescriptionVisible = useRef(null)
  const frameCallback = useCallback(() => {
    if (itemDescriptionVisible.current !== false && itemDescription) {
      itemDescription.style.opacity = 0
      itemDescription.style.pointerEvents = 'none'
      itemDescriptionVisible.current = false
    }
  }, [itemDescription])

  const scrollCallback = useCallback(
    (state, delta, scrollData) => {
      if (damper) {
        damper.frame(delta, scrollData, itemDescription && frameCallback)
        if (!scrollData.visible(...range)) {
          if (typeof itemDescriptionVisible.current === 'boolean') {
            itemDescriptionVisible.current = null
          }
        }
      }
    },
    [damper, frameCallback, itemDescription, range],
  )

  useImperativeHandle(
    forwardedRef,
    () => ({
      scrollCallback,
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
