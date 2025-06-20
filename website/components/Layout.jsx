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

const theme = {
  utils: { compose: composeClassNames, raleway, changaOne },
  colors: {
    mint: '#5CAB7D',
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
    navHeight: 120,
    footerHeight: 120,
    atomicPadding: 8,
    scrollContainerBorderSize: 2,
  },
}

function _Layout({ config = pagesConfig }) {
  const [page, setPage] = useState('home')
  const [showLightbox, setShowLightbox] = useState(false)
  const [scrollContainer, setScrollContainer] = useState()

  const {
    main: { Component, ViewComponent, renderPriority },
    context: { Provider },
    scroll: { scrollControlsProps },
  } = config[page]

  return (
    <ThemeProvider theme={theme}>
      <ResizeEventProvider>
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
                        showLightbox={showLightbox}
                        setShowLightbox={setShowLightbox}
                      />
                      <EventLayerOn />
                    </View>
                  )}
                  {Component && (
                    <Component
                      config={config[page]}
                      scrollContainer={scrollContainer}
                      showLightbox={showLightbox}
                      setShowLightbox={setShowLightbox}
                    />
                  )}
                </>,
                scrollContainer.children[0],
              )}
          </div>
          <Nav config={config[page]} scrollContainer={scrollContainer} />
          <Footer config={config[page]} scrollContainer={scrollContainer} />
          <LightBox
            config={config[page]}
            scrollContainer={scrollContainer}
            showLightbox={showLightbox}
            setShowLightbox={setShowLightbox}
          />
        </Provider>
      </ResizeEventProvider>
    </ThemeProvider>
  )
}

export const Layout = memo(_Layout)
