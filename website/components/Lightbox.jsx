import { useCallback, useEffect, useMemo } from 'react'
import styles from 'website/styles/Lightbox.module.css'
import { useTheme } from '../hooks/useTheme'
import { useLightbox } from 'website/hooks/useLightbox'
import ClearIcon from '@mui/icons-material/Clear'

export const LightBox = ({ children }) => {
  const {
    colors: { white },
    lengths: { navHeight },
  } = useTheme()

  const { showLightbox, onLightboxExitClick } = useLightbox()

  const style = useMemo(
    () => ({
      backdropFilter: showLightbox ? 'blur(50px)' : 'blur(0px)',
      opacity: showLightbox ? 1 : 0,
      pointerEvents: showLightbox ? 'auto' : 'none',
    }),
    [showLightbox],
  )
  const exitStyle = useMemo(
    () => ({
      top: `${navHeight / 2}px`,
    }),
    [navHeight],
  )

  const onEscapeKeyDown = useCallback(
    (e) => {
      if (showLightbox) {
        if (e.key === 'Escape' || e.key === 'Esc') {
          onLightboxExitClick()
        }
      }
    },
    [onLightboxExitClick, showLightbox],
  )

  useEffect(() => {
    addEventListener('keydown', onEscapeKeyDown)
    return () => {
      removeEventListener('keydown', onEscapeKeyDown)
    }
  }, [onEscapeKeyDown])
  return (
    <div className={styles.container} style={style}>
      <div
        className={styles.exit}
        style={exitStyle}
        onClick={onLightboxExitClick}
      >
        <ClearIcon color={white} fontSize='inherit' />
      </div>
      {children}
    </div>
  )
}
