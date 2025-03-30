import { useMemo, useState } from 'react'
import { ScrollContext } from './ScrollContext'

export const ScrollProvider = ({ children }) => {
  const [scroll, setScroll] = useState()
  const [events, setEvents] = useState({})

  const value = useMemo(
    () => ({ scroll, setScroll, events, setEvents }),
    [events, scroll],
  )

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  )
}
