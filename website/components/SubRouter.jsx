import pagesConfig from 'website/pages'
import { useParams } from 'react-router'
import { lazy } from 'react'

const WrongWay = lazy(() => import('./WrongWay'))
const Layout = lazy(() => import('website/components/Layout'))

export const SubRouter = () => {
  const { '*': splat } = useParams()
  const config = splat === '' ? pagesConfig['home'] : pagesConfig[splat]
  return typeof config === 'undefined' ? (
    <WrongWay />
  ) : (
    <Layout config={config} />
  )
}
