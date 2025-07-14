import styles from 'website/styles/Footer.module.css'
import { useTheme } from 'website/hooks/useTheme'
import { useMemo } from 'react'
import { useScrollEvent } from 'website/pages/Home/useScrollEvent'
import { useLightbox } from '../hooks/useLightbox'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

export const Footer = ({ config, scrollContainer, ready, openContact }) => {
  const {
    footer: { FooterItemsComponent },
  } = config
  const {
    lengths: { footerHeight, atomicPadding },
  } = useTheme()

  const section = useScrollEvent()

  const { showLightbox } = useLightbox()

  const footerStyles = useMemo(
    () => ({
      height: `${footerHeight}px`,
      right: `calc(8 * ${atomicPadding}px)`,
      left: `calc(8 * ${atomicPadding}px)`,
    }),
    [atomicPadding, footerHeight],
  )

  const socialStyles = useMemo(
    () => ({
      columnGap: `calc(2 * ${atomicPadding}px)`,
      opacity:
        section === 'preScroll' || section === 'postScroll' || showLightbox
          ? '0'
          : '1',
    }),
    [atomicPadding, section, showLightbox],
  )

  const iconStyles = useMemo(
    () => ({
      pointerEvents:
        section === 'preScroll' || section === 'postScroll' ? 'none' : 'auto',
    }),
    [section],
  )

  return (
    <div className={`${styles.footer}`} style={footerStyles}>
      <FooterItemsComponent
        config={config}
        scrollContainer={scrollContainer}
        showLightbox={showLightbox}
        ready={ready}
      />
      <div className={styles.socials} style={socialStyles}>
        <div className={styles.github} style={iconStyles}>
          <GitHubIcon fontSize='36px' />
        </div>
        <div className={styles.linkedin} style={iconStyles}>
          <LinkedInIcon />
        </div>
        <div
          className={styles.contact}
          style={iconStyles}
          onClick={openContact}
        >
          <AlternateEmailIcon />
        </div>
      </div>
    </div>
  )
}
