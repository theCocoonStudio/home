import styles from 'web/styles/FPS.module.css'

export const FPS = ({ id, ...props }) => {
  return (
    <div {...props} className={`${styles.container} space-mono-regular`}>
      <div id={id} className={`${styles.fpsValue}`}>
        --
      </div>
    </div>
  )
}
