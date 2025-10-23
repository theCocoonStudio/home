import styles from 'website/styles/Nav.module.css'
import LogoPNG from 'website/assets/logo.png'
import { useScroll } from 'src/hooks'
import { useCallback } from 'react'
import { useNavigate } from 'react-router'

export const Logo = ({
  showName,
  scrollContainer,
  clickNavigation,
  pointerEvents,
}) => {
  const { scrollTo } = useScroll(scrollContainer, { smoothTime: 0.1 })
  const scrollHome = useCallback(() => {
    scrollTo(0.0)
  }, [scrollTo])

  const navigate = useNavigate()
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
