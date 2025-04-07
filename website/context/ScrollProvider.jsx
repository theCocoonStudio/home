import { useCallback, useMemo, useRef, useState } from 'react'
import { ScrollContext } from './ScrollContext'

export const ScrollProvider = ({ children }) => {
  const [scroll, setScroll] = useState()
  const [events, setEvents] = useState({})
  const target = useRef({ value: undefined, smoothTime: 0.25 })

  const scrollTo = useCallback(
    (offset, smoothTime = 0.25) => {
      if (scroll) {
        const height = scroll.el.scrollHeight
        const top = Math.floor(height * offset)
        target.current.value = top
        target.current.smoothTime = smoothTime
      }
    },
    [scroll],
  )

  const value = useMemo(
    () => ({ scrollTo, target, scroll, setScroll, events, setEvents }),
    [events, scroll, scrollTo],
  )

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  )
}
