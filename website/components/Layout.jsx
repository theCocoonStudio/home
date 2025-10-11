import styles from 'website/styles/Layout.module.css'
import { ThreeApp } from './ThreeApp.canvas'
import { Nav } from './Nav'
import { ResizeEventProvider } from 'src/context/ResizeEventProvider'
import { ThemeProvider } from 'website/context/ThemeProvider'
import { ScrollControls, View } from '@react-three/drei'
import { Footer } from './Footer'
import { useState } from 'react'
import { ScrollHTMLRef } from './ScrollHTMLRef.canvas'
import { createPortal } from 'react-dom'
import { EventLayerOn } from './EventLayerOn.canvas'
import { Menu } from './Menu'
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { MenuProvider } from 'website/context/MenuProvider'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'
import { Loader } from './Loader'
import { CanvasLoader } from './Loader.canvas'
import { ContactDialog } from './ContactDialog'

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

function Layout({ config }) {
  const {
    main: { Component, ViewComponent, renderPriority },
    context: { Provider },
    scroll: { scrollControlsProps },
    menu: { Component: MenuComponent },
    theme: pageTheme,
    loader: { showLoader, scrollDownTarget, scrollUpTarget },
  } = config || { main: {}, context: {}, scroll: {}, menu: {}, loader: {} }

  const muiTheme = createTheme({
    palette: {
      common: { black: theme.colors.black, white: theme.colors.white },
      primary: { main: theme.colors.black },
    },
    typography: { switchIcon: '2rem' },
  })

  const [ready, setReady] = useState(false)
  const [scrollContainer, setScrollContainer] = useState()
  const [atStartOrFinish, setAtStartOrFinish] = useState({
    start: true,
    finish: false,
    either: true,
  })
  const [scrollDistanceFactor, setScrollDistanceFactor] = useState(1)

  const [contactOpen, setContactOpen] = useState(false)

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
              <Provider config={config}>
                <div className={styles.layout}>
                  <ThreeApp eventPrefix={'client'}>
                    <ScrollControls
                      {...scrollControlsProps}
                      distance={
                        scrollControlsProps?.distance
                          ? scrollDistanceFactor * scrollControlsProps.distance
                          : scrollDistanceFactor
                      }
                    >
                      <View.Port />
                      <ScrollHTMLRef setContainer={setScrollContainer} />
                    </ScrollControls>
                  </ThreeApp>

                  {(Component || ViewComponent) &&
                    scrollContainer &&
                    createPortal(
                      <>
                        {ViewComponent && (
                          <View
                            className={styles.view}
                            index={renderPriority}
                            /* frames={1} */
                          >
                            <ViewComponent
                              ready={ready}
                              setReady={setReady}
                              config={config}
                              scrollContainer={scrollContainer}
                              atStartOrFinish={atStartOrFinish}
                            />
                            {showLoader && (
                              <CanvasLoader
                                ready={ready}
                                setReady={setReady}
                                atStartOrFinish={atStartOrFinish}
                                setAtStartOrFinish={setAtStartOrFinish}
                              />
                            )}
                            <EventLayerOn />
                          </View>
                        )}
                        {Component && (
                          <Component
                            ready={ready}
                            setReady={setReady}
                            config={config}
                            scrollContainer={scrollContainer}
                          />
                        )}
                        <Nav
                          config={config}
                          scrollContainer={scrollContainer}
                          atStartOrFinish={atStartOrFinish}
                          setContactOpen={setContactOpen}
                          contactOpen={contactOpen}
                        />
                        <Footer
                          config={config}
                          scrollContainer={scrollContainer}
                          ready={ready}
                          atStartOrFinish={atStartOrFinish}
                        />
                        {showLoader && (
                          <Loader
                            config={config}
                            ready={ready}
                            atStartOrFinish={atStartOrFinish}
                            scrollDownTarget={scrollDownTarget}
                            scrollUpTarget={scrollUpTarget}
                            scrollContainer={scrollContainer}
                          />
                        )}
                      </>,
                      scrollContainer.children[0],
                    )}
                  {MenuComponent && (
                    <Menu
                      config={config}
                      scrollContainer={scrollContainer}
                      MenuComponent={MenuComponent}
                      setScrollDistanceFactor={setScrollDistanceFactor}
                      atStartOrFinish={atStartOrFinish}
                    />
                  )}

                  <ContactDialog
                    contactOpen={contactOpen}
                    setContactOpen={setContactOpen}
                    atStartOrFinish={atStartOrFinish}
                  />
                </div>
              </Provider>
            </MuiThemeProvider>
          </DndContext>
        </MenuProvider>
      </ThemeProvider>
    </ResizeEventProvider>
  )
}

export default Layout
