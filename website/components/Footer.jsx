import styles from 'website/styles/Footer.module.css'
import { useTheme } from 'website/hooks/useTheme'
import { useMemo } from 'react'
import { LinkedInIcon } from 'website/components/LinkedInIcon'
import { GithubIcon } from 'website/components/GithubIcon'
import { YoutubeIcon } from 'website/components/YoutubeIcon'
import { InstagramIcon } from 'website/components/InstagramIcon'
import Performance from '@tabler/icons-react/dist/esm/icons/IconGauge'
import Settings from '@tabler/icons-react/dist/esm/icons/IconAdjustmentsHorizontal'

export const Footer = () => {
  const {
    lengths: { footerHeight, atomicPadding },
    colors: { black },
    utilReturn: { className, style },
  } = useTheme(
    'orbitron',
    600,
    ({ lengths: { atomicPadding } }) => ({
      columnGap: `calc(2 * ${atomicPadding}px)`,
    }),
    styles.performance,
  )

  const settingsStyles = useMemo(
    () => ({
      left: `calc(8 * ${atomicPadding}px)`,
      columnGap: `calc(2 * ${atomicPadding}px)`,
    }),
    [atomicPadding],
  )

  const footerStyles = useMemo(
    () => ({
      height: `${footerHeight}px`,
    }),
    [footerHeight],
  )

  const socialStyles = useMemo(
    () => ({
      right: `calc(8 * ${atomicPadding}px)`,
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
      <div className={`${styles.settings}`} style={settingsStyles}>
        <div className={`${styles.icon}`}>
          <Settings size={35} color={black} stroke={2} />
        </div>
        <div className={`${className}`} style={style}>
          <div>
            <Performance size={35} color={black} stroke={2} />
          </div>
          <div className={`${styles.fps}`}>
            <div id='fps-container'>--</div>
            <div>FPS</div>
          </div>
        </div>
      </div>
      <div className={`${styles.scroll}`} id='scroll-container' />
    </div>
  )
}
