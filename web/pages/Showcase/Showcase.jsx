import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styles from 'web/styles/Showcase.module.css'
import { Leva, LevaPanel } from 'leva'
import { useMarkup } from '../../hooks/useMarkup'
import { useTheme } from '../../hooks/useTheme'
import { useShowcase } from 'web/pages/Showcase/hooks/useShowcase'
import { descriptionArr, trackingArr } from '../Showcase/markups'
import { usePageControls } from '../../hooks/usePageControls'
import Exit from '@tabler/icons-react/dist/esm/icons/IconChevronDown'

export const Showcase = function Showcase() {
  const tracking = useRef()
  const description = useRef()
  const code = useRef()
  const options = useRef()
  const menuRef = useRef()
  const progress = useRef()
  const menu1 = useRef()
  const menu2 = useRef()
  const menu3 = useRef()

  useEffect(() => {
    menu1.current = menuRef.current.children[0]
    menu2.current = menuRef.current.children[1]
    menu3.current = menuRef.current.children[2]
  }, [])

  useMarkup('showcase', {
    menu1,
    menu2,
    menu3,
    tracking,
    description,
    code,
    menu: menuRef,
    progress,
  })
  const colorTheme = useTheme()
  const {
    state: { menu, current },
    setState: { menu: setMenu },
  } = useShowcase()

  const controlTheme = useMemo(
    () => ({
      colors: {
        elevation1: [colorTheme.midnight, colorTheme.grey][current - 1],
        elevation2: [colorTheme.gunmetal, colorTheme.black][current - 1],
        elevation3: [colorTheme.midnight, colorTheme.grey][current - 1],
        highlight2: colorTheme.white,
        highlight1: colorTheme.white,
        highlight3: colorTheme.white,
        accent2: [colorTheme.gunmetal, colorTheme.black][current - 1],
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
      colorTheme.black,
      colorTheme.white,
      colorTheme.slate,
      current,
    ],
  )

  const levaProps = useMemo(
    () => ({
      titleBar: {
        filter: false,
        title: <div>Fluid Simulation Controls</div>,
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

  const toggleMenu = useCallback(
    (e) => {
      e.preventDefault()
      setMenu((prev) => !prev)
    },
    [setMenu],
  )
  return (
    <div
      className={`${styles.container} ${menu ? styles[`container-open`] : ''}`}
    >
      <div className={`${styles.main}`}>
        <div className={`${styles.refContainer}`}>
          <div
            ref={tracking}
            className={`${styles.tracking} ${styles[`tracking-${styleKey}`]} ${menu ? styles[`tracking-${styleKey}-open`] : ''}`}
          >
            {Tracking}
          </div>
          <div
            ref={description}
            className={`disable-scrollbars ${styles.description} ${styles[`description-${styleKey}`]} ${menu ? styles[`description-${styleKey}-open`] : ''} `}
          >
            {Description}
          </div>
          <div
            ref={code}
            className={`${styles.code} ${styles[`code-${styleKey}`]} ${menu ? styles[`code-${styleKey}-open`] : ''}`}
          />
          <div
            ref={options}
            className={`${styles.options} ${styles[`options-${styleKey}`]} `}
          />
          <div
            id='showcaseProgress'
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
      </div>
      <div
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
              title: <div>Color Controls</div>,
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
              title: <div>Scene Controls</div>,
              drag: false,
            }}
          />
        </div>
        <div className={`${styles.exitContainer}`} onClick={toggleMenu}>
          <div className={`${styles.exit}`}>
            <Exit size={'100%'} />
          </div>
        </div>
      </div>
    </div>
  )
}
