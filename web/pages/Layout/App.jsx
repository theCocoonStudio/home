import { Nav } from './Nav'
import { Footer } from './Footer'
import styles from 'web/styles/Layout.module.css'
import { useEffect, useMemo, useRef } from 'react'
import { CubeScene } from 'web/pages/Home/menus/CubeScene'
import { usePage } from '../../hooks/usePage'

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
    settings1.current = footer.current.children[2].children[0]
    settings2.current = footer.current.children[2].children[1]
    settings3.current = footer.current.children[2].children[2]
    settings4.current = footer.current.children[2].children[3]
    footerInfo.current = footer.current.children[1]
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
    state: { menu },
  } = usePage('markup', refs)

  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus felis, blandit non neque non, mollis convallis elit.`

  return (
    <>
      <Nav id='nav' className='space-mono-regular' />
      <div id='main' className='content'>
        <div
          id='tracking'
          ref={tracking}
          className={`${styles.tracking} ${menu ? styles['tracking-open'] : ''}`}
        />
        <div
          id='description'
          ref={description}
          className={`disable-scrollbars ${styles.description} ${menu ? styles['description-open'] : ''}`}
        >
          <h1>Just getting started.</h1>
          <h2>an introduction</h2>
          <p>{text}</p>
        </div>
        <div id='code' ref={code} className={styles.code} />
        <div id='options' ref={options} className={styles.options} />
        <div
          id='menu'
          ref={menuRef}
          className={`disable-scrollbars space-mono-regular ${styles.menu} ${menu ? styles['menu-open'] : ''}`}
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
