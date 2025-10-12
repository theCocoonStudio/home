import pagesConfig from 'website/pages'
import { useParams } from 'react-router'
import { lazy, useEffect, useRef, useState } from 'react'

const WrongWay = lazy(() => import('./WrongWay'))
const Layout = lazy(() => import('website/components/Layout'))

export const SubRouter = () => {
  // retrieve config
  const { '*': splat } = useParams()
  const config = splat === '' ? pagesConfig['home'] : pagesConfig[splat]

  // global ready-state
  const [ready, setReady] = useState(false)

  // ref to prev splat
  const prevSplat = useRef()

  // reset global ready-state on page change
  useEffect(() => {
    if (
      typeof prevSplat.current !== 'undefined' &&
      prevSplat.current !== splat
    ) {
      setReady(false)
    }
    return () => {
      prevSplat.current = splat
    }
  }, [splat])

  return typeof config === 'undefined' ? (
    <WrongWay />
  ) : (
    <Layout config={config} ready={ready} setReady={setReady} />
  )
}
