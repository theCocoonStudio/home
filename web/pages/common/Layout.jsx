import { useRef } from 'react'
import ThreeApp from '../../components/ThreeApp.canvas'
import { Page } from './Page.canvas'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { Home } from '../Home/Home.canvas'
import { usePage } from '../../hooks/usePage'

export default function Layout() {
  const ref = useRef()

  const tracking = useRef()
  const description = useRef()

  usePage('layout', { tracking, description })

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
      <Footer />

      <ThreeApp id='canvas' eventSource={ref} eventPrefix={'client'}>
        <Page>
          <Home />
        </Page>
      </ThreeApp>
    </div>
  )
}

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus felis, blandit non neque non, mollis convallis elit.`
