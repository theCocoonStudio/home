import { Nav } from './Nav'
import { Footer } from './Footer'
import { useEffect, useRef, useState } from 'react'
import { useMarkup } from '../../hooks/useMarkup'
import { Showcase } from '../Showcase/Showcase'
import { Menu } from './Menu'

export const App = function App() {
  const footer = useRef()
  const nav = useRef()
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
  }, [])

  useMarkup('global', {
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
    footer,
    nav,
  })

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div id='appContainer' className={menuOpen ? 'menuOpen' : ''}>
        <Nav ref={nav} setMenuOpen={setMenuOpen} />
        <div id='app' className='content'>
          <Showcase />
        </div>
        <Footer ref={footer} />
      </div>
      <Menu open={menuOpen} />
    </>
  )
}
