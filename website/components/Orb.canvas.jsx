import { DragControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { Vector2, Vector4 } from 'three'
import { usePointer } from 'website/hooks/usePointer'

export const Orb = forwardRef(function Orb(
  { radius, forceSize = 1.0, colors, ...props },
  forwardedRef,
) {
  const ref = useRef()

  const [scale, setScale] = useState()

  const boundsCallback = useCallback(
    ({ ppwu }) => {
      setScale(radius / ppwu.x)
    },
    [radius],
  )

  const camera = useThree(({ camera }) => camera)

  const prevCenter = useRef(new Vector2(0, 0))
  const centerDiff = useRef(new Vector2(0, 0))

  const forceCallback = useCallback(() => {
    const { x, y, z } = ref.current.position
    const position = new Vector4(x, y, z, 1.0)
    const projectionMatrix = camera.projectionMatrix.clone()
    const modelViewMatrix = camera.matrixWorldInverse
      .clone()
      .multiply(ref.current.matrixWorld.clone())
    const glPosition = position.applyMatrix4(
      projectionMatrix.multiply(modelViewMatrix),
    )
    const center = new Vector2(glPosition.x, glPosition.y)

    centerDiff.current.subVectors(center, prevCenter.current).multiplyScalar(10)
    prevCenter.current.copy(center)

    const pxToCellScaleRadius = radius * 0.5 * forceSize // 0.5 is simulation resolution
    return { center, force: centerDiff.current, radius: pxToCellScaleRadius }
  }, [camera.matrixWorldInverse, camera.projectionMatrix, forceSize, radius])

  useImperativeHandle(
    forwardedRef,
    () => ({
      boundsCallback,
      forceCallback,
    }),
    [boundsCallback, forceCallback],
  )

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01
      ref.current.rotation.y += 0.01
      ref.current.rotation.z += 0.01
    }
  })

  const { setPointer } = usePointer()
  return (
    scale && (
      <DragControls>
        <mesh
          ref={ref}
          scale={scale}
          onPointerOver={() => {
            setPointer(true)
          }}
          onPointerOut={() => {
            setPointer(false)
          }}
          {...props}
        >
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color={colors.mint} transparent opacity={0.8} />
        </mesh>
      </DragControls>
    )
  )
})
