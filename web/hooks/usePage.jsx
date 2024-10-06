import { useContext, useEffect, useMemo } from 'react'
import { PageContext } from 'web/context/PageContext'

export const usePage = (key, pageData) => {
  const {
    pageUp,
    pageDown,
    page,
    isPending,
    register,
    dispose,
    data,
    current,
  } = useContext(PageContext)

  useEffect(() => {
    register(key, pageData)
    return () => {
      dispose(key)
    }
  }, [dispose, key, pageData, register])

  const memoized = useMemo(
    () => ({
      pageUp,
      pageDown,
      page,
      isPending,
      data,
      current,
    }),
    [current, data, isPending, page, pageDown, pageUp],
  )
  return memoized
}
