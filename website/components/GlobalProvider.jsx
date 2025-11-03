import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { useCallback, useRef, useState } from 'react'
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { ResizeEventProvider } from 'src/context/ResizeEventProvider'
import { ThemeProvider } from 'website/context/ThemeProvider'
import { MenuProvider } from 'website/context/MenuProvider'
import Layout from './Layout'
import { PageProvider } from '../pages/Home/PageProvider'
import { ScrollControls } from 'src'
import { NavigationProvider } from './NavigationProvider'

const theme = {
  colors: {
    white: '#EAEAEA',
    purple: '#403B4E',
    charcoal: '#3D4F60',
    slate: '#426B69',
    midnight: '#405C5D',
    black: '#122629',
  },
  lengths: {
    navHeight: ({ width }) => {
      return width > 600 ? 30 : 24
    },
    atomicPadding: 4,
    sidePadding: ({ width }) => {
      return width > 768 ? 64 : width > 400 ? 32 : 24
    },
    topBottomPadding: 24,
    maxWidth: 1280,
    loaderSize: ({ width }) => {
      return width > 600 ? 24 : 20
    },
  },
}

const GlobalProvider = ({ config, ready, setReady }) => {
  // config values
  const {
    theme: pageTheme,
    scroll: { scrollControlsProps },
  } = config

  // mui theme
  const muiTheme = createTheme({
    palette: {
      common: { black: theme.colors.black, white: theme.colors.white },
      primary: { main: theme.colors.black },
      action: {
        disabled: `${theme.colors.white}55`,
      },
    },
    typography: {
      switchIcon: '2rem',
      fontFamily: ['Raleway', 'sans-serif'].join(','),
    },
  })

  // state: stable across page changes
  const [atStartOrFinish, setAtStartOrFinish] = useState({
    start: true,
    finish: false,
    either: true,
  })

  // state: unstable; resets on page change
  const [scrollDistanceFactor, setScrollDistanceFactor] = useState(1)
  const [contactOpen, setContactOpen] = useState(false)

  // scroll handle
  const scroll = useRef()

  // state reset callback
  const resetPage = useCallback(() => {
    document.documentElement.style.setProperty(
      '--reserved-loader-global-transition-speed',
      '0s',
    )
    setReady(false)
    setContactOpen(false)
    setScrollDistanceFactor(1)
  }, [setReady])

  // draggable menu
  const mouseSensor = useSensor(MouseSensor)
  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 250ms, with tolerance of 5px of movement
    activationConstraint: {
      delay: 50,
      tolerance: 5,
    },
  })
  const sensors = useSensors(mouseSensor, touchSensor)

  return (
    <ResizeEventProvider ready={ready}>
      <ThemeProvider theme={theme} pageTheme={pageTheme}>
        <MenuProvider>
          <DndContext sensors={sensors}>
            <MuiThemeProvider theme={muiTheme}>
              <PageProvider config={config}>
                <ScrollControls
                  ref={scroll}
                  {...scrollControlsProps}
                  distance={
                    scrollControlsProps?.distance
                      ? scrollDistanceFactor * scrollControlsProps.distance
                      : scrollDistanceFactor
                  }
                  enabled={ready}
                >
                  <NavigationProvider onNavigation={resetPage}>
                    <Layout
                      config={config}
                      ready={ready}
                      setReady={setReady}
                      atStartOrFinish={atStartOrFinish}
                      setAtStartOrFinish={setAtStartOrFinish}
                      setScrollDistanceFactor={setScrollDistanceFactor}
                      contactOpen={contactOpen}
                      setContactOpen={setContactOpen}
                    />
                  </NavigationProvider>
                </ScrollControls>
              </PageProvider>
            </MuiThemeProvider>
          </DndContext>
        </MenuProvider>
      </ThemeProvider>
    </ResizeEventProvider>
  )
}
export default GlobalProvider
