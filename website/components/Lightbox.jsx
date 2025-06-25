import { useMemo } from 'react'
import styles from 'website/styles/Lightbox.module.css'
import { useTheme } from '../hooks/useTheme'

export const LightBox = ({ children, showLightbox, setShowLightbox }) => {
  const {
    colors: { white, black },
    lengths: { atomicPadding, navHeight, footerHeight },
  } = useTheme()

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
        onClick={() => setShowLightbox(false)}
      >
        <svg
          viewBox='0,0,48,48'
          xmlns='http://www.w3.org/2000/svg'
          width='60'
          height='60'
          strokeWidth='3'
          transform='rotate(0) matrix(1 0 0 1 0 0)'
        >
          <g
            fill='none'
            stroke={black}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='3'
          >
            <path d='M42 42L33 33M6 6L15 15L6 6Z'></path>
            <path d='M6 42L15 33M42 6L33 15L42 6Z'></path>
            <path
              fill={white}
              d='M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z'
            ></path>
          </g>
        </svg>
      </div>
      {children}
    </div>
  )
}
