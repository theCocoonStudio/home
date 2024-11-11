import { Nav } from './Nav'
import { Footer } from './Footer'
import styles from 'web/styles/Layout.module.css'
import { useEffect, useRef, useState, useTransition } from 'react'
import { CubeScene } from 'web/pages/Home/menus/CubeScene'
import { usePage } from '../../hooks/usePage'
import { descriptionArr, trackingArr } from '../Home/markups'

export const App = function App() {
  const menuMarkup = useRef(CubeScene)
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
  const settings1 = useRef()
  const settings2 = useRef()
  const settings3 = useRef()
  const settings4 = useRef()
  const footerInfo = useRef()
  const menu1 = useRef()
  const menu2 = useRef()
  const menu3 = useRef()

  useEffect(() => {
    socials1.current = footer.current.children[0].children[0]
    socials2.current = footer.current.children[0].children[1]
    socials3.current = footer.current.children[0].children[2]
    settings1.current = footer.current.children[1].children[0]
    settings2.current = footer.current.children[1].children[1]
    settings3.current = footer.current.children[1].children[2]
    settings4.current = footer.current.children[1].children[3]
    footerInfo.current = footer.current.children[2]
    menu1.current = menuRef.current.children[0]
    menu2.current = menuRef.current.children[1]
    menu3.current = menuRef.current.children[2]
  }, [])

  const refs = {
    socials1,
    socials2,
    socials3,
    settings1,
    settings2,
    settings3,
    settings4,
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
  }
  const {
    state: { menu, current },
  } = usePage('markup', refs)

  const [isPending, startTransition] = useTransition()
  const [Description, setDescription] = useState(descriptionArr[0])
  const [Tracking, setTracking] = useState(trackingArr[0])
  const [styleKey, setStyleKey] = useState('home')

  useEffect(() => {
    startTransition(() => {
      setStyleKey(['home', 'gallery'][current - 1])
      setDescription(descriptionArr[current - 1])
      setTracking(trackingArr[current - 1])
    })
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
          id='menu'
          ref={menuRef}
          className={`disable-scrollbars space-mono-regular ${styles.menu} ${menu ? styles['menu-open'] : ''} `}
        >
          <menuMarkup.current />
        </div>
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
      <Footer ref={footer} />
    </>
  )
}
