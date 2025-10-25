import { useContext } from 'react'
import { ScrollContext } from '../context/ScrollContext'

export const useScrollControls = () => {
  const scrollControlsContext = useContext(ScrollContext)
  return scrollControlsContext
}
