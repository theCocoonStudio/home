import { useMemo } from 'react'
import styles from './Home.styles.module.css'
import { nunito, roboto } from '../../utils/styles'
import { useScrollEvent } from './useScrollEvent'
import { useTheme } from '../../hooks/useTheme'

export const Main = function Main({
  config: {
    content: { sections },
    main: {
      markupIds: {
        title,
        subtitle,
        description: descriptionId,
        itemDescription,
      },
    },
    style: { itemSizePx, titleHeight },
  },
}) {
  const {
    lengths: { atomicPadding },
  } = useTheme()
  const { style, className } = useMemo(
    () => roboto([900], undefined, styles.title),
    [],
  )

  const { style: subStyle, className: subClass } = useMemo(
    () => nunito(300, undefined, styles.subtitle),
    [],
  )

  const { style: descStyle, className: descClass } = useMemo(
    () => nunito(300, undefined, styles.description),
    [],
  )

  const { style: buttonStyle, className: buttonClass } = useMemo(
    () => nunito([600], undefined, styles.button),
    [],
  )

  const itemDescStyle = useMemo(
    () => ({
      width: `${itemSizePx}px`,
      maxHeight: `${itemSizePx}px`,
    }),
    [itemSizePx],
  )
  const section = useScrollEvent()
  const itemDescContainerStyle = useMemo(
    () => ({
      width: `${itemSizePx}px`,
      height: `${itemSizePx}px`,
      transform: `translate(${4 * atomicPadding}px, calc(-50% + ${titleHeight / 2}px))`,
      opacity: section === 'preScroll' ? 0 : undefined,
      pointerEvents: section === 'preScroll' ? 'none' : undefined,
    }),
    [atomicPadding, itemSizePx, section, titleHeight],
  )

  return (
    <div className={styles.main}>
      <h1 style={style} className={className} id={title}>
        Izzy&nbsp;Erlich
      </h1>
      <br />
      <h2 className={subClass} style={subStyle} id={subtitle}>
        {sections[section] ? section.toUpperCase() : 'software developer'}
        <p id={descriptionId} className={descClass} style={descStyle}>
          {sections[section] ? sections[section].description : ''}
          <span className={styles.separator} />
        </p>
      </h2>
      <div
        className={`${styles.itemDescriptionContainer}`}
        style={itemDescContainerStyle}
        id={itemDescription}
      >
        <div style={itemDescStyle} className={`${styles.itemDescription}`}>
          <h1 className='roboto'></h1>
          <h3 className='nunito'></h3>
          <p className='nunito'></p>
          <div className={styles.accent} />
          <button className={buttonClass} style={buttonStyle}>
            read more
          </button>
        </div>
      </div>
    </div>
  )
}
