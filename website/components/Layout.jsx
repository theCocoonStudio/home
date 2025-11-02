import styles from 'website/styles/Layout.module.css'
import { ThreeApp } from './ThreeApp.canvas'
import { Nav } from './Nav'
import { View } from '@react-three/drei'
import { memo } from 'react'
import { Menu } from './Menu'
import { Loader } from './Loader'
import { CanvasLoader } from './Loader.canvas'
import { ContactDialog } from './ContactDialog'
import { ResizeEventContext } from 'src/context/ResizeEventContext'
import { ThemeContext } from 'website/context/ThemeContext'
import { MenuContext } from 'website/context/MenuContext'
import { PageContext } from '../context/PageContext'
import { useContextBridge } from '@react-three/drei'
import { useScrollControls, FixedMarkup, ScrollMarkup } from 'src'

function Layout({
  config,
  ready,
  setReady,
  atStartOrFinish,
  setAtStartOrFinish,
  setScrollDistanceFactor,
  contactOpen,
  setContactOpen,
}) {
  // config values
  const {
    main: { Component, ScrollComponent, ViewComponent, renderPriority },
    menu: { Component: MenuComponent },
    footer: { FooterComponent },
    loader: { scrollDownTarget, scrollUpTarget },
  } = config

  // canvas event source and scroll context
  const { _ScrollControlsContext, scrollElement } = useScrollControls()

  // context bridge
  const ContextBridge = useContextBridge(
    ResizeEventContext,
    ThemeContext,
    MenuContext,
    PageContext,
    _ScrollControlsContext,
  )

  return (
    <>
      <ThreeApp eventSource={scrollElement} eventPrefix={'client'}>
        <View.Port />
      </ThreeApp>
      <FixedMarkup>
        {Component && (
          <Component ready={ready} setReady={setReady} config={config} />
        )}
        <Nav
          config={config}
          atStartOrFinish={atStartOrFinish}
          setContactOpen={setContactOpen}
          contactOpen={contactOpen}
          ready={ready}
        />
        {FooterComponent && (
          <FooterComponent
            config={config}
            ready={ready}
            contactOpen={contactOpen}
            atStartOrFinish={atStartOrFinish}
          />
        )}

        <Loader
          config={config}
          ready={ready}
          atStartOrFinish={atStartOrFinish}
          scrollDownTarget={scrollDownTarget}
          scrollUpTarget={scrollUpTarget}
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
                atStartOrFinish={atStartOrFinish}
              />
            )}

            <CanvasLoader
              ready={ready}
              setReady={setReady}
              atStartOrFinish={atStartOrFinish}
              setAtStartOrFinish={setAtStartOrFinish}
            />
          </ContextBridge>
        </View>
        {MenuComponent && (
          <Menu
            config={config}
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
      </FixedMarkup>
      {ScrollComponent && (
        <ScrollMarkup>
          <ScrollComponent ready={ready} setReady={setReady} config={config} />
        </ScrollMarkup>
      )}
    </>
  )
}

export default memo(Layout)
