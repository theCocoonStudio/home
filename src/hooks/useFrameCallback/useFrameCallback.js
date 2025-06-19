import { useThree } from '@react-three/fiber'
import { useCallback } from 'react'

export const useFrameCallback = (defaultCallback) => {
  const get = useThree(({ get }) => get)

  const frame = useCallback(
    (callback) => {
      const cb = callback || defaultCallback
      let time, startTime
      const step = (timestamp) => {
        if (typeof time === 'undefined') {
          // don't run on first frame; set time for first delta
          time = timestamp
          requestAnimationFrame(step)
        } else {
          // set startTime as timestamp of second frame (first frame invoking callback)
          if (typeof startTime === 'undefined') {
            startTime = timestamp
          }
          // compute delta, elapsed
          const delta = timestamp - time
          const elapsed = timestamp - startTime
          // cache timestamp
          time = timestamp
          // invoke callback and conditionally request frame based on return value
          if (cb(get(), delta, elapsed, timestamp)) {
            requestAnimationFrame(step)
          }
        }
      }
      requestAnimationFrame(step)
    },
    [defaultCallback, get],
  )
  return frame
}
