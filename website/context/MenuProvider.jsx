import { useMemo, useState } from 'react'
import { MenuContext } from './MenuContext'

export const MenuProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [notification, setNotification] = useState({
    show: false,
    content: '',
  })

  const value = useMemo(
    () => ({
      showMenu,
      setShowMenu,
      notification,
      setNotification,
    }),
    [notification, showMenu],
  )
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}
