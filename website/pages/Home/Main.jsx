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
    style: { itemSizePx, titleHeight },
  },
  showLightbox,
  setShowLightbox,
}) {
  const {
    lengths: { atomicPadding },
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
        section === 'preScroll' ? undefined : { cursor: 'pointer' },
        styles.title,
      ),
    [section],
  )

  const { style: subStyle, className: subClass } = useMemo(
    () => raleway(400, false, undefined, styles.subtitle),
    [],
  )

  const { style: descStyle, className: descClass } = useMemo(
    () => raleway(400, false, undefined, styles.description),
    [],
  )

  const { style: buttonStyle, className: buttonClass } = useMemo(
    () => raleway(600, false, undefined, styles.button),
    [],
  )

  const { style: photoButtonStyle, className: photoButtonClass } = useMemo(
    () => raleway(600, false, undefined, styles.photoButton),
    [],
  )

  const itemDescStyle = useMemo(
    () => ({
      width: `${itemSizePx}px`,
      maxHeight: `${itemSizePx}px`,
    }),
    [itemSizePx],
  )

  const itemDescContainerStyle = useMemo(
    () => ({
      width: `${itemSizePx}px`,
      height: `${itemSizePx}px`,
      transform: `translate(${4 * atomicPadding}px, calc(-50% + ${titleHeight / 2}px))`,
    }),
    [atomicPadding, itemSizePx, titleHeight],
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
      <div className={subClass} id={subtitle}>
        <h2 style={subStyle}>software and stuff</h2>
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
          <h1 className='raleway'></h1>
          <h3 className='raleway'></h3>
          <p className='raleway'></p>
          <div className={styles.accent} />
          <button className={buttonClass} style={buttonStyle}>
            read more
          </button>
        </div>
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
