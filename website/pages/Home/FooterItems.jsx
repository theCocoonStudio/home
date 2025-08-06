import { useCallback, useMemo } from 'react'
import styles from './Home.styles.module.css'
import { useTheme } from '../../hooks/useTheme'
import { useMenu } from '../../hooks/useMenu'
import { useScrollEvent } from './useScrollEvent'
import { useScroll } from 'src/hooks/useScroll/useScroll'
import CircularProgress from '@mui/material/CircularProgress'
import { raleway } from '../../utils/styles'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'

export const FooterItems = ({
  config: {
    footer: {
      markupIds: { scrollContainer, fpsContainer, progressContainer },
    },
    content: {
      itemCount,
      sections: {
        software: { items },
      },
    },
    scroll: {
      ranges: { items: scrollItemsRange },
    },
  },
  scrollContainer: scrollElement,
  showLightbox,
  ready,
}) => {
  const section = useScrollEvent()

  const {
    utilReturn: { className, style },
  } = useTheme(
    'raleway',
    600,
    false,
    () => ({
      pointerEvents:
        section === 'preScroll' || section === 'postScroll' ? 'none' : 'auto',
    }),
    styles.performance,
  )

  const scrollStyles = useMemo(
    () => ({
      opacity:
        section === 'preScroll' || section === 'postScroll' || showLightbox
          ? '0'
          : '1',
      pointerEvents:
        section === 'preScroll' || section === 'postScroll' ? 'none' : 'auto',
    }),
    [section, showLightbox],
  )

  const downStyles = useMemo(
    () => ({
      opacity: section === 'preScroll' && ready ? '1' : '0',
      pointerEvents: section === 'preScroll' && ready ? 'auto' : 'none',
    }),
    [ready, section],
  )

  const settingsStyles = useMemo(
    () => ({
      opacity:
        section === 'preScroll' || section === 'postScroll' || showLightbox
          ? '0'
          : '1',
    }),
    [section, showLightbox],
  )

  const { setShowMenu, showMenu } = useMenu()

  const iconStyles = useMemo(
    () => ({
      pointerEvents:
        section === 'preScroll' || section === 'postScroll' ? 'none' : 'auto',
    }),
    [section],
  )

  const { style: instructionStyle, className: instructionClass } = useMemo(
    () => raleway(400, false, undefined, styles.instruction),
    [],
  )
  const scrollTo = useScroll(scrollElement)

  const scrollItemStyles = useMemo(() => {}, [])

  const scrollItems = useMemo(() => {
    const items = []
    for (let i = 0; i < itemCount; i++) {
      const target =
        scrollItemsRange[0] +
        0.5 * (scrollItemsRange[1] / itemCount) +
        i * (scrollItemsRange[1] / itemCount)
      items[i] = (
        <div
          key={`scrollItem-${i}`}
          style={scrollItemStyles}
          onClick={() => {
            scrollTo(target)
          }}
        />
      )
    }
    return items
  }, [itemCount, scrollItemStyles, scrollItemsRange, scrollTo])

  const scrollDown = useCallback(() => {
    scrollTo(items[0].range[0] + items[0].range[1] / 2)
  }, [items, scrollTo])

  const toggleMenu = useCallback(() => {
    setShowMenu((prev) => !prev)
  }, [setShowMenu])
  return (
    <>
      <div className={`${styles.settings}`} style={settingsStyles}>
        <div
          className={`${styles.icon}`}
          style={iconStyles}
          onClick={toggleMenu}
        >
          <div>
            <SettingsApplicationsIcon />
            {showMenu && <div className={styles.active} />}
          </div>
        </div>
        <div className={`${className}`} style={style}>
          <div className={`${styles.fps}`}>
            <span id={fpsContainer}>--</span>
            <span>&nbsp;fps</span>
          </div>
        </div>
      </div>
      <div className={`${styles.down}`} style={downStyles} onClick={scrollDown}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='1em'
          fill='currentColor'
          viewBox='0 0 512 512'
        >
          <path d='M 269.2206572769953 384.60093896713613 Q 256 396.61971830985914 242.7793427230047 384.60093896713613 L 12.018779342723004 153.84037558685446 L 12.018779342723004 153.84037558685446 Q 0 140.61971830985917 12.018779342723004 127.39906103286386 Q 25.239436619718308 115.38028169014085 38.460093896713616 127.39906103286386 L 256 343.73708920187795 L 256 343.73708920187795 L 473.5399061032864 127.39906103286386 L 473.5399061032864 127.39906103286386 Q 486.76056338028167 115.38028169014085 499.981220657277 127.39906103286386 Q 512 140.61971830985917 499.981220657277 153.84037558685446 L 269.2206572769953 384.60093896713613 L 269.2206572769953 384.60093896713613 Z' />
        </svg>
        <div style={instructionStyle} className={instructionClass}>
          scroll
        </div>
      </div>
      {!ready && (
        <div className={`${styles.progress}`}>
          <div id={progressContainer} className={instructionClass}>
            loading GPU resources...
          </div>
          <CircularProgress disableShrink color='common.black' size={50} />
        </div>
      )}
      <div
        className={`${styles.scroll}`}
        style={scrollStyles}
        id={scrollContainer}
      >
        {scrollItems}
      </div>
    </>
  )
}
