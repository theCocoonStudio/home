import { useContext } from 'react'
import { NavigationContext } from 'website/context/NavigationContext'

export const useNavigation = () => {
  const navigate = useContext(NavigationContext)

  return navigate
}
