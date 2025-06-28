import styles from 'website/styles/Nav.module.css'
import { useTheme } from 'website/hooks/useTheme'
import { useCallback, useMemo } from 'react'
import { View } from '@react-three/drei'
import { Logo } from './Logo.view'
import { useScrollEvent } from 'website/pages/Home/useScrollEvent'
import { useScroll } from 'src/hooks'
import { useLightbox } from '../hooks/useLightbox'

export const Nav = ({ config, scrollContainer }) => {
  const {
    nav: { NavItemsComponent, logoRenderPriority },
  } = config
  const {
    lengths: { navHeight, atomicPadding },
  } = useTheme()

  const { showLightbox } = useLightbox()

  const preScroll = useScrollEvent('preScroll')
  const scrollTo = useScroll(scrollContainer)
  const scrollHome = useCallback(() => {
    scrollTo(0.0)
  }, [scrollTo])

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
      columnGap: `calc(2.5 * ${atomicPadding}px)`,
      opacity: preScroll || showLightbox ? 0 : 1,
    }),
    [atomicPadding, preScroll, showLightbox],
  )

  return (
    <div className={`${styles.nav}`} style={navStyles}>
      <div className={`${styles.logo}`} onClick={scrollHome}>
        <View index={logoRenderPriority} frames={1}>
          <Logo size={30} showLightbox={showLightbox} />
        </View>
      </div>
      <div className={`${styles.pages}`} style={pagesStyles}>
        <NavItemsComponent config={config} scrollContainer={scrollContainer} />
      </div>
    </div>
  )
}
