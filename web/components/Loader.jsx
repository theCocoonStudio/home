import { useProgress } from '@react-three/drei'
import { forwardRef, useEffect, useState } from 'react'
import styles from 'web/styles/Loader.module.css'

export const Loader = forwardRef(function Loader(
  { onReady, ...props },
  forwardedRef,
) {
  const [show, setShow] = useState(true)
  const [timeLeft, setTimeLeft] = useState(true)

  const { progress, active } = useProgress()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimeLeft(false)
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    if (progress >= 100 && !active) {
      setShow(false)
    }
  }, [active, progress])

  useEffect(() => {
    if (!show && !timeLeft) {
      if (typeof onReady === 'function') {
        onReady()
      }
    }
  }, [onReady, show, timeLeft])

  if (show || timeLeft) {
    return (
      <div ref={forwardedRef} className={styles.container} {...props}>
        <div className={styles.loaderContainer}>
          <div className={styles.loader} />
        </div>
        <div className={styles.labelContainer}>
          <div className={`${styles.label} .space-mono-bold`} />
        </div>
        <div className={`${styles.overlay}`} />
      </div>
    )
  }
})
