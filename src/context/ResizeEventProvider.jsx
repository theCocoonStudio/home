import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ResizeEventContext } from './ResizeEventContext'

export const ResizeEventProvider = ({ children }) => {
  const [entries, setEntries] = useState([])
  const refs = useRef([]) // make sure unsubscribing doesn't remove listener for other consumers (i.e. keep consumer count for each ref and check before subscribing/unsubscribing)
  const callback = useCallback((rawEntries) => {
    setEntries(rawEntries)
  }, [])
  const observer = useMemo(() => new ResizeObserver(callback), [callback])

  const subscribe = useCallback(
    (element, options) => {
      // direct reference to element
      const ref =
        typeof element === 'string'
          ? document.getElementById(element)
          : element.current
      // whether element is subcribed by a previous consumer
      const toObserve = !refs.current.contains(ref)
      // add subscription unconditionally to keep track of multiple consumers when unsibscribing
      refs.current.push(ref)
      // conditionally observe element if not previously subscribed
      if (toObserve) {
        observer.observe(ref, options)
      }
    },
    [observer],
  )

  const unsubscribe = useCallback(
    (element) => {
      // direct reference to element
      const ref =
        typeof element === 'string'
          ? document.getElementById(element)
          : element.current
      // unconditionally remove subscription reference
      const index = refs.current.indexOf(ref)
      if (index < 0) {
        throw new Error(
          'useResizeEvent: unsubscribe(element) invocation error - no active subscriptions recorded.',
        )
      } else {
        refs.current.splice(index, 1)
      }
      // conditionally unobserve element if no active subscriptions remain
      const toUnobserve = !refs.current.contains(ref)
      if (toUnobserve) {
        observer.unobserve(ref)
      }
    },
    [observer],
  )

  const contextValue = useMemo(
    () => ({
      entries,
      subscribe,
      unsubscribe,
    }),
    [entries, subscribe, unsubscribe],
  )

  useEffect(() => () => observer.disconnect(), [observer])

  return (
    <ResizeEventContext.Provider value={contextValue}>
      {children}
    </ResizeEventContext.Provider>
  )
}
