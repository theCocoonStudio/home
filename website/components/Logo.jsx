import styles from 'website/styles/Nav.module.css'
import LogoPNG from 'website/assets/logo.png'
import { useScrollControls } from 'src'
import { useCallback } from 'react'
import { useNavigation } from 'website/hooks/useNavigation'

export const Logo = ({ showName, clickNavigation, pointerEvents }) => {
  const { scrollTo } = useScrollControls()
  const scrollHome = useCallback(() => {
    scrollTo(0.0, { smoothTime: 0.1 })
  }, [scrollTo])

  const navigate = useNavigation()
  const navigateHome = useCallback(() => {
    navigate('/')
  }, [navigate])

  const action = clickNavigation ? navigateHome : scrollHome

  return (
    <div className={`${styles.nav}`}>
      <div className={`${styles.inner}`}>
        <div className={`${styles.logoContainer}`}>
          <div
            onClick={action}
            className={`${styles.logo}`}
            style={{
              backgroundSize: 'contain',
              backgroundImage: `url(${LogoPNG})`,
              pointerEvents: pointerEvents ? 'auto' : 'none',
            }}
          />
          <h1
            onClick={action}
            style={{
              pointerEvents: pointerEvents && showName ? 'auto' : 'none',
              opacity: showName ? 'inherit' : '0',
            }}
            className={`${styles.name} changa-one-regular`}
          >
            Izzy Erlich
          </h1>
        </div>
      </div>
    </div>
  )
}
