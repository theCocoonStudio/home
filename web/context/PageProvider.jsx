import {
  Suspense,
  useCallback,
  useState,
  useTransition,
  useMemo,
  useRef,
} from 'react'
import { PageContext } from './PageContext'
import { ControlsContext } from './ControlsContext'
import { Loader } from 'web/components/Loader'
import { useCreateStore } from 'leva'

export const PageProvider = ({ children, theme }) => {
  const [isPending, startTransition] = useTransition()
  const [loaded, setLoaded] = useState(false)
  const [menu, setMenu] = useState(false)
  const [pause, setPause] = useState(true)
  const [current, setCurrent] = useState(1)

  const refs = useRef({})

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

  const onReady = useCallback(() => setPause(false), [])

  const store1 = useCreateStore()
  const store2 = useCreateStore()
  const store3 = useCreateStore()

  const storeContext = useMemo(
    () => ({
      store1,
      store2,
      store3,
    }),
    [store1, store2, store3],
  )

  return (
    <>
      <PageContext.Provider value={context}>
        <ControlsContext.Provider value={storeContext}>
          <Suspense fallback={null}>{children}</Suspense>
        </ControlsContext.Provider>
      </PageContext.Provider>
      <Loader onReady={onReady} />
    </>
  )
}
