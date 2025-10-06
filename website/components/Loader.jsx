import styles from 'website/styles/Loader.module.css'
import Video from 'website/assets/colors3.mp4'
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { useStatelessFrameCallback } from 'src/hooks/useFrameCallback/useFrameCallback'
import CircularProgress from '@mui/material/CircularProgress'
import { useTheme } from '../hooks/useTheme'
import { useProgress } from '@react-three/drei'

export const Loader = ({ ready }) => {
  const {
    lengths: { loaderSize },
  } = useTheme()
  // refs
  const video = useRef()
  const loader = useRef()

  // mount/unmount video state
  const [mountVideo, setMountVideo] = useState(!ready)

  // unmount callback
  const onReady = useCallback(() => {
    const opacity = window.getComputedStyle(loader.current).opacity
    const runNextFrame = Number(opacity) > 0
    if (!runNextFrame) {
      setMountVideo(false)
    }

    return runNextFrame
  }, [])
  const unmountCallback = useStatelessFrameCallback(onReady)

  // on ready change: if !ready, mount video; if ready, unmount once opacity = 0
  useLayoutEffect(() => {
    if (ready) {
      unmountCallback()
    } else {
      setMountVideo(true)
    }
  }, [ready, unmountCallback])

  // if mounted, initialize video
  useEffect(() => {
    if (mountVideo) {
      video.current.defaultPlaybackRate = '2.0'
      video.current.playbackRate = '2.0'
      video.current.play()
    }
  }, [mountVideo])

  // progress
  const { active, loaded, total } = useProgress()

  return (
    mountVideo && (
      <div className={ready ? 'loader loaderReady' : 'loader'} ref={loader}>
        <div className={`${styles.background}`}>
          <video
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
          )
          <div className={`${styles.content}`}>
            <div className={`${styles.contentInner}`}>
              <h1 className='changa-one-regular'>Izzy Erlich</h1>
              <h3 className='raleway'>software and stuff.</h3>
            </div>
            <div className={`${styles.progress}`}>
              <CircularProgress
                disableShrink
                color='common.white'
                size={loaderSize}
              />
              <h4 className='raleway'>
                {active
                  ? `Loading GPU resources... (${loaded}/${total})`
                  : `Compiling scene...`}
              </h4>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
