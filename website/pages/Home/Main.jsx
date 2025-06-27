import { useCallback, useMemo } from 'react'
import styles from './Home.styles.module.css'
import { raleway, changaOne } from '../../utils/styles'
import { useScrollEvent } from './useScrollEvent'
import { useTheme } from '../../hooks/useTheme'
import { useScroll } from 'src/hooks'

export const Main = function Main({
  scrollContainer,
  config: {
    content: { sections },
    main: {
      markupIds: {
        title,
        subtitle,
        description: descriptionId,
        itemDescription,
        photographyButton,
      },
    },
    style: { sidePaddingFactor, titleHeight },
  },
  showLightbox,
  setShowLightbox,
}) {
  const {
    lengths: { atomicPadding, footerHeight, navHeight },
  } = useTheme()
  const section = useScrollEvent()
  const scrollTo = useScroll(scrollContainer)

  const scrollHome = useCallback(() => {
    scrollTo(0.0)
  }, [scrollTo])

  const { style, className } = useMemo(
    () =>
      changaOne(
        false,
        {
          cursor: section === 'preScroll' ? 'auto' : 'pointer',
          opacity: showLightbox ? 0 : 1,
        },
        styles.title,
      ),
    [section, showLightbox],
  )

  const { style: subContainerStyle, className: subContainerClass } = useMemo(
    () =>
      raleway(
        400,
        false,
        {
          width: `calc(50% - ${2 * sidePaddingFactor * atomicPadding}px)`,
          opacity: showLightbox ? 0 : 1,
        },
        styles.subtitleContainer,
      ),
    [atomicPadding, showLightbox, sidePaddingFactor],
  )

  const { style: descStyle, className: descClass } = useMemo(
    () => raleway(400, false, undefined, styles.description),
    [],
  )

  const { style: buttonStyle, className: buttonClass } = useMemo(
    () => raleway(350, false, undefined, styles.button),
    [],
  )

  const { style: photoButtonStyle, className: photoButtonClass } = useMemo(
    () => raleway(350, false, undefined, styles.photoButton),
    [],
  )

  const itemDescStyle = useMemo(() => ({}), [])

  const itemDescContainerStyle = useMemo(
    () => ({
      top: `calc(${navHeight + titleHeight + 2 * sidePaddingFactor * atomicPadding}px)`,
      bottom: `${footerHeight + 2 * sidePaddingFactor * atomicPadding}px`,
      left: `calc(100% - 61.8%)`,
      right: `0`,
    }),
    [atomicPadding, footerHeight, navHeight, sidePaddingFactor, titleHeight],
  )

  return (
    <div className={styles.main}>
      <h1
        style={style}
        className={className}
        id={title}
        onClick={section === 'preScroll' ? undefined : scrollHome}
      >
        Izzy&nbsp;Erlich
      </h1>
      <br />
      <div
        className={subContainerClass}
        style={subContainerStyle}
        id={subtitle}
      >
        <h2 className={styles.subtitle}>software and stuff</h2>
        <p id={descriptionId} className={descClass} style={descStyle}>
          {sections[section] ? sections[section].description : ''}
          <span className={styles.separator} />
        </p>
      </div>
      <div
        className={`${styles.itemDescriptionContainer}`}
        style={itemDescContainerStyle}
        id={itemDescription}
      >
        <div style={itemDescStyle} className={`${styles.itemDescription}`}>
          <h1 className='changa-one-regular'></h1>
          <h3 className='raleway'></h3>
          <div className='raleway'>
            <p></p>
            <div className={styles.accent} />
          </div>

          <button className={buttonClass} style={buttonStyle}>
            read more
          </button>
        </div>
        <div className={styles.itemDescriptionBackground} />
      </div>
      <button
        className={photoButtonClass}
        style={photoButtonStyle}
        id={photographyButton}
        onClick={() => {
          setShowLightbox(true)
        }}
      >
        view image
      </button>
    </div>
  )
}
