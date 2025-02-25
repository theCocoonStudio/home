import { useRef } from 'react'
import styles from 'website/styles/Layout.module.css'
import { ThreeApp } from './ThreeApp.canvas'
import { App } from './App'

export function Layout() {
  const ref = useRef()
  return (
    <div className={`${styles.eventContainer}`} ref={ref}>
      <ThreeApp eventSource={ref} eventPrefix={'client'} />
      <App />
    </div>
  )
}
