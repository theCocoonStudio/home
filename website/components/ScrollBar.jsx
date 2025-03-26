import styles from 'website/styles/ScrollBar.module.css'
import { useTheme } from '../hooks/useTheme'
import { useMemo } from 'react'

export const ScrollBar = () => {
  const {
    lengths: { atomicPadding, navHeight },
  } = useTheme()

  const style = useMemo(
    () => ({
      height: `calc(100vh - 2 * ${navHeight}px)`,
      margin: `calc(6 * ${atomicPadding}px) 0`,
    }),
    [atomicPadding, navHeight],
  )
  return (
    <div
      className={`${styles.scrollbar}`}
      style={style}
      id='scroll-container'
    />
  )
}
