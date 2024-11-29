import { forwardRef, useCallback } from 'react'
import styles from 'web/styles/Footer.module.css'
import { useShowcase } from 'web/pages/Showcase/hooks/useShowcase'

export const Footer = forwardRef(function Footer({ ...props }, forwardRef) {
  const {
    setState: { menu: setMenu, pause: setPause },
  } = useShowcase()

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
        <div id='socialsLabel' className='space-mono-regular'>
          socials
        </div>
      </div>
      <div id='settings'>
        <div />
        <div onClick={togglePause} />
        <div />
        <div onClick={toggleMenu} />

        <div id='settingsLabel' className='space-mono-regular'>
          app controls
        </div>
      </div>
      <div id='pageInfo'>
        <div />
        <div id='performanceContainer' className='space-mono-regular'>
          <div id='performance'>
            <div id='fps' />
            <div id='fpsBorder' />
            <div id='fpsBoost'>boost</div>
            <div id='fpsThrottle'>throttle</div>
            <div id='fpsLabel' className='space-mono-regular'>
              performance
            </div>
          </div>
        </div>

        <div />
        <div />
      </div>
    </div>
  )
})
