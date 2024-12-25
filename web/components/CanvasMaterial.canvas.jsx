import { useTexture } from '@react-three/drei'
import ao from 'public/textures/canvas/ao.png'
import metal from 'public/textures/canvas/metal.png'
import norm from 'public/textures/canvas/norm.png'
import rough from 'public/textures/canvas/rough.png'
import { forwardRef } from 'react'
import { RepeatWrapping } from 'three'

export const CanvasMaterial = forwardRef(function CanvasMaterial(
  { children, aspect = 1, repeatFactor = 1, ...props },
  ref,
) {
  const [aoMap, metalnessMap, normalMap, roughnessMap] = useTexture([
    ao,
    metal,
    norm,
    rough,
  ])

  return (
    <meshPhysicalMaterial
      ref={ref}
      aoMap={aoMap}
      aoMap-wrapS={RepeatWrapping}
      aoMap-wrapT={RepeatWrapping}
      aoMap-repeat={[aspect * repeatFactor, repeatFactor]}
      normalMap={normalMap}
      normalMap-wrapS={RepeatWrapping}
      normalMap-wrapT={RepeatWrapping}
      normalMap-repeat={[aspect * repeatFactor, repeatFactor]}
      normalScale={10}
      metalnessMap={metalnessMap}
      metalnessMap-wrapS={RepeatWrapping}
      metalnessMap-wrapT={RepeatWrapping}
      metalnessMap-repeat={[aspect * repeatFactor, repeatFactor]}
      roughnessMap={roughnessMap}
      roughnessMap-wrapS={RepeatWrapping}
      roughnessMap-wrapT={RepeatWrapping}
      roughnessMap-repeat={[aspect * repeatFactor, repeatFactor]}
      metalness={0.4}
      roughness={7}
      {...props}
    >
      {children}
    </meshPhysicalMaterial>
  )
})
