import { useMemo } from 'react'
import { useTheme } from '../../hooks/useTheme'
import styles from './Home.styles.module.css'
import { nunito } from '../../utils/styles'

export const Main = function Main({ config }) {
  const {
    utilReturn: { style, className },
  } = useTheme('orbitron', 450, undefined, styles.title)

  const { style: subStyle, className: subClass } = useMemo(
    () => nunito([450, 125, 500], undefined, styles.subtitle),
    [],
  )

  return (
    <div className={styles.titleContainer}>
      <h1 style={style} className={className}>
        izzy erlich
      </h1>
      <h2 className={subClass} style={subStyle}>
        desiderata
      </h2>
    </div>
  )
}
