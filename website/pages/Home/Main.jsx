import { useMemo } from 'react'
import styles from './Home.styles.module.css'
import { nunito } from '../../utils/styles'
import { useScrollEvent } from './useScrollEvent'

export const Main = function Main() {
  const { style, className } = useMemo(
    () => nunito([900, 125], undefined, styles.title),
    [],
  )
  const { style: subStyle, className: subClass } = useMemo(
    () => nunito([300, 100, 440], undefined, styles.subtitle),
    [],
  )
  const preScroll = useScrollEvent('preScroll')
  return (
    <div className={styles.main}>
      <h1 style={style} className={className} id='main-title-container'>
        Izzy&nbsp;Erlich
      </h1>
      <br />
      <h2 className={subClass} style={subStyle} id='main-subtitle-container'>
        {preScroll ? 'software developer' : 'SOFTWARE'}
      </h2>
    </div>
  )
}
