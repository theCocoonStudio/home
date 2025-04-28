import { useContext, useMemo } from 'react'
import { ScrollEventContext } from './ScrollEventContext'

export const useScrollEvent = (key) => {
  const { currentRangeKey } = useContext(ScrollEventContext)

  const value = useMemo(() => {
    if (key) {
      if (currentRangeKey === key) {
        return true
      } else {
        return false
      }
    } else {
      return currentRangeKey
    }
  }, [currentRangeKey, key])

  return value
}
