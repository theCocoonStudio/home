import { useEffect, useRef, useState } from 'react'
import ThreeApp from './ThreeApp.canvas'
import { Page } from './Page.canvas'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { Home } from 'web/pages/Home/Home.canvas'

export default function Layout() {
  // imperative
  const ref = useRef()
  const footer = useRef()
  const tracking = useRef()
  const description = useRef()

  const s1 = useRef()
  const s2 = useRef()
  const s3 = useRef()
  const s4 = useRef()

  useEffect(() => {
    s1.current = footer.current.children[0].children[0]
    s2.current = footer.current.children[0].children[1]
    s3.current = footer.current.children[0].children[2]
    s4.current = footer.current.children[2].children[2]
  }, [])
  // declarative
  const [menu, setMenu] = useState(false)

  return (
    <div id='eventContainer' ref={ref}>
      <Nav id='nav' className='space-mono-regular' />
      <div id='main' className='content'>
        <div id='tracking' ref={tracking} />
        <div id='description' ref={description} className='disable-scrollbars'>
          <h1>Just getting started.</h1>
          <h2>an introduction</h2>
          <p>{text}</p>
        </div>
      </div>
      <Footer ref={footer} setMenu={setMenu} menu={menu} />

      <ThreeApp id='canvas' eventSource={ref} eventPrefix={'client'}>
        <Page s1={s1} s2={s2} s3={s3} s4={s4} menu={menu} setMenu={setMenu} />
        <Home
          tracking={tracking}
          description={description}
          setMenu={setMenu}
          menu={menu}
        />
      </ThreeApp>
    </div>
  )
}

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus felis, blandit non neque non, mollis convallis elit.`
