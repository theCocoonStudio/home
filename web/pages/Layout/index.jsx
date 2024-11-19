import { useMemo, useRef } from 'react'
import ThreeApp from './ThreeApp.canvas'
import { Page } from './Page.canvas'
import { App } from './App'
import { useControls } from 'leva'

const _opts = {
  poissonIterations: 32,
  viscousIterations: 32,
  forceValue: 20,
  resolution: 0.5,
  forceSize: 50,
  viscosity: 40,
  dt: 0.014,
  isViscous: true,
  BFECC: true,
}

export default function Layout() {
  const {
    poissonIterations: iterations_poisson,
    viscousIterations: iterations_viscous,
    forceValue: mouse_force,
    resolution,
    forceSize: cursor_size,
    viscosity: viscous,
    dt,
    isViscous,
    BFECC,
  } = useControls(_opts)

  const opts = useMemo(
    () => ({
      isBounce: true,
      iterations_poisson,
      iterations_viscous,
      mouse_force,
      resolution,
      cursor_size,
      viscous,
      dt,
      isViscous,
      BFECC,
    }),
    [
      BFECC,
      cursor_size,
      dt,
      isViscous,
      iterations_poisson,
      iterations_viscous,
      mouse_force,
      resolution,
      viscous,
    ],
  )
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
