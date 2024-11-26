import { useFrame, useThree } from '@react-three/fiber'
import { damp3, dampE } from 'maath/easing'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Euler, Object3D, Vector2, Vector3, Vector4 } from 'three'
import { setScaleXY } from './helpers'
import { UNITS } from 'src/constants'

export const use2DBounds = (
  obj3DRef,
  {
    trackingElementRef,
    trackingElement = false,
    customCameraRef,
    renderPriority,
    left = 0.5,
    top = 0.5,
    pause = true,
    damp = true,
    damping = {},
    scaleToFitWidth = true,
    geometrySize,
    computePosition,
    computeScale,
    computeRotation,
    margin,
    marginUnits = UNITS.WU,
  },
) => {
  // independent state
  const { smoothTime, delta: customDelta, maxSpeed, easing, eps } = damping
  const { width: reactiveWidth, height: reactiveHeight } = useThree(
    ({ size: { width, height } }) => ({
      width,
      height,
    }),
  )
  const [run, setRun] = useState(true)
  // dependent state
  const prevTrackingDimensions = useRef(new Vector4())
  const iterations = useRef(0)
  const distance = useRef(null)
  const ppwu = useRef(new Vector2())
  const minViewBounds = useRef(new Vector2())
  const maxViewBounds = useRef(new Vector2())
  const minBounds = useRef(new Vector2())
  const maxBounds = useRef(new Vector2())
  const targetWPos = useRef(new Vector3())
  const targetScale = useRef(new Vector3())
  const targetRotation = useRef(new Euler())
  const marginWU = useRef(new Vector4(0.0, 0.0, 0.0, 0.0))
  const resultRef = useRef({
    ppwu: ppwu.current,
    viewBounds: { min: minViewBounds.current, max: maxViewBounds.current },
    bounds: {
      min: minBounds.current,
      max: maxBounds.current,
    },
    targets: {
      position: targetWPos.current,
      scale: targetScale.current,
      rotation: targetRotation.current,
    },
    distance: distance.current,
    margin: marginWU.current,
  })

  // update callbacks
  const off = useCallback(() => {
    setRun(false)
  }, [])

  const on = useCallback(() => {
    setRun(true)
  }, [])
  const setDistance = useCallback((obj3D, camera) => {
    const wPos = new Vector3()
    obj3D.getWorldPosition(wPos)
    camera.worldToLocal(wPos)
    distance.current = Math.abs(wPos.z)
  }, [])

  const setPPWU = useCallback(
    (camera, width, height, element, margin, marginUnits) => {
      // set view bounds
      camera.getViewBounds(
        distance.current,
        minViewBounds.current,
        maxViewBounds.current,
      )
      // set PPWU
      ppwu.current.setX(
        Math.abs(width / (maxViewBounds.current.x - minViewBounds.current.x)),
      )
      ppwu.current.setY(
        Math.abs(height / (maxViewBounds.current.y - minViewBounds.current.y)),
      )

      // set bounds
      if (element) {
        const {
          left,
          top,
          width: elementWidth,
          height: elementHeight,
        } = element.getBoundingClientRect()
        prevTrackingDimensions.current.set(
          elementWidth,
          elementHeight,
          left,
          top,
        )
        const leftOffset = minViewBounds.current.x + left / ppwu.current.x
        const topOffset = maxViewBounds.current.y - top / ppwu.current.y

        minBounds.current.set(
          leftOffset,
          topOffset - elementHeight / ppwu.current.y,
        )
        maxBounds.current.set(
          leftOffset + elementWidth / ppwu.current.x,
          topOffset,
        )
      } else {
        minBounds.current.copy(minViewBounds.current)
        maxBounds.current.copy(maxViewBounds.current)
      }
      //set margin
      marginWU.current.set(0, 0, 0, 0)
      if (margin) {
        marginWU.current.copy(margin)
        if (marginUnits === UNITS.PX) {
          marginWU.current.divideScalar(ppwu.current.x)
        } else {
          const boundsWidth = Math.abs(
            maxBounds.current.x - minBounds.current.x,
          )
          const boundsHeight = Math.abs(
            maxBounds.current.y - minBounds.current.y,
          )

          marginWU.current.set(
            margin.x * boundsHeight,
            margin.y * boundsWidth,
            margin.z * boundsHeight,
            margin.getComponent(3) * boundsWidth,
          )
        }
      }
    },
    [],
  )

  const setTargetWPos = useCallback((camera, left, top, trackingElement) => {
    const _minBounds = trackingElement
      ? minBounds.current
      : minViewBounds.current
    const _maxBounds = trackingElement
      ? maxBounds.current
      : maxViewBounds.current
    const xOffset = Math.abs((_maxBounds.x - _minBounds.x) * left)
    const yOffset = Math.abs((_maxBounds.y - _minBounds.y) * top)
    targetWPos.current.set(_minBounds.x + xOffset, _maxBounds.y - yOffset)
  }, [])

  const computeTargets = useCallback(
    (
      obj3d,
      computePosition,
      computeScale,
      computeRotation,
      camera,
      scaleToFitWidth,
      geometrySize,
    ) => {
      targetScale.current.copy(obj3d.scale)
      targetRotation.current.copy(obj3d.rotation)

      if (typeof computePosition === 'function') {
        const pos = computePosition(obj3d, resultRef.current, camera)
        targetWPos.current.copy(pos)
        resultRef.current.targets.position.copy(pos)
      }
      if (typeof computeScale === 'function' || scaleToFitWidth) {
        const scale = setScaleXY(obj3d, resultRef.current, camera, geometrySize)
        targetScale.current.copy(scale)
        resultRef.current.targets.scale.copy(scale)
        if (typeof computeScale === 'function') {
          const scale = computeScale(
            obj3d,
            resultRef.current,
            camera,
            geometrySize,
          )
          targetScale.current.copy(scale)
          resultRef.current.targets.scale.copy(scale)
        }
      }
      if (typeof computeRotation === 'function') {
        const rot = computeRotation(obj3d, resultRef.current, camera)
        targetRotation.current.copy(rot)
        resultRef.current.targets.rotation.copy(rot)
      }
    },
    [],
  )

  // react engine: imperative updates
  useEffect(() => {
    iterations.current = 0
  }, [
    trackingElementRef,
    trackingElement,
    customCameraRef,
    renderPriority,
    left,
    top,
    pause,
    damp,
    scaleToFitWidth,
    geometrySize,
    computePosition,
    computeScale,
    computeRotation,
    margin,
    marginUnits,
    smoothTime,
    customDelta,
    maxSpeed,
    easing,
    eps,
    reactiveWidth,
    reactiveHeight,
  ])

  // three engine: imperative updates
  useFrame(({ size: { width, height }, camera: fiberCamera }, delta) => {
    if (run) {
      const camera = customCameraRef?.current || fiberCamera
      if (trackingElement && trackingElementRef.current) {
        const {
          width: elementWidth,
          height: elementHeight,
          left: elementLeft,
          top: elementTop,
        } = trackingElementRef.current.getBoundingClientRect()
        if (
          prevTrackingDimensions.current.x !== elementWidth ||
          prevTrackingDimensions.current.y !== elementHeight ||
          prevTrackingDimensions.current.z !== elementLeft ||
          prevTrackingDimensions.current.w !== elementTop
        ) {
          iterations.current = 0
        }
      }
      if (iterations.current < 1 || !pause) {
        if (
          obj3DRef.current instanceof Object3D &&
          (!trackingElement || trackingElementRef.current)
        ) {
          setDistance(obj3DRef.current, camera)
          setPPWU(
            camera,
            width,
            height,
            trackingElement && trackingElementRef.current,
            margin,
            marginUnits,
          )
          setTargetWPos(camera, left, top, trackingElement)
          computeTargets(
            obj3DRef.current,
            computePosition,
            computeScale,
            computeRotation,
            camera,
            scaleToFitWidth,
            geometrySize,
          )
          iterations.current++
        }
      }
      if (
        damp &&
        iterations.current > 0 &&
        obj3DRef.current instanceof Object3D
      ) {
        damp3(
          obj3DRef.current.position,
          [
            targetWPos.current.x,
            targetWPos.current.y,
            obj3DRef.current.position.z,
          ],
          smoothTime,
          customDelta || delta,
          maxSpeed,
          easing,
          eps,
        )
        if (scaleToFitWidth || typeof computeScale === 'function') {
          damp3(
            obj3DRef.current.scale,
            [
              targetScale.current.x,
              targetScale.current.y,
              targetScale.current.z,
            ],
            smoothTime,
            customDelta || delta,
            maxSpeed,
            easing,
            eps,
          )
        }
        if (typeof computeRotation === 'function') {
          dampE(
            obj3DRef.current.rotation,
            targetRotation.current.clone(),
            smoothTime,
            customDelta || delta,
            maxSpeed,
            easing,
            eps,
          )
        }
      }
    }
  }, renderPriority)

  return { results: resultRef.current, off, on }
}
