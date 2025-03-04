import { useContext, useEffect, useMemo } from 'react'
import { ResizeEventContext } from '../context/ResizeEventContext'

export const useResizeEvent = (
  element,
  callback,
  { resizeObserverOptions: { box } = {}, resizeDeps } = {},
) => {
  const { entries, subscribe, unsubscribe } = useContext(ResizeEventContext)

  // get element
  const elementRef = useMemo(
    () =>
      typeof element === 'string' ? document.getElementById(element) : element,
    [element],
  )

  // subscribe/unsubscribe element
  useEffect(() => {
    if (elementRef) {
      subscribe(elementRef, box)
    }
    return () => {
      if (elementRef) {
        unsubscribe(elementRef)
      }
    }
  }, [elementRef, box, subscribe, unsubscribe])

  // subscribe/unsubscribe resize deps
  useEffect(() => {
    resizeDeps?.forEach((depRef) => {
      subscribe(depRef, box)
    })

    return () => {
      resizeDeps?.forEach((depRef) => {
        unsubscribe(depRef)
      })
    }
  }, [box, resizeDeps, subscribe, unsubscribe])

  // run callback on element resize and dep resize
  useEffect(() => {
    if (entries.includes(elementRef)) {
      callback(elementRef)
    } else {
      resizeDeps?.forEach((depRef) => {
        if (entries.includes(depRef)) {
          callback(elementRef)
          return
        }
      })
    }
  }, [callback, elementRef, entries, resizeDeps])
}
