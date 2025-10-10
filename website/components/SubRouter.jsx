import pagesConfig from 'website/pages'
import { useParams } from 'react-router'
import { WrongWay } from './WrongWay'
import { Layout } from 'website/components/Layout'

export const SubRouter = () => {
  const { '*': splat } = useParams()
  const config = splat === '' ? pagesConfig['home'] : pagesConfig[splat]
  return typeof config === 'undefined' ? (
    <WrongWay />
  ) : (
    <Layout config={config} />
  )
}
