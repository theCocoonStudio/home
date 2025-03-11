import styles from 'website/styles/Layout.module.css'
import { ThreeApp } from './ThreeApp.canvas'
import { App } from './App'
import { Home } from '../pages/Home.canvas'
import { Nav } from './Nav'
import { Menu } from './Menu'
import { useRef } from 'react'
import { ResizeEventProvider } from 'src/context/ResizeEventProvider'
import { ThemeProvider } from 'website/context/ThemeProvider'

const theme = {
  colors: {
    charcoal: '#273B4E', // blue
    purple: '#2B253A',
    gunmetal: '#122629', // dark green
    midnight: '#103334', // intermediate green
    slate: '#134643', // green (success)
    white: '#ffffff',
    black: '#101010',
    grey: '#202020',
    red: '#330000', // errors
    charcoalTint: '#3D4F60',
  },
  lengths: {
    navHeight: '120px',
    atomicPadding: '8px',
  },
}

export function Layout() {
  const ref = useRef()
  return (
    <ThemeProvider theme={theme}>
      <ResizeEventProvider>
        <div className={`${styles.layout}`} ref={ref}>
          <ThreeApp eventPrefix={'client'}>
            <Home />
          </ThreeApp>

          <Menu />
          <Nav />
        </div>
      </ResizeEventProvider>
    </ThemeProvider>
  )
}
