import { useContext, useEffect } from 'react'
import { TargetItemContext } from './TargetItemContext'

export const useTargetItems = (items) => {
  const { targetItems, setTargetItems } = useContext(TargetItemContext)

  useEffect(() => {
    if (items) {
      setTargetItems(items)
    }
  }, [items, setTargetItems])

  return targetItems
}
