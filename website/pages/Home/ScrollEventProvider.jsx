import { useCallback, useMemo, useState, useTransition } from 'react'
import { ScrollEventContext } from './ScrollEventContext'

export const ScrollEventProvider = ({
  config: {
    scroll: { ranges },
  },
  children,
}) => {
  const [isPending, startTransition] = useTransition()
  const [currentRangeKey, setCurrentRangeKey] = useState(Object.keys(ranges)[0])
  const setRange = useCallback((value) => {
    startTransition(() => {
      setCurrentRangeKey(value)
    })
  }, [])

  const memoized = useMemo(
    () => ({ setRange, currentRangeKey }),
    [currentRangeKey, setRange],
  )

  return (
    <ScrollEventContext.Provider value={memoized}>
      {children}
    </ScrollEventContext.Provider>
  )
}
