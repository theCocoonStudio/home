import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ResizeEventContext } from './ResizeEventContext'

export const ResizeEventProvider = ({ children }) => {
  const [entries, setEntries] = useState([])
  const refs = useRef([]) // make sure unsubscribing doesn't remove listener for other consumers (i.e. keep consumer count for each ref and check before subscribing/unsubscribing)
  const callback = useCallback((rawEntries) => {
    const targets = []
    for (const entry of rawEntries) {
      targets.push(entry.target)
    }
    setEntries(targets)
  }, [])
  const observer = useMemo(() => new ResizeObserver(callback), [callback])

  const subscribe = useCallback(
    (element, options) => {
      // direct reference to element
      const ref =
        typeof element === 'string' ? document.getElementById(element) : element
      // whether element is subcribed by a previous consumer
      const toObserve = !refs.current.includes(ref)
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
        typeof element === 'string' ? document.getElementById(element) : element
      // unconditionally remove subscription reference
      const index = refs.current.indexOf(ref)
      if (index < 0) {
        throw new Error(
          'ResizeEventProvider: unsubscribe(element) invocation error - no active subscriptions recorded.',
        )
      } else {
        if (refs.current.length > 0) {
          refs.current.splice(index, 1)
        }
      }
      // conditionally unobserve element if no active subscriptions remain
      const toUnobserve = !refs.current.includes(ref)
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
