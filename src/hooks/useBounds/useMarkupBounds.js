import { useThree } from '@react-three/fiber'
import { useCallback, useEffect } from 'react'

import {
  getCameraDistance,
  getElementBounds,
  getViewBoundsPPWU,
} from './helpers'
import { Vector2 } from 'three'
import { useResizeEvent } from '../useResizeEvent'

export const useMarkupBounds = (
  {
    target: targetRef,
    element: elementRef,
    callback: compute,
    camera: customCamera,
    pause = false,
  } = {},
  [...dependencies] = [],
) => {
  // independent state
  const { camera: defaultCamera } = useThree(({ camera }) => ({
    camera,
  }))
  const {
    canvas,
    width: canvasWidth,
    height: canvasHeight,
  } = useThree(({ gl: { domElement }, size: { width, height } }) => ({
    canvas: domElement,
    width,
    height,
  }))

  // callback: get latest bounds, optionally compute and set object3D matrix
  const resizeCallback = useCallback(() => {
    const element = elementRef ? elementRef.current : canvas
    if (element && targetRef.current) {
      const contentRect = element.getBoundingClientRect()
      const distance = getCameraDistance(
        targetRef.current,
        customCamera || defaultCamera,
      )

      const viewportVec2 = new Vector2(canvasWidth, canvasHeight)

      const viewBoundsPPWU = getViewBoundsPPWU(
        customCamera || defaultCamera,
        distance,
        viewportVec2,
      )
      const { min, max, ppwu } = getElementBounds(contentRect, viewBoundsPPWU)

      if (typeof compute === 'function') {
        compute({
          target: targetRef.current,
          element,
          contentRect,
          min,
          max,
          ppwu,
        })
      } else {
        throw new Error('useBounds: please include an options.compute argument')
      }
    }
  }, [
    canvas,
    canvasHeight,
    canvasWidth,
    compute,
    customCamera,
    defaultCamera,
    elementRef,
    targetRef,
  ])

  // run callback on element resize
  useResizeEvent(elementRef ? elementRef.current : canvas, resizeCallback)

  /*
   * run callback on:
   * 1. resizeCallback changes: canvas resize, compute function change, target/element ref changes not ref.current), camera change
   * 2. change in passed-in dependencies
   */
  useEffect(() => {
    !pause && resizeCallback()
  }, [pause, resizeCallback, ...dependencies]) // eslint-disable-line
}
