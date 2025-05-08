import { useMemo } from 'react'

import styles from './Home.styles.module.css'
import Down from '@tabler/icons-react/dist/esm/icons/IconChevronDown'
import Performance from '@tabler/icons-react/dist/esm/icons/IconGauge'
import Settings from '@tabler/icons-react/dist/esm/icons/IconAdjustmentsHorizontal'
import { useTheme } from '../../hooks/useTheme'
import { useScrollEvent } from './useScrollEvent'

export const FooterItems = ({
  config: {
    footer: {
      markupIds: { scrollContainer, fpsContainer },
    },
  },
}) => {
  const preScroll = useScrollEvent('preScroll')

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

  const scrollStyles = useMemo(
    () => ({
      display: preScroll ? 'none' : 'block',
      pointerEvents: preScroll ? 'none' : 'auto',
    }),
    [preScroll],
  )

  const downStyles = useMemo(
    () => ({
      opacity: preScroll ? '0.8' : '0',
      display: preScroll ? 'block' : 'none',
    }),
    [preScroll],
  )

  const settingsStyles = useMemo(
    () => ({
      columnGap: `calc(2 * ${atomicPadding}px)`,
      display: preScroll ? 'none' : 'flex',
    }),
    [atomicPadding, preScroll],
  )
  return (
    <>
      <div className={`${styles.settings}`} style={settingsStyles}>
        <div className={`${styles.icon}`}>
          <Settings size={35} color={black} stroke={2} />
        </div>
        <div className={`${className}`} style={style}>
          <div>
            <Performance size={35} color={black} stroke={2} />
          </div>
          <div className={`${styles.fps}`}>
            <div id={fpsContainer}>--</div>
            <div>FPS</div>
          </div>
        </div>
      </div>
      <div className={`${styles.down}`} style={downStyles}>
        <Down
          size={1 * footerHeight}
          stroke={0.8}
          onClick={() => {
            scrollTo(0.19, 0.25)
          }}
        />
      </div>
      <div
        className={`${styles.scroll}`}
        style={scrollStyles}
        id={scrollContainer}
      />
    </>
  )
}
