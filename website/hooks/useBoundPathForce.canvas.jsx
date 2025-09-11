import { useCallback, useEffect, useMemo, useRef } from 'react'
import { BoundPathGenerator } from '../utils/path'
import { Vector2 } from 'three'
import { clamp } from 'three/src/math/MathUtils.js'

export const useBoundPathForce = (padding) => {
  // initialize forceCallback data
  const path = useMemo(() => new BoundPathGenerator(padding), [])
  // update forceCallback data
  useEffect(() => {
    path.updatePadding(padding)
  }, [padding, path])

  // implement forceCallback
  const elapsed = useRef(0.0)
  const applyingForce = useRef(false)
  const randomLength = useRef(0.001)
  const force = useRef(new Vector2())
  const center = useRef(new Vector2())
  const prevCenter = useRef(new Vector2())
  const forceCallback = useCallback(
    (delta) => {
      if (elapsed.current > randomLength.current) {
        force.current.set(0, 0)
        center.current.set(0, 0)
        prevCenter.current.set(0, 0)
        if (applyingForce.current === false) {
          applyingForce.current = true
          elapsed.current = 0.0
          randomLength.current = clamp(Math.random() * 2.0, 0.5, 1.5)
          prevCenter.current.copy(path.newPath().getPoint(0.0))
        } else {
          applyingForce.current = false
          elapsed.current = 0.0
          randomLength.current = clamp(Math.random() * 2.0, 0.3, 1.85)
        }
        return { center: center.current, force: force.current }
      } else {
        if (applyingForce.current === false) {
          force.current.set(0, 0)
          center.current.set(0, 0)
          prevCenter.current.set(0, 0)
          elapsed.current = elapsed.current + delta
          return { center: center.current, force: force.current }
        } else {
          let factor =
            (elapsed.current % randomLength.current) / randomLength.current
          center.current.copy(path.getPoint(factor))
          force.current.subVectors(center.current, prevCenter.current)
          prevCenter.current.copy(center.current)
          elapsed.current = elapsed.current + delta
          return { force: force.current, center: center.current }
        }
      }
    },
    [path],
  )
  return forceCallback
}
