import styles from 'website/styles/Nav.module.css'
import { useTheme } from 'website/hooks/useTheme'
import { useMemo } from 'react'
import { View } from '@react-three/drei'
import { Logo } from './Logo.view'
import About from '@tabler/icons-react/dist/esm/icons/IconUser'
import Contact from '@tabler/icons-react/dist/esm/icons/IconAt'
import Services from '@tabler/icons-react/dist/esm/icons/IconHeartHandshake'
import Attribution from '@tabler/icons-react/dist/esm/icons/IconHandLoveYou'
import { useScroll } from '../hooks/useScroll'

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

  const logoStyles = useMemo(
    () => ({
      left: `calc(8 * ${atomicPadding}px)`,
    }),
    [atomicPadding],
  )
  const pagesStyles = useMemo(
    () => ({
      right: `calc(8 * ${atomicPadding}px)`,
      columnGap: `calc(2 * ${atomicPadding}px)`,
    }),
    [atomicPadding],
  )

  const {
    events: { aboutSection },
  } = useScroll()
  return (
    <div className={`${styles.nav}`} style={navStyles}>
      <div className={`${styles.logo}`} style={logoStyles}>
        <View index={2} frames={1}>
          <Logo size={40} left={8 * atomicPadding} top={navHeight / 2} />
        </View>
      </div>
      <div className={`${styles.pages}`} style={pagesStyles}>
        <div>
          <About size={45} color={black} stroke={2} />
          {aboutSection && <div className={styles.active} />}
        </div>
        <div>
          <Contact size={45} color={black} stroke={2} />
        </div>
        <div>
          <Services size={45} color={black} stroke={2} />
        </div>
        <div>
          <Attribution size={45} color={black} stroke={2} />
        </div>
      </div>
    </div>
  )
}
