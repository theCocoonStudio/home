import pagesConfig from 'website/pages'
import { useParams } from 'react-router'
import { lazy, useLayoutEffect, useRef, useState } from 'react'

const WrongWay = lazy(() => import('./WrongWay'))
const GlobalProvider = lazy(() => import('website/components/GlobalProvider'))

export const SubRouter = () => {
  // retrieve config
  const { '*': splat } = useParams()
  const config = splat === '' ? pagesConfig['home'] : pagesConfig[splat]

  // global ready-state
  const [ready, setReady] = useState(false)

  // reset ready state on page change
  const prevSplat = useRef()
  useLayoutEffect(() => {
    if (
      typeof prevSplat.current !== 'undefined' &&
      prevSplat.current !== splat
    ) {
      document.documentElement.style.setProperty(
        '--reserved-loader-global-transition-speed',
        '0s',
      )
      setReady(false)
    }
    return () => {
      prevSplat.current = splat
    }
  }, [splat])

  return typeof config === 'undefined' ? (
    <WrongWay />
  ) : (
    <GlobalProvider config={config} ready={ready} setReady={setReady} />
  )
}
