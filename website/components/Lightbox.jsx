import { useMemo } from 'react'
import styles from 'website/styles/Lightbox.module.css'
import { useTheme } from '../hooks/useTheme'
import { useLightbox } from 'website/hooks/useLightbox'

export const LightBox = ({ children }) => {
  const {
    colors: { white },
    lengths: { atomicPadding, navHeight, footerHeight },
  } = useTheme()

  const { showLightbox, onLightboxExitClick } = useLightbox()

  const style = useMemo(
    () => ({
      backdropFilter: showLightbox ? 'blur(20px)' : 'blur(0px)',
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
        onClick={onLightboxExitClick}
      >
        <svg
          viewBox='0,0,48,48'
          xmlns='http://www.w3.org/2000/svg'
          width={48}
          height={48}
          strokeWidth={3}
          transform='rotate(0) matrix(1 0 0 1 0 0)'
        >
          <g
            fill='none'
            stroke={white}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={3}
          >
            <path d='M8 8L40 40' />
            <path d='M8 40L40 8' />
          </g>
        </svg>
      </div>
      {children}
    </div>
  )
}
