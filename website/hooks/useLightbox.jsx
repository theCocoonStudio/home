import { useContext, useEffect, useMemo } from 'react'
import { LightboxContext } from 'website/context/LightboxContext'

export const useLightbox = (callback) => {
  const {
    showLightbox,
    setShowLightbox,
    setOnLightboxExitClick,
    onLightboxExitClick,
  } = useContext(LightboxContext)

  useEffect(() => {
    if (callback) {
      setOnLightboxExitClick(callback)
    }
  }, [callback, setOnLightboxExitClick])

  const value = useMemo(
    () => ({
      showLightbox,
      setShowLightbox,
      setOnLightboxExitClick,
      onLightboxExitClick,
    }),
    [
      onLightboxExitClick,
      setOnLightboxExitClick,
      setShowLightbox,
      showLightbox,
    ],
  )
  return value
}
