import { Nav } from './Nav'
import { Footer } from './Footer'
import styles from 'web/styles/Layout.module.css'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { CubeScene } from 'web/pages/Home/menus/CubeScene'
import { usePage } from '../../hooks/usePage'

const HomeMarkup = () => (
  <>
    <h1>Captivate your audience</h1>
    <h2>with unleashed creativity.</h2>
    <p>
      Background: real-time fluid simulation running fully in the browser using
      WebGL2 with custom GPU shader passes; used as a material alpha-map
      texture.
    </p>
    <p>
      Foreground: Playable 3D Rubik&#39;s cube implementation using a Three.js
      InstancedMesh and custom shaders to override material parameters.
    </p>
  </>
)

const GalleryMarkup = () => (
  <>
    <h1>Sense and sensibility</h1>
    <h2>combining technical knowledge and visual nuance.</h2>
    <p>
      Background: 3D Cloud simulation powered by the creative OSS powerhouse
      pmndrs and its contributors.
    </p>
    <p>Foreground: Select photography with added post-processing effects.</p>
  </>
)

const markupArr = [<HomeMarkup key='home' />, <GalleryMarkup key='gallery' />]

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
    state: { menu, current },
  } = usePage('markup', refs)

  const [Description, setDescription] = useState(markupArr[0])
  const [styleKey, setStyleKey] = useState('home')

  useLayoutEffect(() => {
    setDescription(markupArr[current - 1])
    if (current === 1) {
      setStyleKey(['home', 'gallery'][current - 1])
    }
  }, [current])
  return (
    <>
      <Nav id='nav' className='space-mono-regular' />
      <div id='main' className='content'>
        <div
          id='tracking'
          ref={tracking}
          className={`${styles[`tracking-${styleKey}`]} ${menu ? styles[`tracking-${styleKey}-open`] : ''}`}
        />
        <div
          id='description'
          ref={description}
          className={`disable-scrollbars ${styles[`description-${styleKey}`]} ${menu ? styles[`description-${styleKey}-open`] : ''}`}
        >
          {Description}
        </div>
        <div id='code' ref={code} className={styles[`code-${styleKey}`]} />
        <div
          id='options'
          ref={options}
          className={styles[`options-${styleKey}`]}
        />
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
