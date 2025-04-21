import styles from 'website/styles/Footer.module.css'
import { useTheme } from 'website/hooks/useTheme'
import { useMemo } from 'react'
import { LinkedInIcon } from 'website/components/LinkedInIcon'
import { GithubIcon } from 'website/components/GithubIcon'
import { YoutubeIcon } from 'website/components/YoutubeIcon'
import { InstagramIcon } from 'website/components/InstagramIcon'

export const Footer = ({ config }) => {
  const {
    footer: { ViewComponent },
  } = config
  const {
    lengths: { footerHeight, atomicPadding },
    colors: { black },
  } = useTheme()

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
    }),
    [atomicPadding],
  )

  return (
    <div className={`${styles.footer}`} style={footerStyles}>
      <div className={styles.socials} style={socialStyles}>
        <div className={styles.github}>{<GithubIcon color={black} />}</div>
        <div className={styles.linkedin}>{<LinkedInIcon color={black} />}</div>
        <div className={styles.youtube}>{<YoutubeIcon color={black} />}</div>
        <div className={styles.instagram}>
          {<InstagramIcon color={black} />}
        </div>
      </div>
      <ViewComponent config={config} />
    </div>
  )
}
