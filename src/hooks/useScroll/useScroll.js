import { damp } from 'maath/easing'
import { useCallback } from 'react'

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

  return scrollTo
}
