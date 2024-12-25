import { useTexture } from '@react-three/drei'
import bump from 'public/textures/brick/bump.jpg'
import roughness from 'public/textures/brick/roughness.jpg'
import diffuse from 'public/textures/brick/diffuse.jpg'
import { forwardRef } from 'react'
import { RepeatWrapping } from 'three'

export const BrickMaterial = forwardRef(function BrickMaterial(
  { ...props },
  ref,
) {
  const [bumpMap, roughnessMap, map] = useTexture([bump, roughness, diffuse])

  return (
    <meshStandardMaterial
      ref={ref}
      map={map}
      map-wrapS={RepeatWrapping}
      map-wrapT={RepeatWrapping}
      map-repeat={[8, 8]}
      bumpMap={bumpMap}
      bumpMap-wrapS={RepeatWrapping}
      bumpMap-wrapT={RepeatWrapping}
      bumpMap-repeat={[8, 8]}
      bumpScale={10}
      roughnessMap={roughnessMap}
      roughnessMap-wrapS={RepeatWrapping}
      roughnessMap-wrapT={RepeatWrapping}
      roughnessMap-repeat={[8, 8]}
      metalness={0.1}
      roughness={20}
      {...props}
    />
  )
})
