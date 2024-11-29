import { useContext } from 'react'
import { ShowcaseContext } from 'web/pages/Showcase/context/ShowcaseContext'

export const useShowcase = () => {
  const globalState = useContext(ShowcaseContext)

  return globalState
}
