import styles from 'website/styles/Nav.module.css'
import { useTheme } from 'website/hooks/useTheme'
import { useMemo } from 'react'
import MenuIcon from '@tabler/icons-react/dist/esm/icons/IconCategoryFilled'

export const Nav = () => {
  const {
    lengths: { navHeight, atomicPadding },
    colors: { white },
  } = useTheme()

  const navStyles = useMemo(
    () => ({
      height: navHeight,
    }),
    [navHeight],
  )
  const menuStyles = useMemo(
    () => ({
      right: `calc(6 * ${atomicPadding})`,
    }),
    [atomicPadding],
  )
  return (
    <div className={`${styles.nav}`} style={navStyles}>
      <MenuIcon
        className={`${styles.menu}`}
        style={menuStyles}
        size={60}
        color={white}
      />
    </div>
  )
}
