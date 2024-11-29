import { Suspense, useCallback, useState, useMemo, useRef } from 'react'
import { MarkupContext } from './MarkupContext'
import { ControlsContext } from './ControlsContext'
import { GlobalStateContext } from './GlobalStateContext'
import { ShowcaseProvider } from 'web/pages/Showcase/context/ShowcaseProvider'
import { ThemeContext } from './ThemeContext'
import { useCreateStore } from 'leva'
import { Loader } from 'web/components/Loader'

export const ContextProvider = ({ children, theme }) => {
  // global state
  const [app, setApp] = useState('showcase')
  const [ready, setReady] = useState(false)

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
      app,
      ready,
    }),
    [app, ready],
  )
  // global setState
  const setState = useMemo(
    () => ({
      app: setApp,
      ready: setReady,
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

  // global ready state
  const onReady = useCallback(() => setReady(true), [])

  return (
    <>
      <ControlsContext.Provider value={storeContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          <MarkupContext.Provider value={refsValue}>
            <GlobalStateContext.Provider value={globalStateValue}>
              <ShowcaseProvider>
                <Suspense fallback={null}>{children}</Suspense>
              </ShowcaseProvider>
            </GlobalStateContext.Provider>
          </MarkupContext.Provider>
        </ThemeContext.Provider>
      </ControlsContext.Provider>
      <Loader onReady={onReady} />
    </>
  )
}
