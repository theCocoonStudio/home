import { Nav } from './Nav'
import { Footer } from './Footer'
import { useEffect, useRef } from 'react'
import { useMarkup } from '../../hooks/useMarkup'
import { Showcase } from '../Showcase/Showcase'

export const App = function App() {
  const footer = useRef()

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
    settings1.current = footer.current.children[1].children[2].children[0]
    settings2.current = footer.current.children[1].children[2].children[1]
    settings3.current = footer.current.children[1].children[2].children[2]
    settings4.current = footer.current.children[1].children[2].children[3]
    settings5.current = footer.current.children[1].children[2].children[4]
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
  })

  return (
    <>
      <Nav className='space-mono-regular' />
      <div id='app'>
        <Showcase />
      </div>
      <Footer ref={footer} />
    </>
  )
}
