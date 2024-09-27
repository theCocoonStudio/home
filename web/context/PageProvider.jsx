import { useCallback, useState, useTransition, useMemo } from 'react'
import { PageContext } from './PageContext'

export const PageProvider = ({ children, pages }) => {
  const [isPending, startTransition] = useTransition()
  const [page, setPage] = useState(0)

  const pageUp = useCallback(
    (e) => {
      if (e) {
        e.stopPropagation()
      }

      startTransition(() => {
        setPage((page) => (page + 1) % pages.length)
      })
    },
    [pages.length],
  )

  const pageDown = useCallback(
    (e) => {
      if (e) {
        e?.stopPropagation()
      }

      startTransition(() => {
        setPage((page) => (page - 1) % pages.length)
      })
    },
    [pages.length],
  )

  const context = useMemo(
    () => ({ pageUp, pageDown, page, isPending }),
    [isPending, page, pageDown, pageUp],
  )

  return <PageContext.Provider value={context}>{children}</PageContext.Provider>
}
