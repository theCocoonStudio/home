import { forwardRef, memo, useEffect, useImperativeHandle, useRef } from 'react'

import { RepeatWrapping } from 'three'
import { MeshReflectorMaterial, useTexture } from '@react-three/drei'
import normal from 'website/assets/carbon/normal.png'

const _Floor = forwardRef(function Floor({ floorY }, forwardedRef) {
  // refs
  const floor = useRef()

  // imperative handle
  useImperativeHandle(forwardedRef, () => floor.current, [])

  // textures
  const texture = useTexture(normal)

  useEffect(() => {
    const repeat = 35
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.repeat.set(repeat, repeat)
    return () => {
      texture.dispose()
    }
  }, [texture])

  return (
    <mesh
      visible={typeof floorY !== 'undefined'}
      ref={floor}
      rotation-x={-Math.PI / 2}
      scale={200}
      position-z={-80}
      position-y={floorY && floorY - 0.001}
    >
      <planeGeometry args={[1, 1]} />
      <MeshReflectorMaterial
        blur={[300, 200]}
        resolution={1024}
        mixBlur={0.9}
        mixStrength={400}
        roughness={0.99}
        mirror={1}
        depthScale={1.5}
        /* depthToBlurRatioBias={0.3} */
        minDepthThreshold={0.2}
        maxDepthThreshold={10}
        color={'#111'}
        metalness={0.75}
        normalMap={texture}
        normalScale={8}
      />
    </mesh>
  )
})
export const Floor = memo(_Floor)
