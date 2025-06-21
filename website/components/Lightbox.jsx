import { useMemo } from 'react'
import styles from 'website/styles/Lightbox.module.css'
import { useTheme } from '../hooks/useTheme'

export const LightBox = ({ children, showLightbox, setShowLightbox }) => {
  const {
    lengths: { atomicPadding, navHeight, footerHeight },
  } = useTheme()

  const style = useMemo(
    () => ({
      opacity: showLightbox ? 1 : 0,
      pointerEvents: showLightbox ? 'auto' : 'none',
      paddingRight: `calc(8 * ${atomicPadding}px)`,
      paddingLeft: `calc(8 * ${atomicPadding}px)`,
      paddingTop: `${navHeight}px`,
      paddingBottom: `${footerHeight}px`,
    }),
    [atomicPadding, footerHeight, navHeight, showLightbox],
  )
  const exitStyle = useMemo(
    () => ({
      right: `calc(8 * ${atomicPadding}px)`,
      top: `${navHeight / 2}px`,
    }),
    [atomicPadding, navHeight],
  )
  return (
    <div className={styles.container} style={style}>
      <div
        className={styles.exit}
        style={exitStyle}
        onClick={() => setShowLightbox(false)}
      />
      {children}
    </div>
  )
}
