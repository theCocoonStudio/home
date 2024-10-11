import { useCallback, useState, useTransition, useMemo, useRef } from 'react'
import { PageContext } from './PageContext'

export const PageProvider = ({ children, theme }) => {
  const [isPending, startTransition] = useTransition()
  const [current, setCurrent] = useState(0)
  const data = useRef({ theme })

  const register = useCallback((key, componentData) => {
    data.current = { ...data.current, [key]: componentData }
  }, [])

  const dispose = useCallback((key) => {
    delete data.current[key]
  }, [])

  const pageUp = useCallback(
    (e) => {
      if (e) {
        e.stopPropagation()
      }

      startTransition(() => {
        setCurrent((current) => (current + 1) % Object.keys(data).length)
      })
    },
    [data],
  )

  const pageDown = useCallback(
    (e) => {
      if (e) {
        e?.stopPropagation()
      }

      startTransition(() => {
        setCurrent((current) => (current - 1) % Object.keys(data).length)
      })
    },
    [data],
  )

  const context = useMemo(
    () => ({
      pageUp,
      pageDown,
      current,
      isPending,
      dispose,
      register,
      data,
    }),
    [isPending, current, pageDown, pageUp, dispose, register],
  )

  return <PageContext.Provider value={context}>{children}</PageContext.Provider>
}
