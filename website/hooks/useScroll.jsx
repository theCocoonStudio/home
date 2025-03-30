import { useContext, useLayoutEffect, useMemo } from 'react'
import { ScrollContext } from '../context/ScrollContext'

export const useScroll = (eventKey, data, isEventData = true) => {
  const { events, setEvents, scroll, setScroll } = useContext(ScrollContext)

  // if isScrollData
  useLayoutEffect(() => {
    // set scroll data
    if (data && !isEventData) {
      setScroll(data)
      // on unmount, remove scroll data
      return () => {
        setScroll(undefined)
      }
    }
  }, [data, isEventData, setScroll])

  // if isEventData
  useLayoutEffect(() => {
    // set event data
    if (eventKey && isEventData && typeof data !== 'undefined') {
      setEvents((prev) => ({ ...prev, [`${eventKey}`]: data }))
      // on unmount, remove key from events
      return () => {
        setEvents((prev) => {
          const { [`${eventKey}`]: _key, ...rest } = prev // eslint-disable-line
          return rest
        })
      }
    }
  }, [data, eventKey, isEventData, setEvents])

  const value = useMemo(
    () =>
      eventKey && typeof data === 'undefined'
        ? events[`${eventKey}`]
        : { scroll, events },
    [data, eventKey, events, scroll],
  )

  return value
}
