import { useContext, useEffect, useMemo } from 'react'
import { ResizeEventContext } from '../context/ResizeEventContext'
import { generateUUID } from 'three/src/math/MathUtils.js'

export const useResizeEvent = (callback) => {
  const id = useMemo(() => generateUUID(), [])

  const { subscriptions, size } = useContext(ResizeEventContext)

  // subscribe/unsubscribe callback
  useEffect(() => {
    // subscribe callback if present
    if (callback && typeof callback === 'function') {
      subscriptions.current[id] = callback
      // run callback once
      callback(size)
    } else {
      // if no callback function, unsunbscribe
      delete subscriptions.current[id]
    }
  }, [callback, id, size, subscriptions])

  return size
}
