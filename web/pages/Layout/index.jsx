import { useRef } from 'react'
import ThreeApp from './ThreeApp.canvas'
import { Page } from './Page.canvas'
import { App } from './App'
import { useControls } from 'leva'

const _opts = {
  iterations_poisson: 32,
  iterations_viscous: 32,
  mouse_force: 20,
  resolution: 0.5,
  cursor_size: 50,
  viscous: 40,
  isBounce: true,
  dt: 0.014,
  isViscous: true,
  BFECC: true,
  /* forceCallback: undefined, */
}

export default function Layout() {
  const opts = useControls(_opts)
  const ref = useRef()

  return (
    <div id='eventContainer' className='disable-scrollbars' ref={ref}>
      <App />
      <ThreeApp id='canvas' eventSource={ref} eventPrefix={'client'}>
        <Page opts={opts} />
      </ThreeApp>
    </div>
  )
}
