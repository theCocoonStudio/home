import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import { useThree } from '@react-three/fiber'
import { RepeatWrapping, Vector3 } from 'three'
import { MeshReflectorMaterial, useTexture } from '@react-three/drei'
import normal from 'website/assets/carbon/normal.png'

const _Floor = forwardRef(function Floor(
  { positionZ0 = -5, heightProportion0 = 0.5 },
  forwardedRef,
) {
  // refs
  const floor = useRef()

  // reactive three app data
  const stateCallback = useCallback(({ size, viewport, camera }) => {
    return { size, viewport, camera }
  }, [])
  const { size, viewport, camera } = useThree(stateCallback)

  // resize callback
  const resizeCallback = useCallback(() => {
    const { height } = viewport.getCurrentViewport(
      camera,
      new Vector3(0, 0, positionZ0),
      size,
    )
    floor.current.position.setY(height * heightProportion0 * -0.5 - 0.001)
  }, [camera, heightProportion0, positionZ0, size, viewport])

  // imperative handle
  useImperativeHandle(
    forwardedRef,
    () => ({
      resizeCallback,
      floor,
    }),
    [resizeCallback],
  )

  // textures
  const texture = useTexture(normal)

  useEffect(() => {
    const repeat = 70
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.repeat.set(repeat, repeat)
    return () => {
      texture.dispose()
    }
  }, [texture])

  return (
    <mesh ref={floor} rotation-x={-Math.PI / 2} scale={100}>
      <planeGeometry args={[1, 1]} />
      <MeshReflectorMaterial
        blur={[300, 200]}
        resolution={1024}
        mixBlur={0.9}
        mixStrength={180}
        roughness={0.99}
        mirror={1}
        depthScale={1.5}
        /* depthToBlurRatioBias={0.3} */
        minDepthThreshold={0.2}
        maxDepthThreshold={10}
        color={'#111'}
        metalness={0.75}
        normalMap={texture}
        normalScale={4}
      />
    </mesh>
  )
})
export const Floor = memo(_Floor)
