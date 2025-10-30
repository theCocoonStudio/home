import pagesConfig from 'website/pages'
import { useParams } from 'react-router'
import { lazy, useState } from 'react'

const WrongWay = lazy(() => import('./WrongWay'))
const GlobalProvider = lazy(() => import('website/components/GlobalProvider'))

export const SubRouter = () => {
  // retrieve config
  const { '*': splat } = useParams()
  const config = splat === '' ? pagesConfig['home'] : pagesConfig[splat]

  // global ready-state
  const [ready, setReady] = useState(false)

  return typeof config === 'undefined' ? (
    <WrongWay />
  ) : (
    <GlobalProvider config={config} ready={ready} setReady={setReady} />
  )
}
