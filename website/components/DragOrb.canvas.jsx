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
import { damp, damp3 } from 'maath/easing'
import { createSphereTwistBox } from '../utils/geometry'
import { useTheme } from '../hooks/useTheme'

export const DragOrb = forwardRef(function DragOrb(
  {
    orbSize = 90,
    idleOrbSize = 45,
    forceSize = 1,
    forceFactor = 1,
    range0 = [0.01, 0.2 - 0.01],
    range1 = [0.2, 0.3 - 0.2],
  },
  forwardedRef,
) {
  const Geometry = useMemo(() => {
    const geometry = createSphereTwistBox()
    return geometry
  }, [])

  useEffect(
    () => () => {
      Geometry.dispose()
    },
    [Geometry],
  )

  const {
    colors: { black },
    lengths: { navHeight, footerHeight },
  } = useTheme()

  const group = useRef()
  const mesh = useRef()

  const camera = useThree(({ camera }) => camera)

  const prevCenter = useRef(new Vector2(0, 0))
  const centerDiff = useRef(new Vector2(0, 0))

  const scale = useRef(new Vector3(1.0, 1.0, 1.0))

  const orbPosition = useRef(new Vector3(0, 0, 0))

  const line1 = useRef(new LineCurve(new Vector2(), new Vector2()))
  const line2 = useRef(new LineCurve(new Vector2(), new Vector2()))
  const line3 = useRef(new LineCurve(new Vector2(), new Vector2()))
  const line4 = useRef(new LineCurve(new Vector2(), new Vector2()))
  const line5 = useRef(new LineCurve(new Vector2(), new Vector2()))
  const arc = useRef(new EllipseCurve())
  const path = useRef(new CurvePath())
  const path1 = useRef(new CurvePath())

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
      // orb scroll-path range 0
      const _radius =
        0.5 * Math.min(max.x - min.x, max.y - min.y) -
        (navHeight + footerHeight) / ppwu.y
      line1.current.v2.setY(-_radius)
      line2.current.v1.setY(-_radius)
      line2.current.v2.setY(max.y - 3 * scale.current.y)
      arc.current.xRadius = _radius
      arc.current.yRadius = _radius
      arc.current.aStartAngle = 2 * (3 / 4) * Math.PI
      arc.current.aEndAngle = 2 * (3 / 4) * Math.PI + 2 * Math.PI
      path.current.curves = [line1.current, arc.current, line2.current]
      // orb scroll-path range 1
      line3.current.v1.setY(max.y - 3 * scale.current.y)
      line3.current.v2.setX(min.x + 4 * scale.current.x)
      line4.current.v1.setX(min.x + 4 * scale.current.x)
      line4.current.v2.setX(max.x - 4 * scale.current.x)
      line5.current.v1.setX(max.x - 4 * scale.current.x)
      line5.current.v2.setY(max.y - 3 * scale.current.y)
      path1.current.curves = [line3.current, line4.current, line5.current]
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
      // choose correct path
      const offset0 = scroll.range(...range0)
      const offset1 = scroll.range(...range1)
      const offset = offset1 > 0 ? offset1 : offset0

      const rotation0 = scroll.curve(...range0)
      const rotation1 = scroll.curve(...range1)
      const rotation = offset1 > 0 ? rotation1 : rotation0

      const _path = offset1 > 0 ? path1 : path
      const point = _path.current.getPointAt(offset)

      // set twist
      twist.current = offset0 < range0[0] || offset1 > 0.99 ? true : false
      // morph
      morphTargetInfluences.current[0] = offset0
      // move

      damp3(
        mesh.current?.position,
        [point.x, point.y, mesh.current?.position.z],
        0.0,
        delta,
      )
      // rotate
      damp3(
        mesh.current?.rotation,
        [
          2 * Math.PI * rotation,
          2 * Math.PI * rotation,
          2 * Math.PI * rotation,
        ],
        0.05,
        delta,
      )
      //scale
      damp3(
        mesh.current?.scale,
        offset1 >= 0.99
          ? scale.current.clone().multiplyScalar(idleOrbSize / orbSize)
          : scale.current,
        offset1 > 0.99 ? 0.15 : 0,
        delta,
      )
    },
    [idleOrbSize, orbSize, range0, range1],
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
        drag.current.setFromMatrixPosition(localMatrix)
      }}
      onDragEnd={() => {
        drag.current.set(0, 0, 0)
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
            document.body.style.cursor = 'pointer'
          }}
          onPointerOut={() => {
            document.body.style.cursor = 'auto'
          }}
          args={[Geometry]}
        >
          <meshBasicMaterial toneMapped={false} />
          <Wireframe
            fillMix={0}
            fill={'white'}
            fillOpacity={0}
            thickness={0.4}
            strokeOpacity={1}
            stroke={black}
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
