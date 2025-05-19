import { useMemo } from 'react'
import styles from './Home.styles.module.css'
import { nunito, roboto } from '../../utils/styles'
import { useScrollEvent } from './useScrollEvent'

export const Main = function Main({
  config: {
    sections: {
      software: { description },
    },
    main: {
      markupIds: { title, subtitle, description: descriptionId },
    },
  },
}) {
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
  const preScroll = useScrollEvent('preScroll')
  return (
    <div className={styles.main}>
      <h1 style={style} className={className} id={title}>
        Izzy&nbsp;Erlich
      </h1>
      <br />
      <h2 className={subClass} style={subStyle} id={subtitle}>
        {preScroll ? 'software developer' : 'SOFTWARE'}
        <p id={descriptionId} className={descClass} style={descStyle}>
          {description}
        </p>
      </h2>
    </div>
  )
}
