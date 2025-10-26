import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
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
import { useParams } from 'react-router'

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
    loaderSize: ({ width, height }) => {
      return width > 600 && height > 700 ? 45 : 30
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
    typography: { switchIcon: '2rem' },
  })

  // page route
  const { '*': splat } = useParams()

  // state: stable across page changes
  const [atStartOrFinish, setAtStartOrFinish] = useState({
    start: true,
    finish: false,
    either: true,
  })

  // state: unstable; resets on page change
  const [scrollDistanceFactor, setScrollDistanceFactor] = useState(1)
  const [contactOpen, setContactOpen] = useState(false)

  // scroll callback
  const scroll = useRef()

  // reset unstable state on page change; scroll to 0 (top); manage loader transition time
  const resetPage = useCallback(() => {
    setContactOpen(false)
    scroll.current.scrollTo(0.0, { smoothTime: 0.0 })
    setScrollDistanceFactor(1)
  }, [])

  const prevSplat = useRef()
  useLayoutEffect(() => {
    if (
      typeof prevSplat.current !== 'undefined' &&
      prevSplat.current !== splat
    ) {
      resetPage()
    }
    return () => {
      prevSplat.current = splat
    }
  }, [resetPage, splat])

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
                >
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
