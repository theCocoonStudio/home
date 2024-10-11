import { forwardRef, useRef } from 'react'
import { usePage } from '../../hooks/usePage'

export const Footer = forwardRef(function Footer({ ...props }, forwardRef) {
  const socials1 = useRef()
  const socials2 = useRef()
  const socials3 = useRef()
  const settings1 = useRef()

  usePage('footer', { socials1, socials2, socials3, settings1 })

  return (
    <div ref={forwardRef} {...props}>
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
      <div id='progress'>
        <div className='complete' />
        <div className='complete' />
        <div className='current' />
        <div />
        <div />
      </div>
    </div>
  )
})
