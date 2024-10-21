import { useEffect, useRef, useState } from 'react'
import ThreeApp from './ThreeApp.canvas'
import { Page } from './Page.canvas'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { Home } from 'web/pages/Home/Home.canvas'
import styles from 'web/styles/Layout.module.css'

export default function Layout() {
  // imperative
  const ref = useRef()
  const footer = useRef()
  const tracking = useRef()
  const description = useRef()
  const code = useRef()
  const options = useRef()
  const menuRef = useRef()
  const progress = useRef()

  const s1 = useRef()
  const s2 = useRef()
  const s3 = useRef()
  const s4 = useRef()
  const s5 = useRef()
  const s6 = useRef()

  useEffect(() => {
    s1.current = footer.current.children[0].children[0]
    s2.current = footer.current.children[0].children[1]
    s3.current = footer.current.children[0].children[2]
    s4.current = footer.current.children[2].children[0]
    s5.current = footer.current.children[2].children[1]
    s6.current = footer.current.children[2].children[2]
  }, [])

  // declarative
  const [menu, setMenu] = useState(false)
  const [pause, setPause] = useState(false)

  return (
    <div id='eventContainer' ref={ref}>
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
          className={`space-mono-regular ${styles.menu} ${menu ? styles['menu-open'] : ''}`}
        >
          <div>
            <pre>{`hello {
            }`}</pre>
          </div>
          <div />
          <div />
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

      <Footer ref={footer} setMenu={setMenu} setPause={setPause} />

      <ThreeApp id='canvas' eventSource={ref} eventPrefix={'client'}>
        <Page
          s1={s1}
          s2={s2}
          s3={s3}
          s4={s4}
          s5={s5}
          s6={s6}
          pause={pause}
          setMenu={setMenu}
          menu={menu}
          tracking={tracking}
          description={description}
          menuRef={menuRef}
          code={code}
          progress={progress}
        />
        <Home
          tracking={tracking}
          description={description}
          pause={pause}
          menu={menu}
        />
      </ThreeApp>
    </div>
  )
}

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus felis, blandit non neque non, mollis convallis elit.`
