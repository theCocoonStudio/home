import { useTexture } from '@react-three/drei'
import ao from 'public/textures/plaster/ao.jpg'
import bump from 'public/textures/plaster/bump.jpg'
import color from 'public/textures/plaster/color.jpg'
import disp from 'public/textures/plaster/disp.jpg'
import normal from 'public/textures/plaster/normal.jpg'
import rough from 'public/textures/plaster/rough.jpg'

import { forwardRef } from 'react'
import { RepeatWrapping } from 'three'

export const PlasterMaterial = forwardRef(function PlasterMaterial(
  { ...props },
  ref,
) {
  const [aoMap, bumpMap, map, displacementMap, normalMap, roughnessMap] =
    useTexture([ao, bump, color, disp, normal, rough])

  return (
    <meshStandardMaterial
      ref={ref}
      normalMap={normalMap}
      normalMap-wrapS={RepeatWrapping}
      normalMap-wrapT={RepeatWrapping}
      normalMap-repeat={[5, 5]}
      aoMap={aoMap}
      aoMap-wrapS={RepeatWrapping}
      aoMap-wrapT={RepeatWrapping}
      aoMap-repeat={[5, 5]}
      displacementMap={displacementMap}
      displacementMap-wrapS={RepeatWrapping}
      displacementMap-wrapT={RepeatWrapping}
      displacementMap-repeat={[5, 5]}
      displacementScale={0.1}
      bumpMap={bumpMap}
      bumpMap-wrapS={RepeatWrapping}
      bumpMap-wrapT={RepeatWrapping}
      bumpMap-repeat={[5, 5]}
      map={map}
      map-wrapS={RepeatWrapping}
      map-wrapT={RepeatWrapping}
      map-repeat={[5, 5]}
      {...props}
    />
  )
})
