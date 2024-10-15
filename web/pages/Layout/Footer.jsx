import { forwardRef } from 'react'

import styles from 'web/styles/Footer.module.css'

export const Footer = forwardRef(function Footer({ ...props }, forwardRef) {
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
        <div />
        <div />
      </div>
      <div id='progress' className={styles.progress}>
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
})
