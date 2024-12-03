import Balancing from '@tabler/icons-react/dist/esm/icons/IconSwitchHorizontal'
import FPS from '@tabler/icons-react/dist/esm/icons/IconStopwatch'
import styles from 'web/styles/Performance.module.css'

export const Performance = ({ ...props }) => {
  return (
    <div className={`${styles.container} space-mono-regular`} {...props}>
      <div className={`${styles.performance}`}>
        <div id='fps' className={`${styles.fps}`} />
        <div className={`${styles.fpsBorder}`} />
        <div className={`${styles.stats}`}>
          <div>
            <div className={`${styles.fpsThrottle}`}>
              <Balancing size='75%' />
            </div>
            <span>AUTO</span>
          </div>

          <div>
            <div className={`${styles.fpsThrottle}`}>
              <FPS size='75%' />
            </div>
            <span id='fpsValue'>--</span>
            <span>FPS</span>
          </div>
        </div>
      </div>
    </div>
  )
}
