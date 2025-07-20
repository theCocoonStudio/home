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
import {
  MeshBasicMaterial,
  RepeatWrapping,
  SRGBColorSpace,
  Vector3,
} from 'three'
import { setImageScale } from '../utils/bounds'
import metal from 'website/assets/canvas/metal.png'
import norm from 'website/assets/canvas/norm.png'
import rough from 'website/assets/canvas/rough.png'
import { compileSceneAsync } from '../utils/gl'
import { useThree } from '@react-three/fiber'

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
    setReady,
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
  const materialTextures = useTexture([metal, norm, rough])
  useEffect(() => {
    textures.forEach((texture) => {
      texture.colorSpace = SRGBColorSpace
      texture.needsUpdate = true
    })
  }, [textures])
  useEffect(
    () => () => {
      textures.forEach((texture) => texture.dispose())
    },
    [textures],
  )
  useEffect(
    () => () => {
      materialTextures.forEach((texture) => texture.dispose())
    },
    [materialTextures, textures],
  )
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

  const inactiveMaterial = useMemo(
    () => new MeshBasicMaterial({ color: colors.charcoal }),
    [colors.charcoal],
  )

  useEffect(() => {
    setPhotographyItemsGroup(group.current)
  }, [setPhotographyItemsGroup])

  const softwareItems = useMemo(() => {
    if (photoData?.initialScale) {
      const [metalnessMap, normalMap, roughnessMap] = materialTextures
      return items.map(({ index, range }, i) => {
        const repeat = [
          1.7 * photoData.initialScale[i].x,
          1.7 * photoData.initialScale[i].y,
          1.7 * photoData.initialScale[i].z,
        ]
        return (
          <mesh
            key={`photographyItems${index}`}
            position-x={-10}
            userData={{ index, range }}
            /* material={[]} */
            castShadow
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              attach='material-0'
              metalnessMap={metalnessMap}
              normalMap={normalMap}
              roughnessMap={roughnessMap}
              normalMap-wrapS={RepeatWrapping}
              normalMap-wrapT={RepeatWrapping}
              metalnessMap-wrapS={RepeatWrapping}
              metalnessMap-wrapT={RepeatWrapping}
              roughnessMap-wrapS={RepeatWrapping}
              roughnessMap-wrapT={RepeatWrapping}
              normalScale={[6.0, 6.0]}
              metalness={0.1}
              roughness={0.5}
              normalMap-repeat={[repeat[2], repeat[1]]}
              metalnessMap-repeat={[repeat[2], repeat[1]]}
              roughnessMap-repeat={[repeat[2], repeat[1]]}
            />
            <meshStandardMaterial
              attach='material-1'
              metalnessMap={metalnessMap}
              normalMap={normalMap}
              roughnessMap={roughnessMap}
              normalMap-wrapS={RepeatWrapping}
              normalMap-wrapT={RepeatWrapping}
              metalnessMap-wrapS={RepeatWrapping}
              metalnessMap-wrapT={RepeatWrapping}
              roughnessMap-wrapS={RepeatWrapping}
              roughnessMap-wrapT={RepeatWrapping}
              normalScale={[6.0, 6.0]}
              metalness={0.1}
              roughness={0.5}
              normalMap-repeat={[repeat[2], repeat[1]]}
              metalnessMap-repeat={[repeat[2], repeat[1]]}
              roughnessMap-repeat={[repeat[2], repeat[1]]}
            />
            <meshStandardMaterial
              attach='material-2'
              metalnessMap={metalnessMap}
              normalMap={normalMap}
              roughnessMap={roughnessMap}
              normalMap-wrapS={RepeatWrapping}
              normalMap-wrapT={RepeatWrapping}
              metalnessMap-wrapS={RepeatWrapping}
              metalnessMap-wrapT={RepeatWrapping}
              roughnessMap-wrapS={RepeatWrapping}
              roughnessMap-wrapT={RepeatWrapping}
              normalScale={[6.0, 6.0]}
              metalness={0.1}
              roughness={0.5}
              normalMap-repeat={[repeat[0], repeat[2]]}
              metalnessMap-repeat={[repeat[0], repeat[2]]}
              roughnessMap-repeat={[repeat[0], repeat[2]]}
            />
            <meshStandardMaterial
              attach='material-3'
              metalnessMap={metalnessMap}
              normalMap={normalMap}
              roughnessMap={roughnessMap}
              normalMap-wrapS={RepeatWrapping}
              normalMap-wrapT={RepeatWrapping}
              metalnessMap-wrapS={RepeatWrapping}
              metalnessMap-wrapT={RepeatWrapping}
              roughnessMap-wrapS={RepeatWrapping}
              roughnessMap-wrapT={RepeatWrapping}
              normalScale={[6.0, 6.0]}
              metalness={0.1}
              roughness={0.5}
              normalMap-repeat={[repeat[0], repeat[2]]}
              metalnessMap-repeat={[repeat[0], repeat[2]]}
              roughnessMap-repeat={[repeat[0], repeat[2]]}
            />
            <meshStandardMaterial
              map={textures[i]}
              attach='material-4'
              metalnessMap={metalnessMap}
              normalMap={normalMap}
              roughnessMap={roughnessMap}
              normalMap-wrapS={RepeatWrapping}
              normalMap-wrapT={RepeatWrapping}
              metalnessMap-wrapS={RepeatWrapping}
              metalnessMap-wrapT={RepeatWrapping}
              roughnessMap-wrapS={RepeatWrapping}
              roughnessMap-wrapT={RepeatWrapping}
              normalScale={[6.0, 6.0]}
              metalness={0.1}
              roughness={0.5}
              normalMap-repeat={[repeat[0], repeat[1]]}
              metalnessMap-repeat={[repeat[0], repeat[1]]}
              roughnessMap-repeat={[repeat[0], repeat[1]]}
            />
            <meshStandardMaterial
              attach='material-5'
              metalnessMap={metalnessMap}
              normalMap={normalMap}
              roughnessMap={roughnessMap}
              normalMap-wrapS={RepeatWrapping}
              normalMap-wrapT={RepeatWrapping}
              metalnessMap-wrapS={RepeatWrapping}
              metalnessMap-wrapT={RepeatWrapping}
              roughnessMap-wrapS={RepeatWrapping}
              roughnessMap-wrapT={RepeatWrapping}
              normalScale={[6.0, 6.0]}
              metalness={0.1}
              roughness={0.5}
              normalMap-repeat={[repeat[0], repeat[1]]}
              metalnessMap-repeat={[repeat[0], repeat[1]]}
              roughnessMap-repeat={[repeat[0], repeat[1]]}
            />
          </mesh>
        )
      })
    }
  }, [items, materialTextures, photoData?.initialScale, textures])

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
  const frameCallback = useCallback(({ targetIndex, item: { ref }, index }) => {
    if (targetIndex === 3) {
      photographyButtonVisible.current = true
      activeItemIndex.current = index
    } else {
      photographyButtonVisible.current = false
      activeItemIndex.current = undefined
    }
    if (group.current) {
      group.current.children.forEach((child) => {
        if (child === ref) {
          //
        }
      })
    }
  }, [])

  const scrollCallback = useCallback(
    (state, delta, scrollData, scrollRanges) => {
      if (!scrollRanges.photographyVisible) {
        if (photographyButtonVisible.current) {
          photographyButtonVisible.current = false
          activeItemIndex.current = undefined
        }
      }
      if (damper) {
        damper.frame(delta, scrollData, group.current && frameCallback)
      }
    },
    [damper, frameCallback],
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

  const get = useThree(({ get }) => get)

  useEffect(() => {
    if (group.current?.children?.length > 0) {
      const { gl, scene, camera } = get()
      compileSceneAsync(gl, scene, camera, () => {
        setReady(true)
      })
    }
  })
  return (
    <>
      <group
        ref={group}
        onPointerDown={() => {
          console.log(group.current)
        }}
      >
        {softwareItems}
      </group>
    </>
  )
})
