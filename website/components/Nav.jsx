import styles from 'website/styles/Nav.module.css'
import { useTheme } from 'website/hooks/useTheme'
import { useMemo } from 'react'
import { View } from '@react-three/drei'
import { Logo } from './Logo.view'

export const Nav = ({
  config: {
    nav: { NavItemsComponent, navItemsProps, logoRenderPriority },
  },
}) => {
  const {
    lengths: { navHeight, atomicPadding },
  } = useTheme()

  const navStyles = useMemo(
    () => ({
      height: `${navHeight}px`,
      right: `calc(8 * ${atomicPadding}px)`,
      left: `calc(8 * ${atomicPadding}px)`,
    }),
    [atomicPadding, navHeight],
  )

  const pagesStyles = useMemo(
    () => ({
      columnGap: `calc(2 * ${atomicPadding}px)`,
    }),
    [atomicPadding],
  )

  return (
    <div className={`${styles.nav}`} style={navStyles}>
      <div className={`${styles.logo}`}>
        <View index={logoRenderPriority} frames={1}>
          <Logo size={40} />
        </View>
      </div>
      <div className={`${styles.pages}`} style={pagesStyles}>
        <NavItemsComponent styles={styles} {...navItemsProps} />
      </div>
    </div>
  )
}
