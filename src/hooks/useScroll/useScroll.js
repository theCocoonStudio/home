import { damp } from 'maath/easing'
import { useCallback, useMemo } from 'react'
import { clamp } from 'three/src/math/MathUtils.js'

export const useScroll = (el, options = {}) => {
  const scrollTo = useCallback(
    (scrollFactor) => {
      if (el) {
        const { smoothTime = 0.25, maxSpeed, easing, eps = 1.0 } = options
        const scrollLength = el.scrollHeight - el.clientHeight
        const scrollTop = Math.round(scrollFactor * scrollLength)

        const state = {
          prevTime: 0,
          target: scrollTop,
          current: el.scrollTop,
        }

        const dampScroll = (timestamp) => {
          const delta =
            state.prevTime === 0
              ? undefined
              : (timestamp - state.prevTime) / 1000 // ms to s
          state.prevTime = timestamp

          const next = damp(
            state,
            'current',
            state.target,
            smoothTime,
            delta,
            maxSpeed,
            easing,
            eps,
          )
          el.scrollTop = state.current

          if (next) {
            requestAnimationFrame(dampScroll)
          }
        }
        requestAnimationFrame(dampScroll)
      }
    },
    [el, options],
  )

  // can pass resize-triggered, declaratively-calculated scrollLength;
  // this prevents length calculation each frame and still work on resizes
  const getOffset = useCallback(
    (scrollLength) => {
      const length = scrollLength || el.scrollHeight - el.clientHeight
      return el.scrollTop / length
    },
    [el],
  )

  const getClampedOffset = useCallback(
    (min, max, scrollLength) => {
      const resolvedMin = min || 0
      const resolvedMax =
        max || scrollLength || el.scrollHeight - el.clientHeight
      const resolvedLength = resolvedMax - resolvedMin

      const scrollTop = clamp(el.scrollTop - resolvedMin, 0, resolvedLength)

      return scrollTop / resolvedLength
    },
    [el],
  )

  const value = useMemo(
    () => ({ scrollTo, getOffset, getClampedOffset }),
    [getClampedOffset, getOffset, scrollTo],
  )
  return value
}
