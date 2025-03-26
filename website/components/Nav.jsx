import styles from 'website/styles/Nav.module.css'
import { useTheme } from 'website/hooks/useTheme'
import { useMemo } from 'react'
import MenuIcon from '@tabler/icons-react/dist/esm/icons/IconMenu2'
import { View } from '@react-three/drei'
import { Logo } from './Logo.view'
import CircleIcon from '@tabler/icons-react/dist/esm/icons/IconCircle'
import CircleIconFilled from '@tabler/icons-react/dist/esm/icons/IconCircleFilled'
import SquareIcon from '@tabler/icons-react/dist/esm/icons/IconSquare'
import SquareIconFilled from '@tabler/icons-react/dist/esm/icons/IconSquareFilled'
import TriangleIcon from '@tabler/icons-react/dist/esm/icons/IconTriangle'
import TriangleIconFilled from '@tabler/icons-react/dist/esm/icons/IconTriangleFilled'
import HexagonIcon from '@tabler/icons-react/dist/esm/icons/IconHexagon'
import HexagonIconFilled from '@tabler/icons-react/dist/esm/icons/IconHexagonFilled'
import { ScrollBar } from './ScrollBar'

const icons = {
  about: TriangleIcon,
  blog: SquareIcon,
  contact: HexagonIcon,
  portfolio: CircleIcon,
  aboutFill: TriangleIconFilled,
  blogFill: SquareIconFilled,
  contactFill: HexagonIconFilled,
  portfolioFill: CircleIconFilled,
}

export const Nav = () => {
  const {
    lengths: { navHeight, atomicPadding },
    colors: { black },
    utilReturn: { className, style },
  } = useTheme(
    'orbitron',
    400,
    ({ lengths: { atomicPadding } }) => ({
      right: `calc(70px + (2 * 8) * ${atomicPadding}px)`,
    }),
    styles.links,
  )

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
      <div className={`${styles.menu}`} style={menuStyles}>
        <MenuIcon size={70} color={black} stroke={2} />
        <ScrollBar icons={icons} />
      </div>
      <div className={`${styles.logo}`} style={logoStyles}>
        <View index={2} frames={1}>
          <Logo size={40} left={8 * atomicPadding} top={navHeight / 2} />
        </View>
      </div>
      <div className={className} style={style}>
        <NavItem label='about' />
        <NavItem label='blog' />
        <NavItem label='portfolio' />
      </div>
    </div>
  )
}

const NavItem = ({ label }) => {
  const Icon = icons[label]
  return (
    <div>
      <div className={styles.icon}>{<Icon size={'100%'} />}</div>
      <div>{label}</div>
    </div>
  )
}
