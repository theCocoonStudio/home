import styles from 'website/styles/Layout.module.css'
import { ThreeApp } from './ThreeApp.canvas'
import { Nav } from './Nav'
import { ScrollControls, View } from '@react-three/drei'
import { memo } from 'react'
import { ScrollHTMLRef } from './ScrollHTMLRef.canvas'
import { createPortal } from 'react-dom'
import { EventLayerOn } from './EventLayerOn.canvas'
import { Menu } from './Menu'
import { Loader } from './Loader'
import { CanvasLoader } from './Loader.canvas'
import { ContactDialog } from './ContactDialog'
import { ResizeEventContext } from 'src/context/ResizeEventContext'
import { ThemeContext } from 'website/context/ThemeContext'
import { MenuContext } from 'website/context/MenuContext'
import { PageContext } from '../context/PageContext'
import { useContextBridge } from '@react-three/drei'

function Layout({
  config,
  ready,
  setReady,
  scrollContainer,
  setScrollContainer,
  atStartOrFinish,
  setAtStartOrFinish,
  scrollDistanceFactor,
  setScrollDistanceFactor,
  contactOpen,
  setContactOpen,
}) {
  // config values
  const {
    main: { Component, ViewComponent, renderPriority },
    scroll: { scrollControlsProps },
    menu: { Component: MenuComponent },
    footer: { FooterComponent },
    loader: { scrollDownTarget, scrollUpTarget },
  } = config

  // context bridge
  const ContextBridge = useContextBridge(
    ResizeEventContext,
    ThemeContext,
    MenuContext,
    PageContext,
  )

  return (
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

      {scrollContainer &&
        createPortal(
          <>
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
              ready={ready}
            />
            {FooterComponent && (
              <FooterComponent
                config={config}
                scrollContainer={scrollContainer}
                ready={ready}
                atStartOrFinish={atStartOrFinish}
              />
            )}

            <Loader
              config={config}
              ready={ready}
              atStartOrFinish={atStartOrFinish}
              scrollDownTarget={scrollDownTarget}
              scrollUpTarget={scrollUpTarget}
              scrollContainer={scrollContainer}
            />
            <View
              className={styles.view}
              index={renderPriority}
              /* frames={1} */
            >
              <ContextBridge>
                {ViewComponent && (
                  <ViewComponent
                    ready={ready}
                    setReady={setReady}
                    config={config}
                    scrollContainer={scrollContainer}
                    atStartOrFinish={atStartOrFinish}
                  />
                )}

                <CanvasLoader
                  ready={ready}
                  setReady={setReady}
                  atStartOrFinish={atStartOrFinish}
                  setAtStartOrFinish={setAtStartOrFinish}
                />
                <EventLayerOn />
              </ContextBridge>
            </View>
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
          ready={ready}
        />
      )}

      <ContactDialog
        contactOpen={contactOpen}
        setContactOpen={setContactOpen}
        atStartOrFinish={atStartOrFinish}
      />
    </div>
  )
}

export default memo(Layout)
