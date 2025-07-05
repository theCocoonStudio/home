import { useMemo, useState } from 'react'
import { MenuContext } from './MenuContext'

export const MenuProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)

  const value = useMemo(
    () => ({
      showMenu,
      setShowMenu,
    }),
    [showMenu],
  )
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}
