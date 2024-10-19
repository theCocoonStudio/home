import { forwardRef, useCallback } from 'react'

import styles from 'web/styles/Footer.module.css'

export const Footer = forwardRef(function Footer(
  { setPause, setMenu, ...props },
  forwardRef,
) {
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
      </div>
      <div id='pageInfo'></div>
      <div id='settings'>
        <div />
        <div onClick={togglePause} />
        <div onClick={toggleMenu} />
      </div>
    </div>
  )
})
