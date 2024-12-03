import { forwardRef, useCallback } from 'react'
import styles from 'web/styles/Footer.module.css'
import { ButtonGroup } from 'web/components/ButtonGroup'
import { useShowcase } from 'web/pages/Showcase/hooks/useShowcase'
import { Performance } from '../../components/Performance'
import Showcase from '@tabler/icons-react/dist/esm/icons/IconDeviceTvOld'

export const Footer = forwardRef(function Footer({ ...props }, forwardRef) {
  const {
    state: { pause },
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
    <div ref={forwardRef} {...props} className={`${styles.footer}`}>
      <ButtonGroup
        name='socials'
        labels={['linkedin', 'github', 'instagram', 'youtube']}
      >
        <div />
        <div />
        <div />
        <div />
      </ButtonGroup>

      <div className={`${styles.settings}`}>
        <ButtonGroup name='showcase' className={`${styles.activeApp}`}>
          <Showcase size='100%' stroke={1} />
        </ButtonGroup>
        <div className={`${styles.border}`} />
        <ButtonGroup
          name='controls'
          labels={['prev', pause ? 'play' : 'pause', 'next', 'settings']}
        >
          <div />
          <div onClick={togglePause} />
          <div />
          <div onClick={toggleMenu} />
        </ButtonGroup>
      </div>
      <ButtonGroup name='performance' widths={[4]}>
        <Performance />
      </ButtonGroup>
    </div>
  )
})
