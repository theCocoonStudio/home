import styles from 'website/styles/Layout.module.css'
import { ThreeApp } from './ThreeApp.canvas'
import { Nav } from './Nav'
import { ResizeEventProvider } from 'src/context/ResizeEventProvider'
import { ThemeProvider } from 'website/context/ThemeProvider'
import { Html, ScrollControls, View } from '@react-three/drei'
import pagesConfig from 'website/pages'
import { composeClassNames, nunito, orbitron } from '../utils/styles'
import { Footer } from './Footer'
import { useState } from 'react'

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
    footer: {
      scrollContainer: 'scroll-container',
      fpsContainer: 'fps-container',
    },
  },
}

export function Layout({ config = pagesConfig }) {
  const [page, setPage] = useState('home')
  return (
    <ThemeProvider theme={theme}>
      <ResizeEventProvider>
        <Inner config={config[page]} />
        <Nav config={config[page]} />
        <Footer config={config[page]} />
      </ResizeEventProvider>
    </ThemeProvider>
  )
}

const Inner = ({ config }) => {
  const {
    main: { ViewComponent, renderPriority },
    scroll: { scrollControlsProps },
  } = config
  return (
    <div className={styles.layout}>
      <ThreeApp eventPrefix={'client'}>
        <ScrollControls {...scrollControlsProps}>
          <View.Port />
          <Html wrapperClass={styles.html} transform={false}>
            <View className={styles.view} index={renderPriority} frames={1}>
              <ViewComponent />
            </View>
          </Html>
        </ScrollControls>
      </ThreeApp>
    </div>
  )
}
