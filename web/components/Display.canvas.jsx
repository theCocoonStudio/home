import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { CanvasMaterial } from 'web/components/CanvasMaterial.canvas'
import { BacklitMaterial } from 'web/components/BacklitMaterial.canvas'
import { MetalMaterial } from 'web/components/MetalMaterial.canvas'
import { MeshTransmissionMaterial, Text, useTexture } from '@react-three/drei'
import cloudsUrl from 'public/clouds.jpg'
import dragonflyUrl from 'public/dragonfly.jpeg'
import kitesUrl from 'public/kites.jpg'
import spiderUrl from 'public/dragonfly2.jpeg'
import { FrontSide } from 'three'
import { Bloom, GodRays } from '@react-three/postprocessing'
import Font from 'web/public/fonts/Anonymous_Pro/AnonymousPro-Regular.ttf'

export const Display = forwardRef(function Display(
  {
    setEffects,
    screenFactor = 1.007,
    type = 'canvas',
    image = 'dragonfly',
    ...props
  },
  ref,
) {
  const mesh = useRef()
  useImperativeHandle(ref, () => mesh.current, [])
  // TODO useTexture.preload at correct time
  const textures = useTexture([cloudsUrl, dragonflyUrl, kitesUrl, spiderUrl])
  const texture = useMemo(() => {
    const keys = {
      clouds: 0,
      dragonfly: 1,
      kites: 2,
      spider: 3,
    }
    const key = keys[image]
    return textures[key]
  }, [image, textures])
  const { aspect, factor } = useMemo(() => {
    const aspect = texture.source.data.width / texture.source.data.height
    const factor = 0.7
    return { aspect, factor }
  }, [texture.source.data.height, texture.source.data.width])

  useEffect(() => {
    if (type === 'backlit') {
      setEffects(
        <>
          <Bloom intensity={0.005} luminanceThreshold={1} />
          <GodRays
            sun={mesh.current}
            blur
            samples={60} // The number of samples per pixel.
            density={0.96} // The density of the light rays.
            decay={0.9} // An illumination decay factor.
            weight={0.1} // A light ray weight factor.
            exposure={0.3} // A constant attenuation coefficient.
            clampMax={0.5}
          />
        </>,
      )
    } else {
      setEffects(undefined)
    }
  }, [ref, setEffects, type])
  return (
    <group>
      <Text
        font={Font}
        fontSize={0.03}
        anchorX={'right'}
        anchorY={'top'}
        position-x={0.45}
        position-y={0.32}
        position-z={0.05}
      >
        {`dragonfly\ncanvas #001\n${Math.floor(40 * factor * aspect)}" x ${Math.floor(40 * factor)}"`}
      </Text>
      <mesh
        ref={mesh}
        scale={[aspect * factor, factor, 0.05]}
        castShadow
        {...props}
      >
        <boxGeometry args={[1, 1, 1]} />
        {/* <meshStandardMaterial map={spider} shadowSide={FrontSide} /> */}
        {type === 'backlit' && (
          <BacklitMaterial
            map={texture}
            shadowSide={FrontSide}
            aspect={aspect}
            emissiveMap={texture}
            emissive='#fff'
            emissiveIntensity={1}
          />
        )}
        {type === 'canvas' && (
          <CanvasMaterial
            map={texture}
            shadowSide={FrontSide}
            aspect={aspect}
          />
        )}
        {type === 'metal' && (
          <MetalMaterial map={texture} shadowSide={FrontSide} aspect={aspect} />
        )}
      </mesh>
      {type === 'backlit' && (
        <mesh
          scale={[
            screenFactor * aspect * 0.7,
            screenFactor * 0.7,
            screenFactor * 0.05,
          ]}
        >
          <boxGeometry />
          <MeshTransmissionMaterial
            thickness={screenFactor - 1.0}
            chromaticAberration={0.1}
            anisotropicBlur={0.8}
          />
        </mesh>
      )}
    </group>
  )
})
