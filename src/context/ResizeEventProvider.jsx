import { useCallback, useMemo, useState } from 'react'
import { ResizeEventContext } from './ResizeEventContext'

export const ResizeEventProvider = ({ children }) => {
  const [entries, setEntries] = useState([])
  const callback = useCallback((rawEntries) => {
    console.log('event')
    setEntries(rawEntries)
  }, [])
  const observer = useMemo(() => new ResizeObserver(callback), [callback])

  const subscribe = useCallback(
    (element, options) => {
      const ref =
        typeof element === 'string'
          ? document.getElementById(element)
          : element.current
      observer.observe(ref, options)
    },
    [observer],
  )

  const unsubscribe = useCallback(
    (element) => {
      const ref =
        typeof element === 'string'
          ? document.getElementById(element)
          : element.current
      observer.unobserve(ref)
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

  return (
    <ResizeEventContext.Provider value={contextValue}>
      {children}
    </ResizeEventContext.Provider>
  )
}
