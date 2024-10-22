import { forwardRef, useCallback } from 'react'

import styles from 'web/styles/Footer.module.css'

export const Footer = forwardRef(function Footer(
  { setPause, setMenu, setInfo, ...props },
  forwardRef,
) {
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
  const toggleInfo = useCallback(
    (e) => {
      e.preventDefault()
      setInfo((prev) => !prev)
    },
    [setInfo],
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
        <div onClick={toggleInfo} />
        <div onClick={togglePause} />
        <div onClick={toggleMenu} />
      </div>
    </div>
  )
})
