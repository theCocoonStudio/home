import styles from 'website/styles/Layout.module.css'
import { ThreeApp } from './ThreeApp.canvas'
import { Nav } from './Nav'
import { Menu } from './Menu'
import { ResizeEventProvider } from 'src/context/ResizeEventProvider'
import { ThemeProvider } from 'website/context/ThemeProvider'
import { Html, ScrollControls, View } from '@react-three/drei'
import { Home } from '../pages/Home.view'
import { composeClassNames, nunito, orbitron } from '../utils/styles'
import { Footer } from './Footer'
import { ScrollProvider } from '../context/ScrollProvider'
import { SetScroll } from './SetScroll.canvas'
import { useMemo, useState } from 'react'

const theme = {
  utils: { compose: composeClassNames, nunito, orbitron },
  colors: {
    mint: '#5CAB7D',
    charcoal: '#273B4E', // blue
    purple: '#2B253A',
    gunmetal: '#122629', // dark green
    midnight: '#103334', // intermediate green
    slate: '#134643', // green (success)
    white: '#ffffff',
    black: '#000000',
    grey: '#202020',
    red: '#330000', // errors
    charcoalTint: '#3D4F60',
  },
  lengths: {
    navHeight: 120,
    footerHeight: 120,
    atomicPadding: 8,
  },
  markupIds: {
    scroll: {
      container: 'scroll-container',
    },
    fps: {
      container: 'fps-container',
    },
  },
}

const pages = {
  home: {
    scrollControlsProps: { pages: 10, enabled: true, damping: 0, distance: 2 },
    sectionEvents: { landingSection: [0, 0.19], aboutSection: [0.19, 1] },
    Component: Home,
  },
}

export function Layout() {
  const [page, setPage] = useState('home')
  return (
    <ThemeProvider theme={theme}>
      <ResizeEventProvider>
        <ScrollProvider>
          <Inner page={page} />
          <Menu />
          <Nav />
          <Footer />
        </ScrollProvider>
      </ResizeEventProvider>
    </ThemeProvider>
  )
}

const Inner = ({ page }) => {
  const scrollEvents = useMemo(() => {
    return Object.keys(pages[page].sectionEvents).map((section) => (
      <SetScroll
        key={section}
        event={section}
        rangeMin={pages[page].sectionEvents[section][0]}
        rangeMax={pages[page].sectionEvents[section][1]}
      />
    ))
  }, [page])
  return (
    <div className={styles.layout}>
      <ThreeApp eventPrefix={'client'}>
        <ScrollControls pages={10} enabled={true} damping={0} distance={2}>
          <View.Port />
          <Html wrapperClass={styles.html} prepend transform={false}>
            <View className={styles.view} frames={1}>
              <Home />
            </View>
          </Html>
          <SetScroll isEventData={false} />
          {scrollEvents}
        </ScrollControls>
      </ThreeApp>
    </div>
  )
}
