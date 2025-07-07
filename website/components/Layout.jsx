import styles from 'website/styles/Layout.module.css'
import { ThreeApp } from './ThreeApp.canvas'
import { Nav } from './Nav'
import { ResizeEventProvider } from 'src/context/ResizeEventProvider'
import { ThemeProvider } from 'website/context/ThemeProvider'
import { ScrollControls, View } from '@react-three/drei'
import pagesConfig from 'website/pages'
import { composeClassNames, raleway, changaOne } from '../utils/styles'
import { Footer } from './Footer'
import { memo, useState } from 'react'
import { ScrollHTMLRef } from './ScrollHTMLRef.canvas'
import { createPortal } from 'react-dom'
import { EventLayerOn } from './EventLayerOn.canvas'
import { LightBox } from './Lightbox'
import { LightboxProvider } from 'website/context/LightboxProvider'
import { Menu } from './Menu'
import { DndContext } from '@dnd-kit/core'
import { MenuProvider } from 'website/context/MenuProvider'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'

const theme = {
  utils: { compose: composeClassNames, raleway, changaOne },
  colors: {
    white: '#EAEAEA',
    purple: '#403B4E',
    charcoal: '#3D4F60',
    slate: '#426B69',
    midnight: '#405C5D',
    black: '#122629',
  },
  lengths: {
    navHeight: 120,
    footerHeight: 120,
    atomicPadding: 8,
    scrollContainerBorderSize: 2,
  },
}

function _Layout({ config = pagesConfig }) {
  const muiTheme = createTheme({
    spacing: theme.atomicPadding / 2,
    palette: {
      common: { black: theme.colors.black, white: theme.colors.white },
      primary: { main: theme.colors.black },
    },
    typography: { switchIcon: '2rem' },
  })
  const [page, setPage] = useState('home')

  const [scrollContainer, setScrollContainer] = useState()

  const {
    main: { Component, ViewComponent, renderPriority },
    context: { Provider },
    scroll: { scrollControlsProps },
    lightbox: { Component: LightBoxComponent },
    menu: { Component: MenuComponent },
  } = config[page]

  return (
    <ThemeProvider theme={theme}>
      <ResizeEventProvider>
        <LightboxProvider>
          <MenuProvider>
            <DndContext>
              <MuiThemeProvider theme={muiTheme}>
                <Provider config={config[page]}>
                  <div className={styles.layout}>
                    <ThreeApp eventPrefix={'client'}>
                      <ScrollControls {...scrollControlsProps}>
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
                                config={config[page]}
                                scrollContainer={scrollContainer}
                              />
                              <EventLayerOn />
                            </View>
                          )}
                          {Component && (
                            <Component
                              config={config[page]}
                              scrollContainer={scrollContainer}
                            />
                          )}
                          <Nav
                            config={config[page]}
                            scrollContainer={scrollContainer}
                          />
                          <Footer
                            config={config[page]}
                            scrollContainer={scrollContainer}
                          />
                        </>,
                        scrollContainer.children[0],
                      )}

                    {LightBoxComponent && (
                      <LightBox
                        config={config[page]}
                        scrollContainer={scrollContainer}
                      >
                        <LightBoxComponent config={config[page]} />
                      </LightBox>
                    )}
                    {MenuComponent && (
                      <Menu
                        config={config[page]}
                        scrollContainer={scrollContainer}
                        MenuComponent={MenuComponent}
                      />
                    )}
                  </div>
                </Provider>
              </MuiThemeProvider>
            </DndContext>
          </MenuProvider>
        </LightboxProvider>
      </ResizeEventProvider>
    </ThemeProvider>
  )
}

export const Layout = memo(_Layout)
