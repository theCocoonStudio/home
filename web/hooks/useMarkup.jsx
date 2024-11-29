import { useContext, useEffect, useMemo } from 'react'
import { MarkupContext } from 'web/context/MarkupContext'

export const useMarkup = (key, pageData) => {
  const { refs, addRef, disposeRef } = useContext(MarkupContext)

  useEffect(() => {
    if (key && typeof pageData === 'object') {
      addRef(key, pageData)
    }
    return () => {
      if (key) {
        disposeRef(key)
      }
    }
  }, [addRef, disposeRef, key, pageData])

  const memoized = useMemo(
    () => ({
      refs,
    }),
    [refs],
  )
  return memoized
}
