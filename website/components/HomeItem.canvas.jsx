import { MeshTransmissionMaterial, useTexture } from '@react-three/drei'
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import dragonfly from 'assets/photography/test.jpg'
import {
  DoubleSide,
  RepeatWrapping,
  SRGBColorSpace,
  Vector2,
  Vector3,
} from 'three'
import { setImageScale } from '../utils/bounds'
import metal from 'website/assets/canvas/metal.png'
import norm from 'website/assets/canvas/norm.png'
import rough from 'website/assets/canvas/rough.png'
import { useTheme } from '../hooks/useTheme'
import { contain } from 'website/utils/texture'

export const HomeItem = forwardRef(function HomeItem(
  { geometry, focusPosition, focusScale },
  forwardedRef,
) {
  const mesh = useRef()
  const material = useRef()

  useImperativeHandle(
    forwardedRef,
    () => ({ mesh: mesh.current, material: material.current }),
    [],
  )

  const { colors } = useTheme()
  const texture = useTexture(dragonfly)
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

  const { scale, repeat } = useMemo(() => {
    if (texture && focusScale) {
      const scale = new Vector3(0, 0, 0.8)
      setImageScale(
        0.8,
        0.8,
        texture.source.data.width,
        texture.source.data.height,
        scale,
      )
      const repeatFactor = focusScale.x * 0.075
      const repeat = new Vector2(
        repeatFactor,
        (repeatFactor * scale.y) / scale.x,
      )
      return { repeat, scale }
    }
    return {}
  }, [focusScale, texture])

  return (
    <mesh
      ref={mesh}
      geometry={geometry}
      visible={focusPosition}
      scale={focusScale}
      position={focusPosition}
    >
      <MeshTransmissionMaterial
        ref={material}
        backside={false}
        samples={4}
        thickness={2}
        chromaticAberration={0.025}
        anisotropy={0.05}
        distortion={0.4}
        distortionScale={0.1}
        temporalDistortion={0.3}
        reflectivity={0.1}
        clearcoat={1}
        clearcoatRoughness={1}
        ior={1.03}
        color={'#ccc'}
        iridescence={0.9}
        iridescenceIOR={1}
        iridescenceThicknessRange={[0, 1400]}
        roughness={0.11}
        attenuationColor={colors.slate}
        attenuationDistance={90}
        sheen={1}
        sheenColor={colors.slate}
      />
      <mesh scale={0.7}>
        <meshStandardMaterial
          map={texture}
          emissiveMap={texture}
          emissive={'#fff'}
          emissiveIntensity={0.9}
          side={DoubleSide}
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
