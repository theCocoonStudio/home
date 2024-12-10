import { useContext, useEffect, useMemo } from 'react'
import { ResizeEventContext } from '../context/ResizeEventContext'

export const useResizeEvent = (
  element,
  callback,
  { resizeObserverOptions: options } = {},
) => {
  const { entries, subscribe, unsubscribe } = useContext(ResizeEventContext)

  const elementRef = useMemo(
    () =>
      typeof element === 'string' ? document.getElementById(element) : element,
    [element],
  )

  useEffect(() => {
    if (elementRef) {
      subscribe(elementRef, options)
    }
    return () => {
      if (elementRef) {
        unsubscribe(elementRef)
      }
    }
  }, [elementRef, options, subscribe, unsubscribe])

  useEffect(() => {
    if (entries.includes(elementRef)) {
      callback(elementRef)
    }
  }, [entries]) // eslint-disable-line
}
