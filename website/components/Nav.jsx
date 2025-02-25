import styles from 'website/styles/Nav.module.css'
import { useTheme } from 'website/hooks/useTheme'
import { useMemo } from 'react'

export const Nav = () => {
  const {
    lengths: { navHeight },
  } = useTheme()

  const dynamicStyles = useMemo(
    () => ({
      height: navHeight,
    }),
    [navHeight],
  )
  return <div className={`${styles.nav}`} style={dynamicStyles}></div>
}
