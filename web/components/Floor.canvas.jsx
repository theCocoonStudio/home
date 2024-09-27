import { MeshReflectorMaterial, useTexture } from '@react-three/drei'
/* import colorMap from 'public/textures/metal-plate/color.jpg'
import displacementMap from 'public/textures/metal-plate/displacement.jpg'
import metalnessMap from 'public/textures/metal-plate/metalness.jpg'
import normalMap from 'public/textures/metal-plate/normal.jpg'
import roughnessMap from 'public/textures/metal-plate/roughness.jpg' */

export const Floor = ({ ...props }) => {
  /*   const textureProps = useTexture({
    colorMap,
    displacementMap,
    metalnessMap,
    normalMap,
    roughnessMap,
  }) */

  return (
    <mesh receiveShadow {...props}>
      <planeGeometry args={[1, 1]} />
      <MeshReflectorMaterial
        blur={[300, 50]}
        resolution={2048}
        mixBlur={30}
        mixStrength={90}
        roughness={0.9}
        depthScale={0.8}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color='#202020'
        metalness={0.75}
        depthToBlurRatioBias={0.95}
        /* {...textureProps} */
      />
    </mesh>
  )
}
