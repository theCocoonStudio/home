import { useScroll, useTexture } from '@react-three/drei'
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { RepeatWrapping, SRGBColorSpace, Vector2, Vector3 } from 'three'

import metal from 'website/assets/canvas/metal.png'
import norm from 'website/assets/canvas/norm.png'
import rough from 'website/assets/canvas/rough.png'
import { contain } from 'website/utils/texture'
import { useFrame } from '@react-three/fiber'
import { damp } from 'maath/easing'
import { useResizeEvent } from 'src/hooks/useResizeEvent'

export const HomeItem = forwardRef(function HomeItem(
  {
    geometry,
    focusScale,
    focusPosition,
    initialPosition,
    markup,
    range,
    url,
    scrollContainerId,
    index,
    get,
    focusDepth,
    material,
    targetMaterial,
  },
  forwardedRef,
) {
  // refs
  const mesh = useRef()
  const inner = useRef()
  useImperativeHandle(
    forwardedRef,
    () => ({ mesh: mesh.current, inner: inner.current }),
    [],
  )

  // independent data
  const size = useResizeEvent()

  // textures
  const texture = useTexture(url)
  const canvasTextures = useTexture([metal, norm, rough])

  useEffect(() => {
    texture.colorSpace = SRGBColorSpace
    texture.needsUpdate = true
    contain(texture, 1)
    return () => {
      texture.dispose()
    }
  }, [texture])

  useEffect(
    () => () => {
      canvasTextures.forEach((texture) => texture.dispose())
    },
    [canvasTextures],
  )

  const repeat = useMemo(() => {
    if (focusScale) {
      const repeatFactor = focusScale.x * 0.065
      const repeat = new Vector2(repeatFactor, repeatFactor)
      return repeat
    }
    return {}
  }, [focusScale])

  // target data
  const { targetScale, targetPosition } = useMemo(() => {
    const { camera } = get()

    const { width } = size

    const { top, left, bottom, right } = document
      .getElementById(`${scrollContainerId}-${index}`)
      .getBoundingClientRect()

    const targetZ = 0
    const targetViewportSize = camera.getViewSize(
      Math.abs(camera.position.z - targetZ),
      new Vector2(),
    )
    const targetFactor = width / targetViewportSize.x

    // scale
    const scaleX = Math.abs(right - left) / targetFactor
    const scaleY = Math.abs(bottom - top) / targetFactor
    const scaleZ = Math.min(scaleX, scaleY) / 5

    // position
    const positionX =
      -targetViewportSize.x / 2 +
      (left + Math.abs(right - left) / 2) / targetFactor
    const positionY =
      targetViewportSize.y / 2 -
      (top + Math.abs(bottom - top) / 2) / targetFactor
    const positionZ = targetZ - scaleZ / 2
    // return values
    const targetScale = new Vector3(scaleX, scaleY, scaleZ / focusDepth)
    const targetPosition = new Vector3(positionX, positionY, positionZ)
    return { targetScale, targetPosition }
  }, [focusDepth, get, index, scrollContainerId, size]) // must include size for resize changes

  // animation
  const scroll = useScroll()
  const inOffset = useRef(0.0)
  const outOffset = useRef(0.0)
  const activePosition = useRef(new Vector3())
  const activeScale = useRef(new Vector3())
  const markupVisible = useRef(false)
  const isTargetMaterial = useRef(false)

  const { showMarkup, hideMarkup, setMaterial } = useMemo(() => {
    const showMarkup = () => {
      if (!markupVisible.current) {
        markup.style.opacity = '1'
        markup.style.pointerEvents = 'auto'
        markupVisible.current = true
      }
    }
    const hideMarkup = () => {
      if (markupVisible.current) {
        markup.style.opacity = '0'
        markup.style.pointerEvents = 'none'
        markupVisible.current = false
      }
    }
    const setMaterial = () => {
      if (outOffset.current > 1 - scroll.eps) {
        if (!isTargetMaterial.current) {
          mesh.current.material = targetMaterial
          isTargetMaterial.current = true
        }
      } else if (isTargetMaterial.current) {
        mesh.current.material = material
        isTargetMaterial.current = false
      }
    }
    return { showMarkup, hideMarkup, setMaterial }
  }, [markup, scroll.eps, targetMaterial, material])

  useFrame((state, delta) => {
    if (initialPosition) {
      setMaterial()

      damp(outOffset, 'current', scroll.range(...range.out), 0.0, delta)
      damp(inOffset, 'current', scroll.range(...range.in), 0.0, delta)
      damp(
        inner.current.material,
        'opacity',
        1.5 * (1 - outOffset.current),
        0.0,
        delta,
      )

      if (outOffset.current > 0) {
        hideMarkup()
        activePosition.current
          .copy(focusPosition)
          .lerp(targetPosition, outOffset.current)
        activeScale.current
          .copy(focusScale)
          .lerp(targetScale, outOffset.current)
      } else {
        if (inOffset.current > 1 - scroll.eps) {
          showMarkup()
        } else {
          hideMarkup()
        }

        activePosition.current
          .copy(initialPosition)
          .lerp(focusPosition, inOffset.current)
        activeScale.current.copy(focusScale)
      }

      mesh.current.position.copy(activePosition.current)
      mesh.current.scale.copy(activeScale.current)
    }
  })

  return (
    <mesh
      ref={mesh}
      geometry={geometry}
      visible={focusPosition}
      scale={focusScale}
      position={initialPosition}
      material={material}
    >
      <mesh scale={0.8} ref={inner}>
        <meshStandardMaterial
          fog={false}
          map={texture}
          depthWrite={false}
          depthTest={true}
          transparent
          opacity={1}
          emissiveMap={texture}
          emissive={'#fff'}
          emissiveIntensity={0.35}
          metalnessMap={canvasTextures[0]}
          normalMap={canvasTextures[1]}
          roughnessMap={canvasTextures[2]}
          normalMap-wrapS={RepeatWrapping}
          normalMap-wrapT={RepeatWrapping}
          metalnessMap-wrapS={RepeatWrapping}
          metalnessMap-wrapT={RepeatWrapping}
          roughnessMap-wrapS={RepeatWrapping}
          roughnessMap-wrapT={RepeatWrapping}
          normalScale={[30, 30]}
          metalness={0.1}
          roughness={0.5}
          normalMap-repeat={repeat}
          metalnessMap-repeat={repeat}
          roughnessMap-repeat={repeat}
        />
        <planeGeometry args={[1, 1]} />
      </mesh>
    </mesh>
  )
})
