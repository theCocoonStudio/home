import styles from 'website/styles/Footer.module.css'

export const Footer = ({
  config,
  scrollContainer,
  ready,
  openContact,
  atStartOrFinish,
}) => {
  const {
    footer: { FooterComponent },
  } = config

  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.inner}`}>
        <FooterComponent
          scrollContainer={scrollContainer}
          ready={ready}
          openContact={openContact}
          config={config}
          atStartOrFinish={atStartOrFinish}
        />
      </div>
    </div>
  )
}
