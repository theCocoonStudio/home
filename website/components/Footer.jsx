import styles from 'website/styles/Footer.module.css'

export const Footer = ({ config, scrollContainer, ready, atStartOrFinish }) => {
  const {
    footer: { FooterComponent },
  } = config

  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.inner}`}>
        <FooterComponent
          scrollContainer={scrollContainer}
          ready={ready}
          config={config}
          atStartOrFinish={atStartOrFinish}
        />
      </div>
    </div>
  )
}
