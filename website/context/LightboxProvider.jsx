import { useCallback, useMemo, useState } from 'react'
import { LightboxContext } from './LightboxContext'

export const LightboxProvider = ({ children }) => {
  const [showLightbox, setShowLightbox] = useState(false)
  const [onLightboxExitClick, _setOnLightboxExitClick] = useState(() => () => {
    {
      console.log('setting')
      setShowLightbox(false)
    }
  })
  const setOnLightboxExitClick = useCallback((cb) => {
    _setOnLightboxExitClick(() => cb)
  }, [])
  const value = useMemo(
    () => ({
      showLightbox,
      setShowLightbox,
      setOnLightboxExitClick,
      onLightboxExitClick,
    }),
    [onLightboxExitClick, setOnLightboxExitClick, showLightbox],
  )
  return (
    <LightboxContext.Provider value={value}>
      {children}
    </LightboxContext.Provider>
  )
}
