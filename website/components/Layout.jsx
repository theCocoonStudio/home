import { useRef } from 'react'
import styles from 'website/styles/Layout.module.css'
import { ThreeApp } from './ThreeApp.canvas'
import { App } from './App'
import { Home } from '../pages/Home.canvas'

export function Layout() {
  const ref = useRef()
  return (
    <div className={`${styles.eventContainer}`} ref={ref}>
      <ThreeApp eventSource={ref} eventPrefix={'client'}>
        <Home />
      </ThreeApp>
      <App />
    </div>
  )
}
