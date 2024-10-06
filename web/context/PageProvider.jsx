import { useCallback, useState, useTransition, useMemo } from 'react'
import { PageContext } from './PageContext'

export const PageProvider = ({ children }) => {
  const [isPending, startTransition] = useTransition()
  const [current, setCurrent] = useState(0)
  const [data, setData] = useState({})

  const register = useCallback((key, data) => {
    setData((prev) => ({ ...prev, [key]: data }))
  }, [])

  const dispose = useCallback((key) => {
    setData((prev) => {
      const newData = {}
      for (const property in prev) {
        if (property !== `${key}`) {
          newData[key] = prev[key]
        }
      }
      return newData
    })
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
    () => ({ pageUp, pageDown, current, isPending, dispose, register, data }),
    [isPending, current, pageDown, pageUp, dispose, register, data],
  )

  return <PageContext.Provider value={context}>{children}</PageContext.Provider>
}
