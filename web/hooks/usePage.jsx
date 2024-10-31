import { useContext, useEffect, useMemo } from 'react'
import { PageContext } from 'web/context/PageContext'

export const usePage = (key, pageData) => {
  const { theme, refs, addRef, disposeRef, state, setState } =
    useContext(PageContext)

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
      theme,
      refs,
      state,
      setState,
    }),
    [refs, setState, state, theme],
  )
  return memoized
}
