import styles from 'website/styles/Layout.module.css'
import { ThreeApp } from './ThreeApp.canvas'
import { Nav } from './Nav'
import { Menu } from './Menu'
import { ResizeEventProvider } from 'src/context/ResizeEventProvider'
import { ThemeProvider } from 'website/context/ThemeProvider'
import { PointerProvider } from 'website/context/PointerProvider'
import { Html, ScrollControls, View } from '@react-three/drei'
import { Home } from '../pages/Home.view'
import { usePointer } from '../hooks/usePointer'
import { composeClassNames, nunito, orbitron } from '../utils/styles'
import { useTheme } from '../hooks/useTheme'
import { Footer } from './Footer'
import { SetScroll } from './SetScroll.canvas'
import { ScrollProvider } from '../context/ScrollProvider'

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

export function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <ResizeEventProvider>
        <PointerProvider>
          <ScrollProvider>
            <Inner />
            <Menu />
            <Nav />
            <Footer />
          </ScrollProvider>
        </PointerProvider>
      </ResizeEventProvider>
    </ThemeProvider>
  )
}

const Inner = () => {
  const { pointer } = usePointer()

  const { utilReturn: className } = useTheme(
    'compose',
    styles.layout,
    pointer && styles.pointer,
  )

  return (
    <div className={className}>
      <ThreeApp eventPrefix={'client'}>
        <ScrollControls pages={10} enabled={true} damping={0} distance={2}>
          <View.Port />
          <Html wrapperClass={styles.html} prepend transform={false}>
            <View className={styles.view} frames={1}>
              <Home />
            </View>
          </Html>
          {/* <SetScroll isEventData={false} /> */}
        </ScrollControls>
      </ThreeApp>
    </div>
  )
}
