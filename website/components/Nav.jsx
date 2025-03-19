import styles from 'website/styles/Nav.module.css'
import { useTheme } from 'website/hooks/useTheme'
import { useMemo } from 'react'
import MenuIcon from '@tabler/icons-react/dist/esm/icons/IconMenu2'
import { View } from '@react-three/drei'
import { Logo } from './Logo.view'

export const Nav = () => {
  const {
    lengths: { navHeight, atomicPadding },
    colors: { black },
  } = useTheme()

  const navStyles = useMemo(
    () => ({
      height: `${navHeight}px`,
    }),
    [navHeight],
  )
  const menuStyles = useMemo(
    () => ({
      right: `calc(8 * ${atomicPadding}px)`,
    }),
    [atomicPadding],
  )
  const logoStyles = useMemo(
    () => ({
      left: `calc(8 * ${atomicPadding}px)`,
    }),
    [atomicPadding],
  )
  return (
    <div className={`${styles.nav}`} style={navStyles}>
      <MenuIcon
        className={`${styles.menu}`}
        style={menuStyles}
        size={70}
        color={black}
        stroke={2}
      />
      <div className={`${styles.logo}`} style={logoStyles}>
        <View index={2} frames={1}>
          <Logo size={40} left={8 * atomicPadding} top={navHeight / 2} />
        </View>
      </div>
    </div>
  )
}
