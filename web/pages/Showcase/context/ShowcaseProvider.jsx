import { ShowcaseContext } from './ShowcaseContext'
import { useEffect, useMemo, useState, useTransition } from 'react'
import { useGlobalState } from 'web/hooks/useGlobalState'

export const ShowcaseProvider = ({ children }) => {
  const [isPending, startTransition] = useTransition()
  const [loaded, setLoaded] = useState(false)
  const [menu, setMenu] = useState(false)
  const [pause, setPause] = useState(true)
  const [current, setCurrent] = useState(1)

  const state = useMemo(
    () => ({
      isPending,
      menu,
      pause,
      current,
      loaded,
    }),
    [current, isPending, loaded, menu, pause],
  )
  const setState = useMemo(
    () => ({
      menu: (newState) => startTransition(() => setMenu(newState)),
      pause: (newState) => startTransition(() => setPause(newState)),
      current: (newState) => startTransition(() => setCurrent(newState)),
      loaded: setLoaded,
    }),
    [],
  )

  const showcaseState = useMemo(
    () => ({
      state,
      setState,
    }),
    [setState, state],
  )

  // global ready state behaviour
  const {
    state: { ready },
  } = useGlobalState()

  useEffect(() => {
    setPause(!ready)
  }, [ready])

  return (
    <ShowcaseContext.Provider value={showcaseState}>
      {children}
    </ShowcaseContext.Provider>
  )
}
