import { useCallback, useMemo } from 'react'
import styles from './Home.styles.module.css'
import { useTheme } from '../../hooks/useTheme'
import { useMenu } from '../../hooks/useMenu'
import { useScrollEvent } from './useScrollEvent'
import { useScroll } from 'src/hooks/useScroll/useScroll'

export const FooterItems = ({
  config: {
    footer: {
      markupIds: { scrollContainer, fpsContainer },
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
}) => {
  const section = useScrollEvent()

  const {
    colors: { white, black },
    lengths: { atomicPadding },
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
      opacity: section === 'preScroll' ? '1' : '0',
      pointerEvents: section === 'preScroll' ? 'auto' : 'none',
    }),
    [section],
  )

  const settingsStyles = useMemo(
    () => ({
      columnGap: `calc(2.5 * ${atomicPadding}px)`,
      opacity:
        section === 'preScroll' || section === 'postScroll' || showLightbox
          ? '0'
          : '1',
    }),
    [atomicPadding, section, showLightbox],
  )

  const { setShowMenu, showMenu } = useMenu()

  const iconStyles = useMemo(
    () => ({
      pointerEvents:
        section === 'preScroll' || section === 'postScroll' ? 'none' : 'auto',
    }),
    [section],
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
            <svg
              viewBox='0,0,48,48'
              xmlns='http://www.w3.org/2000/svg'
              width={36}
              height={36}
              strokeWidth={3}
              transform='rotate(0) matrix(1 0 0 1 0 0)'
            >
              <g fill='none' strokeLinejoin='round' strokeWidth={3}>
                <path
                  fill={'none'}
                  stroke={black}
                  d='M36.686 15.171C37.9364 16.9643 38.8163 19.0352 39.2147 21.2727H44V26.7273H39.2147C38.8163 28.9648 37.9364 31.0357 36.686 32.829L40.0706 36.2137L36.2137 40.0706L32.829 36.686C31.0357 37.9364 28.9648 38.8163 26.7273 39.2147V44H21.2727V39.2147C19.0352 38.8163 16.9643 37.9364 15.171 36.686L11.7863 40.0706L7.92939 36.2137L11.314 32.829C10.0636 31.0357 9.18372 28.9648 8.78533 26.7273H4V21.2727H8.78533C9.18372 19.0352 10.0636 16.9643 11.314 15.171L7.92939 11.7863L11.7863 7.92939L15.171 11.314C16.9643 10.0636 19.0352 9.18372 21.2727 8.78533V4H26.7273V8.78533C28.9648 9.18372 31.0357 10.0636 32.829 11.314L36.2137 7.92939L40.0706 11.7863L36.686 15.171Z'
                />
                <path
                  fill={'none'}
                  stroke={black}
                  d='M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z'
                />
              </g>
            </svg>
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
      </div>
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
