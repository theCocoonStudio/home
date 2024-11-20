import { useRef } from 'react'
import ThreeApp from './ThreeApp.canvas'
import { Page } from './Page.canvas'
import { App } from './App'

export default function Layout() {
  const ref = useRef()

  return (
    <div id='eventContainer' className='disable-scrollbars' ref={ref}>
      <App />
      <ThreeApp id='canvas' eventSource={ref} eventPrefix={'client'}>
        <Page />
      </ThreeApp>
    </div>
  )
}
