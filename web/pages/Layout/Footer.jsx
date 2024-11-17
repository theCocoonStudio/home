import { forwardRef, useCallback } from 'react'

import styles from 'web/styles/Footer.module.css'
import { usePage } from '../../hooks/usePage'

export const Footer = forwardRef(function Footer({ ...props }, forwardRef) {
  const {
    setState: { menu: setMenu, pause: setPause },
  } = usePage()

  // TODO: transition API
  const toggleMenu = useCallback(
    (e) => {
      e.preventDefault()
      setMenu((prev) => !prev)
    },
    [setMenu],
  )

  const togglePause = useCallback(
    (e) => {
      e.preventDefault()
      setPause((prev) => !prev)
    },
    [setPause],
  )

  return (
    <div ref={forwardRef} {...props} className={`${styles.footer} content`}>
      <div id='socials'>
        <div />
        <div />
        <div />
        <div />
      </div>
      <div id='settings'>
        <div />
        <div onClick={togglePause} />
        <div />
        <div onClick={toggleMenu} />
      </div>
      <div id='pageInfo'>
        <div id='performanceContainer'>
          <div id='performance'>
            <div id='fps' />
            <div id='fpsBorder' />
          </div>
        </div>
        <div />
        <div />
        <div />
      </div>
    </div>
  )
})
