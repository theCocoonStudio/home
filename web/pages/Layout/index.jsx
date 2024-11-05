import { useRef, useState } from 'react'
import ThreeApp from './ThreeApp.canvas'
import { Page } from './Page.canvas'
import { App } from './App'

export default function Layout() {
  const [Description, setDescription] = useState(() => <></>)
  const ref = useRef()

  return (
    <div id='eventContainer' className='disable-scrollbars' ref={ref}>
      <App Description={Description} />
      <ThreeApp id='canvas' eventSource={ref} eventPrefix={'client'}>
        <Page setDescription={setDescription} />
      </ThreeApp>
    </div>
  )
}
