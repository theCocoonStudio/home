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
import {
  CurvePath,
  EllipseCurve,
  LineCurve,
  Vector2,
  Vector3,
  Vector4,
} from 'three'
import { usePointer } from 'website/hooks/usePointer'
import { damp, damp3 } from 'maath/easing'
import { createSphereTwistBox } from '../utils/geometry'
import { useTheme } from '../hooks/useTheme'

export const DragOrb = forwardRef(function DragOrb(
  { orbSize = 90, forceSize = 1, forceFactor = 1, range = [0.01, 0.19] },
  forwardedRef,
) {
  const Geometry = useMemo(() => {
    const geometry = createSphereTwistBox()
    return geometry
  }, [])

  useEffect(() => () => {
    Geometry.dispose()
  })

  const {
    lengths: { navHeight, footerHeight },
  } = useTheme()

  const group = useRef()
  const mesh = useRef()

  const { setPointer } = usePointer()

  const camera = useThree(({ camera }) => camera)

  const prevCenter = useRef(new Vector2(0, 0))
  const centerDiff = useRef(new Vector2(0, 0))

  const scale = useRef(new Vector3(1.0, 1.0, 1.0))
  const orbPosition = useRef(new Vector3(0, 0, 0))

  const line1 = useRef(new LineCurve(new Vector2(), new Vector2()))
  const line2 = useRef(new LineCurve(new Vector2(), new Vector2()))
  const arc = useRef(new EllipseCurve())
  const path = useRef(new CurvePath())

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
      // orb scroll-path
      const _radius =
        0.5 * Math.min(max.x - min.x, max.y - min.y) -
        (navHeight + footerHeight) / ppwu.y
      line1.current.v2.setY(-_radius)
      line2.current.v1.setY(-_radius)
      arc.current.xRadius = _radius
      arc.current.yRadius = _radius
      arc.current.aStartAngle = 2 * (3 / 4) * Math.PI
      arc.current.aEndAngle = 2 * (3 / 4) * Math.PI + 2 * Math.PI
      path.current.curves = [line1.current, arc.current, line2.current]
    },
    [footerHeight, navHeight, orbSize],
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

  const drag = useRef(new Vector3(0, 0, 0))
  const morphTargetInfluences = useRef([0, 0])
  const twist = useRef(true)

  useEffect(() => {
    drag.current.z = mesh.current.scale.z / 2
  }, [])

  useFrame(({ clock }, delta) => {
    damp3(group.current?.position, drag.current, 0.1, delta)

    damp(
      morphTargetInfluences.current,
      1,
      twist.current ? 0.5 + 0.5 * Math.sin(clock.getElapsedTime()) : 0,
      0.1,
      delta,
    )
  })

  const scrollCallback = useCallback(
    (state, delta, scroll) => {
      // go right
      const offset = scroll.range(...range)
      const visible = scroll.visible(...range)
      const point = path.current.getPointAt(offset)
      twist.current = !visible && offset < range[1] ? true : false
      damp3(
        mesh.current?.position,
        [point.x, point.y, mesh.current?.position.z],
        0.0,
        delta,
      )
      damp3(
        mesh.current?.rotation,
        [Math.PI * offset, Math.PI * offset, 2 * Math.PI * offset],
        0.15,
        delta,
      )

      if (offset > 0 && visible) {
        morphTargetInfluences.current[0] = offset
      }
    },
    [range],
  )

  useImperativeHandle(
    forwardedRef,
    () => ({
      forceCallback,
      boundsCallback,
      scrollCallback,
    }),
    [forceCallback, boundsCallback, scrollCallback],
  )

  return (
    <DragControls
      autoTransform={false}
      onDrag={(localMatrix) => {
        drag.current
          .setFromMatrixPosition(localMatrix)
          .setZ((mesh.current?.scale.z / 2) * Math.sqrt(2))
      }}
      onDragEnd={() => {
        drag.current.set(0, 0, (mesh.current?.scale.z / 2) * Math.sqrt(2))
      }}
      dragConfig={{
        preventScroll: true,
      }}
    >
      <group ref={group} position-z={drag.current.z}>
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
            /* simplify */
          />
        </mesh>
      </group>
    </DragControls>
  )
})
