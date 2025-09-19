import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ResizeEventContext } from './ResizeEventContext'

export const ResizeEventProvider = ({ children, ready }) => {
  const [size, setSize] = useState({
    width: document.body.clientWidth,
    height: document.body.clientHeight,
  })

  const subscriptions = useRef({})

  const callback = useCallback(() => {
    const newSize = {
      width: document.body.clientWidth,
      height: document.body.clientHeight,
    }
    Object.keys(subscriptions.current).forEach((key) => {
      subscriptions.current[key](newSize)
    })
    setSize(newSize)
  }, [])

  const observer = useMemo(() => new ResizeObserver(callback), [callback])

  // run callback once ready is set
  useEffect(() => {
    if (ready) {
      callback()
    }
  }, [callback, ready])

  // observe
  useEffect(() => {
    observer.observe(document.body)
  }, [observer])

  // disconnect on unmount
  useEffect(() => () => observer.disconnect(), [observer])

  const contextValue = useMemo(
    () => ({
      subscriptions,
      size,
    }),
    [size],
  )

  return (
    <ResizeEventContext.Provider value={contextValue}>
      {children}
    </ResizeEventContext.Provider>
  )
}
