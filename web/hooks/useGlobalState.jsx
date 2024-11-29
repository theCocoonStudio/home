import { useContext } from 'react'
import { GlobalStateContext } from 'web/context/GlobalStateContext'

export const useGlobalState = () => {
  const globalState = useContext(GlobalStateContext)

  return globalState
}
