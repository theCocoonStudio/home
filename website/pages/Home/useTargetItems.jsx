import { useContext, useEffect } from 'react'
import { TargetItemContext } from './TargetItemContext'

export const useTargetItems = (items, key) => {
  const { targetItems, setTargetItems } = useContext(TargetItemContext)

  // set target items with key
  useEffect(() => {
    if (items && key) {
      setTargetItems((prev) => ({ ...prev, [key]: items }))
    }
  }, [items, key, setTargetItems])

  // remove keyed items on unmount or key change
  useEffect(
    () => () => {
      setTargetItems((prev) => {
        const removed = { ...prev }
        delete removed[key]
        return removed
      })
    },
    [key, setTargetItems],
  )
  return targetItems
}
