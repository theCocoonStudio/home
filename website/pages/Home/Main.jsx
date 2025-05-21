import { useMemo } from 'react'
import styles from './Home.styles.module.css'
import { nunito, roboto } from '../../utils/styles'
import { useScrollEvent } from './useScrollEvent'
import { useTheme } from '../../hooks/useTheme'

export const Main = function Main({
  config: {
    sections,
    main: {
      markupIds: {
        title,
        subtitle,
        description: descriptionId,
        itemDescription,
      },
    },
    items: { itemSizePx },
  },
}) {
  const {
    lengths: { atomicPadding },
  } = useTheme()
  const { style, className } = useMemo(
    () => nunito([900, 125], undefined, styles.title),
    [],
  )

  const { style: subStyle, className: subClass } = useMemo(
    () => nunito([300, 100, 440], undefined, styles.subtitle),
    [],
  )

  const { style: descStyle, className: descClass } = useMemo(
    () => roboto([300], undefined, styles.description),
    [],
  )
  const itemDescStyle = useMemo(
    () => ({
      width: `${itemSizePx}px`,
      height: `${itemSizePx}px`,
      transform: `translate(${4 * atomicPadding}px, -50%)`,
    }),
    [atomicPadding, itemSizePx],
  )

  const section = useScrollEvent()
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
        </p>
      </h2>
      <div
        style={itemDescStyle}
        className={`${styles.itemDescription}`}
        id={itemDescription}
      >
        <h1 className='nunito-sans'></h1>
        <h3 className='nunito-sans'></h3>
        <p className='roboto'></p>
      </div>
    </div>
  )
}
