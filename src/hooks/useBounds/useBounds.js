import { useFrame } from '@react-three/fiber'
import { damp3, dampE } from 'maath/easing'
import { useCallback, useRef } from 'react'
import { Euler, Object3D, Vector2, Vector3 } from 'three'
import { deepClone, setScale } from './helpers'

export const use2DBounds = (
  obj3DRef,
  {
    trackingElementRef,
    trackingElement = false,
    customCameraRef,
    renderPriority,
    left = 0.5,
    top = 0.5,
    pause = false,
    damp = true,
    damping = {},
    scaleToFitWidth = true,
    computePosition,
    computeScale,
    computeRotation,
  },
) => {
  // independent state
  const { smoothTime, delta: customDelta, maxSpeed, easing, eps } = damping

  // dependent state

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
  const resultRef = useRef({
    ppwu: ppwu.current,
    viewBounds: { min: minViewBounds.current, max: maxViewBounds.current },
    bounds: {
      min: trackingElementRef ? minBounds.current : minViewBounds.current,
      max: trackingElementRef ? maxBounds.current : maxViewBounds.current,
    },
    targets: {
      position: targetWPos.current,
      scale: targetScale.current,
      rotation: targetRotation.current,
    },
    distance: distance.current,
  })
  const returnRef = useRef({})
  // updates
  const setDistance = useCallback((obj3D, camera) => {
    const wPos = new Vector3()
    obj3D.getWorldPosition(wPos)
    camera.worldToLocal(wPos)
    distance.current = Math.abs(wPos.getComponent(2))
  }, [])

  const setPPWU = useCallback((camera, width, height, element) => {
    // set view bounds
    camera.getViewBounds(
      distance.current,
      minViewBounds.current,
      maxViewBounds.current,
    )
    // set PPWU
    ppwu.current.setX(
      Math.abs(
        width /
          (maxViewBounds.current.getComponent(0) -
            minViewBounds.current.getComponent(0)),
      ),
    )
    ppwu.current.setY(
      Math.abs(
        height /
          (maxViewBounds.current.getComponent(1) -
            minViewBounds.current.getComponent(1)),
      ),
    )

    // set bounds
    if (element) {
      const {
        left,
        top,
        width: elementWidth,
        height: elementHeight,
      } = element.getBoundingClientRect()

      const leftOffset =
        minViewBounds.current.getComponent(0) +
        left / ppwu.current.getComponent(0)
      const topOffset =
        maxViewBounds.current.getComponent(1) -
        top / ppwu.current.getComponent(1)

      minBounds.current.set(
        leftOffset,
        topOffset - elementHeight / ppwu.current.getComponent(1),
      )
      maxBounds.current.set(
        leftOffset + elementWidth / ppwu.current.getComponent(0),
        topOffset,
      )
    }
  }, [])

  const setTargetWPos = useCallback((camera, left, top, trackingElement) => {
    const _minBounds = trackingElement
      ? minBounds.current
      : minViewBounds.current
    const _maxBounds = trackingElement
      ? maxBounds.current
      : maxViewBounds.current
    const xOffset = Math.abs(
      (_maxBounds.getComponent(0) - _minBounds.getComponent(0)) * left,
    )
    const yOffset = Math.abs(
      (_maxBounds.getComponent(1) - _minBounds.getComponent(1)) * top,
    )
    targetWPos.current.set(
      _minBounds.getComponent(0) + xOffset,
      _maxBounds.getComponent(1) - yOffset,
    )
  }, [])

  const computeTargets = useCallback(
    (
      obj3d,
      computePosition,
      computeScale,
      computeRotation,
      camera,
      scaleToFitWidth,
    ) => {
      targetScale.current.copy(obj3d.scale)
      targetRotation.current.copy(obj3d.rotation)
      returnRef.current = deepClone(resultRef.current)
      if (typeof computePosition === 'function') {
        const pos = computePosition(obj3d, returnRef.current, camera)
        targetWPos.current.copy(pos)
        resultRef.current.targets.position.copy(pos)
      }
      if (typeof computeScale === 'function' || scaleToFitWidth) {
        const compute =
          typeof computeScale === 'function' ? computeScale : setScale
        const scale = compute(obj3d, returnRef.current, camera)
        targetScale.current.copy(scale)
        resultRef.current.targets.scale.copy(scale)
      }
      if (typeof computeRotation === 'function') {
        const rot = computeScale(obj3d, returnRef.current, camera)
        targetRotation.current.copy(rot)
        resultRef.current.targets.rotation.copy(rot)
      }
    },
    [],
  )

  // three engine: imperative updates
  useFrame(({ size: { width, height }, camera: fiberCamera }, delta) => {
    const camera = customCameraRef?.current || fiberCamera

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
        )
        setTargetWPos(camera, left, top, trackingElement)
        computeTargets(
          obj3DRef.current,
          computePosition,
          computeScale,
          computeRotation,
          camera,
          scaleToFitWidth,
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
          targetWPos.current.getComponent(0),
          targetWPos.current.getComponent(1),
          obj3DRef.current.position.getComponent(2),
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
            targetScale.current.getComponent(0),
            targetScale.current.getComponent(1),
            targetScale.current.getComponent(2),
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
  }, renderPriority)

  return returnRef
}