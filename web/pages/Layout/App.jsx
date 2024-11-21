import { Nav } from './Nav'
import { Footer } from './Footer'
import styles from 'web/styles/Layout.module.css'
import { useEffect, useMemo, useRef, useState } from 'react'
import { usePageControls } from '../../hooks/usePageControls'
import { usePage } from '../../hooks/usePage'
import { descriptionArr, trackingArr } from '../Showcase/markups'
import { Leva, LevaPanel } from 'leva'

export const App = function App() {
  const footer = useRef()
  const tracking = useRef()
  const description = useRef()
  const code = useRef()
  const options = useRef()
  const menuRef = useRef()
  const progress = useRef()

  const socials1 = useRef()
  const socials2 = useRef()
  const socials3 = useRef()
  const socials4 = useRef()
  const settings1 = useRef()
  const settings2 = useRef()
  const settings3 = useRef()
  const settings4 = useRef()
  const settings5 = useRef()
  const footerInfo = useRef()
  const menu1 = useRef()
  const menu2 = useRef()
  const menu3 = useRef()

  useEffect(() => {
    socials1.current = footer.current.children[0].children[0]
    socials2.current = footer.current.children[0].children[1]
    socials3.current = footer.current.children[0].children[2]
    socials4.current = footer.current.children[0].children[3]
    settings1.current = footer.current.children[1].children[0]
    settings2.current = footer.current.children[1].children[1]
    settings3.current = footer.current.children[1].children[2]
    settings4.current = footer.current.children[1].children[3]
    settings5.current = footer.current.children[1].children[4]
    footerInfo.current = footer.current.children[2]
    menu1.current = menuRef.current.children[0]
    menu2.current = menuRef.current.children[1]
    menu3.current = menuRef.current.children[2]
  }, [])

  const {
    state: { menu, current },
    theme: colorTheme,
  } = usePage('markup', {
    socials1,
    socials2,
    socials3,
    socials4,
    settings1,
    settings2,
    settings3,
    settings4,
    settings5,
    footerInfo,
    menu1,
    menu2,
    menu3,
    footer,
    tracking,
    description,
    code,
    menu: menuRef,
    progress,
  })

  const controlTheme = useMemo(
    () => ({
      colors: {
        elevation1: colorTheme.midnight,
        elevation2: colorTheme.gunmetal,
        elevation3: colorTheme.midnight,
        highlight2: colorTheme.white,
        highlight1: colorTheme.white,
        highlight3: colorTheme.white,
        accent2: colorTheme.slate,
        accent1: colorTheme.white,
      },
      radii: {
        xs: '3px',
        sm: '3px',
        lg: '3px',
      },

      fonts: {
        mono: `'Space Mono', ui-monospace, monospace;`,
        sans: `'Righteous', sans-serif`,
      },
      fontSizes: {
        root: '12px',
      },

      sizes: {
        controlWidth: '80px',
      },
      shadows: {
        /* level1: `0 0 5px 1px ${colorTheme.white}`, */
      },
    }),
    [
      colorTheme.midnight,
      colorTheme.gunmetal,
      colorTheme.white,
      colorTheme.slate,
    ],
  )

  const levaProps = useMemo(
    () => ({
      titleBar: {
        filter: false,
        title: <div>Fluid Texture Controls</div>,
        drag: false,
      },
      fill: true,
      theme: controlTheme,
      collapsed: { collapsed: false, onChange: () => {} },
    }),
    [controlTheme],
  )

  const { store1, store2, store3 } = usePageControls()
  const [Description, setDescription] = useState(descriptionArr[0])
  const [Tracking, setTracking] = useState(trackingArr[0])
  const [styleKey, setStyleKey] = useState('home')

  useEffect(() => {
    setStyleKey(['home', 'gallery'][current - 1])
    setDescription(descriptionArr[current - 1])
    setTracking(trackingArr[current - 1])
  }, [current])

  return (
    <>
      <Nav id='nav' className='space-mono-regular' />
      <div id='main' className='content'>
        <div
          id='tracking'
          ref={tracking}
          className={`${styles[`tracking-${styleKey}`]} ${menu ? styles[`tracking-${styleKey}-open`] : ''} `}
        >
          {Tracking}
        </div>
        <div
          id='description'
          ref={description}
          className={`disable-scrollbars ${styles[`description-${styleKey}`]} ${menu ? styles[`description-${styleKey}-open`] : ''} `}
        >
          {Description}
        </div>
        <div
          id='code'
          ref={code}
          className={`${styles[`code-${styleKey}`]} ${menu ? styles[`code-${styleKey}-open`] : ''}`}
        />
        <div
          id='options'
          ref={options}
          className={`${styles[`options-${styleKey}`]} `}
        />
        <div
          id='progress'
          className={`${styles.progress} ${menu ? styles['progress-menu'] : ''}`}
          ref={progress}
        >
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      <div
        id='menu'
        ref={menuRef}
        className={`content disable-scrollbars space-mono-regular ${styles.menu} ${menu ? styles['menu-open'] : ''}`}
      >
        <div>
          <Leva
            store={store1}
            {...levaProps}
            /*   theme={myTheme} // you can pass a custom theme (see the styling section)
            fill // default = false,  true makes the pane fill the parent dom node it's rendered in
            flat // default = false,  true removes border radius and shadow
            oneLineLabels // default = false, alternative layout for labels, with labels and fields on separate rows
            hideTitleBar // default = false, hides the GUI header
            collapsed // default = false, when true the GUI is collpased
            hidden // default = false, when true the GUI is hidden */
          />
        </div>
        <div>
          <LevaPanel
            store={store2}
            {...levaProps}
            titleBar={{
              filter: false,
              title: <div>Cube Color Controls</div>,
              drag: false,
            }}
          />
        </div>
        <div>
          <LevaPanel
            store={store3}
            {...levaProps}
            titleBar={{
              filter: false,
              title: <div>Cube Scene Controls</div>,
              drag: false,
            }}
          />
        </div>
      </div>
      <Footer ref={footer} />
    </>
  )
}
