import { useFrame, useThree } from '@react-three/fiber'
import { dampM } from 'maath/easing'
import { useCallback, useRef } from 'react'

import {
  getCameraDistance,
  getElementBounds,
  getViewBoundsPPWU,
} from './helpers'
import { Vector2 } from 'three'
import { useResizeEvent } from '../useResizeEvent'

export const use2DBounds = (
  obj3D,
  element,
  compute,
  { camera: customCamera, renderPriority, pause = true, damping = {} },
) => {
  // passed-in state
  const { smoothTime, delta: customDelta, maxSpeed, easing, eps } = damping
  // independent state
  const { camera: defaultCamera } = useThree(({ camera }) => camera)
  const {
    canvas,
    width: canvasWidth,
    canvasHeight,
  } = useThree(({ gl: { domElement }, size: { width, height } }) => ({
    canvas: domElement,
    width,
    height,
  }))
  // dependent state
  const targets = useRef({
    matrix: obj3D.matrix,
    min: undefined,
    max: undefined,
    ppwu: undefined,
  })

  // callback
  const resizeCallback = useCallback(
    ({ contentRect }) => {
      const distance = getCameraDistance(obj3D, customCamera || defaultCamera)
      const viewportVec2 = new Vector2(canvasWidth, canvasHeight)
      const viewBoundsPPWU = getViewBoundsPPWU(
        customCamera || defaultCamera,
        distance,
        viewportVec2,
      )
      const { min, max, ppwu } = getElementBounds(contentRect, viewBoundsPPWU)
      targets.current.matrix =
        !pause && typeof compute === 'function'
          ? compute({ min, max, ppwu, contentRect })
          : obj3D.matrix
      targets.current.min = min
      targets.current.max = max
      targets.current.ppwu = ppwu
    },
    [
      canvasHeight,
      canvasWidth,
      compute,
      customCamera,
      defaultCamera,
      obj3D,
      pause,
    ],
  )

  // subscribe to resize event
  useResizeEvent(element || canvas, resizeCallback)

  useFrame((state, delta) => {
    if (damping && typeof compute === 'function' && !pause) {
      dampM(
        obj3D.matrix,
        targets.current.matrix,
        smoothTime,
        customDelta || delta,
        maxSpeed,
        easing,
        eps,
      )
    }
  }, renderPriority)
  return targets
}
