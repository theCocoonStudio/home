import { useContext } from 'react'
import { MenuContext } from 'website/context/MenuContext'

export const useMenu = () => {
  const context = useContext(MenuContext)

  return context
}
