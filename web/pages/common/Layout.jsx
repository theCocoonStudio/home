import { useRef } from 'react'
import ThreeApp from '../../components/ThreeApp.canvas'
import { PageProvider } from 'web/context/PageProvider'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { Home } from '../Home/Home.canvas'

const pages = [null, null, null, null]

const theme = {
  charcoal: '#273B4E', // blue
  purple: '#2B253A',
  gunmetal: '#122629', // dark green
  midnight: '#103334', // intermediate green
  slate: '#134643', // green
}

export default function Layout() {
  const ref = useRef()
  const tracking = useRef()
  return (
    <PageProvider pages={pages}>
      <div id='eventContainer' ref={ref}>
        <ThreeApp id='canvas' eventSource={ref} eventPrefix={'client'}>
          <Home tracking={tracking} colorTheme={theme} />
        </ThreeApp>
        <Nav id='nav' className='space-mono-regular' />
        <div id='main' className='content'>
          <div id='tracking' ref={tracking} />
          <div id='description' className='disable-scrollbars'>
            <h1>Just getting started.</h1>
            <h2>An introduction</h2>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
          </div>
        </div>
        <Footer id='footer' />
      </div>
    </PageProvider>
  )
}

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus felis, blandit non neque non, mollis convallis elit.`
