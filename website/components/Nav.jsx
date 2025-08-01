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
    nav: {
      NavItemsComponent,
      logoRenderPriority,
      LogoComponent,
      initialLogoColor,
    },
  } = config
  const {
    lengths: { navHeight },
  } = useTheme()

  const { showLightbox } = useLightbox()

  const section = useScrollEvent()
  const scrollTo = useScroll(scrollContainer)
  const scrollHome = useCallback(() => {
    scrollTo(0.0)
  }, [scrollTo])
  const navStyles = useMemo(
    () => ({
      height: `${navHeight}px`,
    }),
    [navHeight],
  )

  const pagesStyles = useMemo(
    () => ({
      opacity:
        section === 'preScroll' || section === 'postScroll' || showLightbox
          ? 0
          : 1,
    }),
    [section, showLightbox],
  )

  return (
    <div className={`${styles.nav}`} style={navStyles}>
      <div className={`${styles.logo}`} onClick={scrollHome}>
        <View index={logoRenderPriority} frames={1}>
          <LogoComponent initialLogoColor={initialLogoColor}>
            <Logo
              showLightbox={showLightbox}
              initialLogoColor={initialLogoColor}
            />
          </LogoComponent>
        </View>
      </div>
      <div className={`${styles.pages}`} style={pagesStyles}>
        <NavItemsComponent config={config} scrollContainer={scrollContainer} />
      </div>
    </div>
  )
}
