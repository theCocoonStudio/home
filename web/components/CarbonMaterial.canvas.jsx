import { useTexture } from '@react-three/drei'
import color from 'public/textures/carbon/color.png'
import normal from 'public/textures/carbon/normal.png'
import { forwardRef } from 'react'
import { RepeatWrapping } from 'three'

export const CarbonMaterial = forwardRef(function CarbonMaterial(
  { repeat, ...props },
  ref,
) {
  const [map, normalMap] = useTexture([color, normal])

  return (
    <meshPhysicalMaterial
      ref={ref}
      map={map}
      map-wrapS={RepeatWrapping}
      map-wrapT={RepeatWrapping}
      map-repeat={repeat || [30, 30]}
      normalMap={normalMap}
      normalMap-wrapS={RepeatWrapping}
      normalMap-wrapT={RepeatWrapping}
      normalMap-repeat={repeat || [30, 30]}
      clearcoat={1.0}
      clearcoatRoughness={0.1}
      /* metalness={0.9} */
      roughness={0.5}
      normalScale={[10, 10]}
      {...props}
    />
  )
})
