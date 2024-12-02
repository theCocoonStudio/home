import styles from 'web/styles/Performance.module.css'

export const Performance = ({ ...props }) => {
  return (
    <div className={`${styles.container} space-mono-regular`} {...props}>
      <div className={`${styles.performance}`}>
        <div id='fps' className={`${styles.fps}`} />
        <div className={`${styles.fpsBorder}`} />
        <div className={`${styles.fpsBoost}`}>boost</div>
        <div className={`${styles.fpsThrottle}`}>throttle</div>
      </div>
    </div>
  )
}
