import { forwardRef } from 'react'
import styles from 'web/styles/Loader.module.css'

export const Loader = forwardRef(function Loader({ ...props }, forwardedRef) {
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
})
