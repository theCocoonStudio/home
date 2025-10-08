import styles from 'website/styles/Loader.module.css'
import Video from 'website/assets/colors3.mp4'
import { useRef } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { useTheme } from '../hooks/useTheme'
import { useProgress } from '@react-three/drei'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'

export const Loader = ({
  ready,
  hasScrolled,
  config: {
    data: {
      markupIds: { loaderVideo },
    },
  },
}) => {
  const {
    lengths: { loaderSize },
  } = useTheme()
  // refs
  const video = useRef()
  const loader = useRef()

  // progress
  const { active, loaded, total } = useProgress()

  return (
    <div
      className={'loader-global'}
      ref={loader}
      style={{ opacity: hasScrolled && ready ? 0 : 1 }}
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
          <div className={`${styles.contentInner}`}>
            <h1 className='changa-one-regular'>Izzy Erlich</h1>
            <h3 className='raleway'>software and stuff.</h3>
          </div>
          <div className={`${styles.progress}`}>
            <div className={!ready ? '' : styles.float}>
              {!ready ? (
                <CircularProgress
                  disableShrink
                  color='common.white'
                  size={loaderSize}
                />
              ) : (
                <KeyboardDoubleArrowDownIcon
                  fontSize='inherit'
                  sx={{
                    color: 'common.white',
                  }}
                />
              )}
            </div>

            <h4 className='raleway'>
              {!ready
                ? active
                  ? `Loading GPU resources... (${loaded}/${total})`
                  : `Compiling scene...`
                : 'Scroll down'}
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}
