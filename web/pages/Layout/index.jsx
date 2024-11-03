import { useRef, useState } from 'react'
import ThreeApp from './ThreeApp.canvas'
import { Page } from './Page.canvas'
import { Home } from 'web/pages/Home/Home.canvas'

import { App } from './App'
import { usePage } from '../../hooks/usePage'

export default function Layout() {
  const ref = useRef()
  const { theme: colorTheme } = usePage()
  const [progressColor, setProgressColor] = useState(colorTheme.slate)
  return (
    <div id='eventContainer' ref={ref}>
      <App />
      <ThreeApp id='canvas' eventSource={ref} eventPrefix={'client'}>
        <Page progressColor={progressColor} />
        <Home setProgressColor={setProgressColor} />
      </ThreeApp>
    </div>
  )
}
