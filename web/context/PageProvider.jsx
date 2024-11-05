import { useCallback, useState, useTransition, useMemo, useRef } from 'react'
import { PageContext } from './PageContext'

export const PageProvider = ({ children, theme }) => {
  const [isPending, startTransition] = useTransition()

  const [menu, setMenu] = useState(false)
  const [pause, setPause] = useState(false)
  const [current, setCurrent] = useState(1)

  const refs = useRef({})

  const state = useMemo(
    () => ({
      isPending,
      menu,
      pause,
      current,
    }),
    [menu, pause, isPending, current],
  )

  const setState = useMemo(
    () => ({
      menu: (newState) => startTransition(() => setMenu(newState)),
      pause: (newState) => startTransition(() => setPause(newState)),
      current: (newState) => startTransition(() => setCurrent(newState)),
    }),
    [],
  )

  const addRef = useCallback((key, pageData) => {
    refs.current[key] = pageData
  }, [])

  const disposeRef = useCallback((key) => {
    delete refs.current[key]
  }, [])

  const context = useMemo(
    () => ({
      theme,
      addRef,
      disposeRef,
      refs: refs.current,
      state,
      setState,
    }),
    [addRef, disposeRef, setState, state, theme],
  )

  return <PageContext.Provider value={context}>{children}</PageContext.Provider>
}
