import { useEffect } from 'react'
import { usePage } from 'website/pages/Home/usePage'

export const useTargetItems = (items, key) => {
  const {
    targetItems: { targetItems, setTargetItems },
  } = usePage()

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
