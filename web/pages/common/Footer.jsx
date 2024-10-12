import { forwardRef, useEffect, useRef } from 'react'
import { usePage } from '../../hooks/usePage'
import styles from 'web/styles/Footer.module.css'

export const Footer = forwardRef(function Footer({ ...props }, forwardRef) {
  const socials1 = useRef()
  const socials2 = useRef()
  const socials3 = useRef()
  const settings1 = useRef()

  usePage('footer', { socials1, socials2, socials3, settings1 })

  return (
    <div ref={forwardRef} {...props} className={`${styles.footer} content`}>
      <div id='socials'>
        <div ref={socials1} />
        <div ref={socials2} />
        <div ref={socials3} />
      </div>
      <div id='pageInfo'></div>
      <div id='settings'>
        <div />
        <div />
        <div ref={settings1} />
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
