import styles from 'website/styles/Footer.module.css'
import { ScrollContainer } from './ScrollContainer'

export const Footer = ({ config, scrollContainer, ready, atStartOrFinish }) => {
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.inner}`}>
        <ScrollContainer
          scrollContainer={scrollContainer}
          ready={ready}
          config={config}
          atStartOrFinish={atStartOrFinish}
        />
      </div>
    </div>
  )
}
