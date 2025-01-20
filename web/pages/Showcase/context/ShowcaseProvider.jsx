import { ShowcaseContext } from './ShowcaseContext'
import { useEffect, useMemo, useRef, useState, useTransition } from 'react'
import { useGlobalState } from 'web/hooks/useGlobalState'
import { useTheme } from '../../../hooks/useTheme'

const showcaseOptions = { count: 5, time: 10, bufferTime: 0.2 }
export const ShowcaseProvider = ({ children }) => {
  const { count, time, bufferTime } = showcaseOptions
  const colorTheme = useTheme()
  // global state
  const {
    state: { ready },
  } = useGlobalState()
  // showcase state
  const [isPending, startTransition] = useTransition()
  const [loaded, setLoaded] = useState(false)
  const [menu, setMenu] = useState(false)
  const [pause, setPause] = useState(true)
  const [pointer, setPointer] = useState(false)
  const [current, setCurrent] = useState(1)
  const [progressColor, setProgressColor] = useState(colorTheme.slate)
  const progressRef = useRef()
  const [setElapsedFunc, setSetElapsedFunc] = useState()

  const state = useMemo(
    () => ({
      isPending,
      menu,
      pause,
      pointer,
      current,
      loaded,
      progressColor,
      progressRef,
      count,
      time,
      bufferTime,
      setElapsedFunc,
    }),
    [
      bufferTime,
      count,
      current,
      isPending,
      loaded,
      menu,
      pause,
      pointer,
      progressColor,
      setElapsedFunc,
      time,
    ],
  )
  const setState = useMemo(
    () => ({
      menu: (newState) => startTransition(() => setMenu(newState)),
      pause: (newState) => startTransition(() => setPause(newState)),
      pointer: (newState) => startTransition(() => setPointer(newState)),
      current: (newState) => startTransition(() => setCurrent(newState)),
      progressColor: (newState) =>
        startTransition(() => setProgressColor(newState)),
      loaded: setLoaded,
      elapsedFunc: (func) => {
        setSetElapsedFunc(() => func)
      },
      progressRef: (ref) => {
        progressRef.current = ref.current
      },
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
  useEffect(() => {
    setPause(!ready)
  }, [ready])

  return (
    <ShowcaseContext.Provider value={showcaseState}>
      {children}
    </ShowcaseContext.Provider>
  )
}
