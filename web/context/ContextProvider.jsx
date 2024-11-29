import {
  Suspense,
  useCallback,
  useState,
  useTransition,
  useMemo,
  useRef,
} from 'react'
import { MarkupContext } from './MarkupContext'
import { ControlsContext } from './ControlsContext'
import { GlobalStateContext } from './GlobalStateContext'
import { ThemeContext } from './ThemeContext'
import { Loader } from 'web/components/Loader'
import { useCreateStore } from 'leva'

export const ContextProvider = ({ children, theme }) => {
  // global state
  const [isPending, startTransition] = useTransition()
  const [loaded, setLoaded] = useState(false)
  const [menu, setMenu] = useState(false)
  const [pause, setPause] = useState(true)
  const [current, setCurrent] = useState(1)

  // markup
  const refs = useRef({})
  const addRef = useCallback((key, pageData) => {
    refs.current[key] = pageData
  }, [])

  const disposeRef = useCallback((key) => {
    delete refs.current[key]
  }, [])

  // global state
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
  // global setState
  const setState = useMemo(
    () => ({
      menu: (newState) => startTransition(() => setMenu(newState)),
      pause: (newState) => startTransition(() => setPause(newState)),
      current: (newState) => startTransition(() => setCurrent(newState)),
      loaded: setLoaded,
    }),
    [],
  )
  // controls
  const store1 = useCreateStore()
  const store2 = useCreateStore()
  const store3 = useCreateStore()

  // memoized context values
  const refsValue = useMemo(
    () => ({
      addRef,
      disposeRef,
      refs: refs.current,
    }),
    [addRef, disposeRef],
  )

  const globalStateValue = useMemo(
    () => ({
      state,
      setState,
    }),
    [setState, state],
  )

  const themeContextValue = useMemo(
    () => theme,

    [theme],
  )

  const storeContextValue = useMemo(
    () => ({
      store1,
      store2,
      store3,
    }),
    [store1, store2, store3],
  )

  const onReady = useCallback(() => setPause(false), [])
  return (
    <>
      <ControlsContext.Provider value={storeContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          <MarkupContext.Provider value={refsValue}>
            <GlobalStateContext.Provider value={globalStateValue}>
              <Suspense fallback={null}>{children}</Suspense>
            </GlobalStateContext.Provider>
          </MarkupContext.Provider>
        </ThemeContext.Provider>
      </ControlsContext.Provider>
      <Loader onReady={onReady} />
    </>
  )
}
