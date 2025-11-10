import styles from 'website/styles/Loader.module.css'
import Video from 'website/assets/colors3.mp4'
import { useCallback, useLayoutEffect, useMemo, useRef } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { useTheme } from '../hooks/useTheme'
import { useProgress } from '@react-three/drei'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import { useScrollControls } from 'src'
import { Logo } from './Logo'

export const Loader = ({
  ready,
  atStartOrFinish,
  config: {
    data: {
      markupIds: { loaderVideo, loaderProgress },
    },
    loader: {
      centerLayout,
      titles,
      showName = true,
      clickNavigation = true,
      autoPause = true,
    },
  },
  scrollDownTarget,
  scrollUpTarget,
}) => {
  const {
    lengths: { loaderSize },
  } = useTheme()
  // refs
  const video = useRef()
  const loader = useRef()

  // progress
  const { active, loaded, total } = useProgress()

  // copy
  const prevCopy = useRef({
    scrollCopy: undefined,
    subtitleCopy: undefined,
    titleCopy: undefined,
  })
  const { scrollCopy, titleCopy, subtitleCopy } = useMemo(() => {
    if (atStartOrFinish.either) {
      const { startTitle, endTitle, startDescription, endDescription } =
        titles || {}
      if (atStartOrFinish.start) {
        prevCopy.current.scrollCopy = 'scroll down'
        prevCopy.current.subtitleCopy = startDescription
        prevCopy.current.titleCopy = startTitle
      } else {
        prevCopy.current.scrollCopy = 'scroll up'
        prevCopy.current.subtitleCopy = endDescription
        prevCopy.current.titleCopy = endTitle
      }
    }
    return prevCopy.current
  }, [atStartOrFinish, titles])

  // classes
  const prevStyling = useRef({
    upsideDownClass: undefined,
    transformStyle: undefined,
  })
  const { upsideDownClass, transformStyle } = useMemo(() => {
    if (atStartOrFinish.either) {
      if (atStartOrFinish.start) {
        prevStyling.current.upsideDownClass = ''
        prevStyling.current.transformStyle = 'translateY(200%)'
      } else {
        prevStyling.current.upsideDownClass = styles.upsideDown
        prevStyling.current.transformStyle = 'translateY(-200%)'
      }
    }

    return prevStyling.current
  }, [atStartOrFinish])

  // scroll up/down callback
  const { scrollTo } = useScrollControls()
  const scrollToTarget = useCallback(() => {
    if (atStartOrFinish.either) {
      scrollTo(atStartOrFinish.start ? scrollDownTarget : scrollUpTarget)
    }
  }, [atStartOrFinish, scrollDownTarget, scrollTo, scrollUpTarget])

  // play/pause video as needed
  useLayoutEffect(() => {
    if (atStartOrFinish.either) {
      video.current.play()
    } else {
      if (autoPause) {
        video.current.pause()
      }
    }
  }, [atStartOrFinish, autoPause])
  return (
    <div
      className={'loader-global'}
      ref={loader}
      style={{ opacity: !atStartOrFinish.either && ready ? 0 : 1 }}
    >
      <div className={`${styles.background}`}>
        <video
          autoPlay
          id={loaderVideo}
          muted
          loop
          disablePictureInPicture
          playsInline
          preload='auto'
          className={`${styles.video}`}
          ref={video}
        >
          <source src={Video} type='video/mp4' />
        </video>
        <div className={`${styles.content}`}>
          <Logo
            showName={showName}
            clickNavigation={clickNavigation}
            pointerEvents={atStartOrFinish.either}
          />
          {titles && (
            <div
              className={`${centerLayout ? styles.contentInnerCenter : styles.contentInner}`}
            >
              <h1
                className={`changa-one-regular${!centerLayout ? '-italic' : ''}`}
              >
                {titleCopy}
              </h1>
              <h3 className='raleway'>{subtitleCopy}</h3>
            </div>
          )}
          <div className={`${styles.progress}`} id={loaderProgress}>
            <div
              className={!ready || !atStartOrFinish.either ? '' : styles.float}
            >
              {!ready ? (
                <CircularProgress
                  disableShrink
                  color='common.white'
                  size={loaderSize}
                />
              ) : (
                <div
                  onClick={scrollToTarget}
                  className={`${styles.scrollIcon} ${upsideDownClass}`}
                  style={
                    atStartOrFinish.either
                      ? { pointerEvents: 'auto' }
                      : {
                          pointerEvents: 'none',
                          opacity: 0,
                          transform: transformStyle,
                        }
                  }
                >
                  <KeyboardDoubleArrowDownIcon
                    fontSize='inherit'
                    sx={{
                      color: 'common.white',
                    }}
                  />
                </div>
              )}
            </div>

            <h4
              className='raleway'
              style={{ opacity: atStartOrFinish.either ? '1' : '0' }}
            >
              {!ready
                ? active
                  ? `Loading GPU resources... (${loaded}/${total})`
                  : `Compiling scene...`
                : scrollCopy}
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}
