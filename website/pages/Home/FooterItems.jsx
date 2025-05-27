import { useCallback, useMemo } from 'react'
import styles from './Home.styles.module.css'

import { useTheme } from '../../hooks/useTheme'
import { useScrollEvent } from './useScrollEvent'
import { useScroll } from 'src/hooks/useScroll/useScroll'

export const FooterItems = ({
  config: {
    footer: {
      markupIds: { scrollContainer, fpsContainer },
    },
    content: {
      sections: {
        software: { items },
      },
    },
  },
  scrollContainer: scrollElement,
}) => {
  const preScroll = useScrollEvent('preScroll')

  const {
    lengths: { atomicPadding },
    utilReturn: { className, style },
  } = useTheme(
    'robotoMono',
    600,
    () => ({
      pointerEvents: preScroll ? 'none' : 'auto',
    }),
    styles.performance,
  )

  const scrollStyles = useMemo(
    () => ({
      opacity: preScroll ? '0' : '.8',
      pointerEvents: preScroll ? 'none' : 'auto',
    }),
    [preScroll],
  )

  const downStyles = useMemo(
    () => ({
      opacity: preScroll ? '0.8' : '0',
      pointerEvents: preScroll ? 'auto' : 'none',
    }),
    [preScroll],
  )

  const settingsStyles = useMemo(
    () => ({
      columnGap: `calc(2.5 * ${atomicPadding}px)`,
      opacity: preScroll ? '0' : '.8',
    }),
    [atomicPadding, preScroll],
  )

  const iconStyles = useMemo(
    () => ({
      pointerEvents: preScroll ? 'none' : 'auto',
    }),
    [preScroll],
  )

  const scrollTo = useScroll(scrollElement)

  const scrollDown = useCallback(() => {
    scrollTo(items[0].range[0] + items[0].range[1] / 2)
  }, [items, scrollTo])
  return (
    <>
      <div className={`${styles.settings}`} style={settingsStyles}>
        <div className={`${styles.icon}`} style={iconStyles}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='1em'
            fill='currentColor'
            viewBox='0 0 512 512'
          >
            <path d='M 0 416 Q 1 431 16 432 L 82 432 L 82 432 Q 88 460 109 478 Q 130 495 160 496 Q 190 495 211 478 Q 232 460 238 432 L 496 432 L 496 432 Q 511 431 512 416 Q 511 401 496 400 L 238 400 L 238 400 Q 232 372 211 354 Q 190 337 160 336 Q 130 337 109 354 Q 88 372 82 400 L 16 400 L 16 400 Q 1 401 0 416 L 0 416 Z M 112 416 Q 113 389 136 374 Q 160 362 184 374 Q 207 389 208 416 Q 207 443 184 458 Q 160 470 136 458 Q 113 443 112 416 L 112 416 Z M 304 256 Q 305 229 328 214 Q 352 202 376 214 Q 399 229 400 256 Q 399 283 376 298 Q 352 310 328 298 Q 305 283 304 256 L 304 256 Z M 352 176 Q 322 177 301 194 L 301 194 L 301 194 Q 280 212 274 240 L 16 240 L 16 240 Q 1 241 0 256 Q 1 271 16 272 L 274 272 L 274 272 Q 280 300 301 318 Q 322 335 352 336 Q 382 335 403 318 Q 424 300 430 272 L 496 272 L 496 272 Q 511 271 512 256 Q 511 241 496 240 L 430 240 L 430 240 Q 424 212 403 194 Q 382 177 352 176 L 352 176 Z M 192 144 Q 165 143 150 120 Q 138 96 150 72 Q 165 49 192 48 Q 219 49 234 72 Q 246 96 234 120 Q 219 143 192 144 L 192 144 Z M 270 80 Q 264 52 243 34 L 243 34 L 243 34 Q 222 17 192 16 Q 162 17 141 34 Q 120 52 114 80 L 16 80 L 16 80 Q 1 81 0 96 Q 1 111 16 112 L 114 112 L 114 112 Q 120 140 141 158 Q 162 175 192 176 Q 222 175 243 158 Q 264 140 270 112 L 496 112 L 496 112 Q 511 111 512 96 Q 511 81 496 80 L 270 80 L 270 80 Z' />
          </svg>
        </div>
        <div className={`${className}`} style={style}>
          <div className={`${styles.fps}`}>
            <span>&#123;&nbsp;fps:&nbsp;</span>
            <span id={fpsContainer}>--</span>
            <span>&nbsp;&#125;</span>
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
      />
    </>
  )
}
