import { useContext, useEffect, useLayoutEffect, useRef } from 'react'
import { ResizeEventContext } from '../context/ResizeEventContext'

export const useResizeEvent = (element, callback, options) => {
  const { entries, subscribe, unsubscribe } = useContext(ResizeEventContext)

  const ref = useRef()

  useLayoutEffect(() => {
    ref.current =
      typeof element === 'string'
        ? document.getElementById(element)
        : element.current
  }, [element])

  useEffect(() => {
    subscribe(ref, options)
    return () => {
      unsubscribe(ref)
    }
  }, [element, options, subscribe, unsubscribe])

  useEffect(() => {
    for (const entry of entries) {
      if (entry.target === ref.current) {
        callback(entry)
      }
    }
  }, [callback, entries])
  return ref
}
