import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { NavigationContext } from 'website/context/NavigationContext'

export const NavigationProvider = ({ onNavigation, children }) => {
  const _navigate = useNavigate()

  const navigate = useCallback(
    (...args) => {
      onNavigation(...args)
      _navigate(...args)
    },
    [_navigate, onNavigation],
  )
  useEffect(() => {
    const handlePopState = (event) => {
      onNavigation(event)
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [onNavigation])
  return (
    <NavigationContext.Provider value={navigate}>
      {children}
    </NavigationContext.Provider>
  )
}
