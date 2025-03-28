import { DragControls, Wireframe } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { Vector2, Vector3, Vector4 } from 'three'
import { usePointer } from 'website/hooks/usePointer'
import { damp3 } from 'maath/easing'
import { createSphereTwistBox } from '../utils/geometry'

export const DragOrb = forwardRef(function DragOrb(
  { orbSize = 120, forceSize = 1, forceFactor = 1, zPos = 0 },
  forwardedRef,
) {
  const Geometry = useMemo(() => {
    const geometry = createSphereTwistBox()
    return geometry
  }, [])

  useEffect(() => () => {
    Geometry.dispose()
  })

  const group = useRef()
  const mesh = useRef()

  const { setPointer } = usePointer()

  const camera = useThree(({ camera }) => camera)

  const prevCenter = useRef(new Vector2(0, 0))
  const centerDiff = useRef(new Vector2(0, 0))

  const scale = useRef(new Vector3(1.0, 1.0, 1.0))
  const orbPosition = useRef(new Vector3(0, 0, 0))

  const boundsCallback = useCallback(
    ({ min, max, ppwu }) => {
      // set refs
      scale.current.set(
        (0.5 * orbSize) / ppwu.x,
        (0.5 * orbSize) / ppwu.x,
        (0.5 * orbSize) / ppwu.x,
      )
      orbPosition.current.set(
        min.x + (max.x - min.x) / 2,
        min.y + (max.y - min.y) / 2,
        0,
      )
      mesh.current.position.copy(orbPosition.current)
      mesh.current.scale.copy(scale.current)
    },
    [orbSize],
  )

  const forceCallback = useCallback(() => {
    const { x, y, z } = mesh.current.position
    const position = new Vector4(x, y, z, 1.0)
    const projectionMatrix = camera.projectionMatrix.clone()
    const modelViewMatrix = camera.matrixWorldInverse
      .clone()
      .multiply(mesh.current.matrixWorld.clone())
    const glPosition = position.applyMatrix4(
      projectionMatrix.multiply(modelViewMatrix),
    )
    const center = new Vector2(glPosition.x, glPosition.y)

    centerDiff.current
      .subVectors(center, prevCenter.current)
      .multiplyScalar(forceFactor)
    prevCenter.current.copy(center)

    const pxToCellScaleRadius = orbSize * 1 * forceSize // 0.5 is simulation resolution
    return { center, force: centerDiff.current, radius: pxToCellScaleRadius }
  }, [
    camera.matrixWorldInverse,
    camera.projectionMatrix,
    forceFactor,
    forceSize,
    orbSize,
  ])

  useImperativeHandle(
    forwardedRef,
    () => ({
      forceCallback,
      boundsCallback,
    }),
    [forceCallback, boundsCallback],
  )

  const drag = useRef(new Vector3(0, 0, mesh.current?.scale.z / 2 || 0))
  const toDamp = useRef(true)
  const morphTargetInfluences = useRef([0, 0])

  useFrame(({ clock }, delta) => {
    morphTargetInfluences.current[0] =
      0.5 + 0.5 * Math.sin(clock.getElapsedTime())
    group.current.rotation.x =
      0.5 + 0.5 * 2 * Math.PI * Math.sin(clock.getElapsedTime() / 2)
    group.current.rotation.y =
      0.5 + 0.5 * 2 * Math.PI * Math.sin(clock.getElapsedTime() / 2)
    if (toDamp.current) {
      damp3(group.current?.position, drag.current, 0.1, delta)
    } else {
      group.current?.position.copy(drag.current)
    }
  })

  return (
    <DragControls
      autoTransform={false}
      onDragStart={() => {
        toDamp.current = false
      }}
      onDrag={(localMatrix) => {
        drag.current
          .setFromMatrixPosition(localMatrix)
          .setZ((mesh.current?.scale.z / 2) * Math.sqrt(2))
      }}
      onDragEnd={() => {
        drag.current.set(0, 0, (mesh.current?.scale.z / 2) * Math.sqrt(2))
        toDamp.current = true
      }}
      dragConfig={{
        preventScroll: true,
      }}
    >
      <group ref={group}>
        <mesh
          morphTargetInfluences={morphTargetInfluences.current}
          onPointerDown={() => {
            console.log(mesh.current)
          }}
          ref={mesh}
          onPointerOver={() => {
            setPointer(true)
          }}
          onPointerOut={() => {
            setPointer(false)
          }}
          args={[Geometry]}
        >
          <meshBasicMaterial toneMapped={false} />
          <Wireframe
            fillMix={0}
            fill='white'
            fillOpacity={0}
            thickness={0.4}
            strokeOpacity={1}
            stroke='black'
            squeeze
            squeezeMin={0.15}
            squeezeMax={1.1}
            simplify
          />
        </mesh>
        {/* <ambientLight intensity={20} /> */}
      </group>
    </DragControls>
  )
})
