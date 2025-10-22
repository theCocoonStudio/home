import styles from 'website/styles/Nav.module.css'
import LogoPNG from 'website/assets/logo.png'

export const Logo = () => {
  return (
    <div className={`${styles.nav}`}>
      <div className={`${styles.inner}`}>
        <div className={`${styles.logoContainer}`}>
          <div
            className={`${styles.logo}`}
            style={{
              backgroundSize: 'contain',
              backgroundImage: `url(${LogoPNG})`,
            }}
          />
          <h1 className={`${styles.name} changa-one-regular`}>Izzy Erlich</h1>
        </div>
      </div>
    </div>
  )
}
