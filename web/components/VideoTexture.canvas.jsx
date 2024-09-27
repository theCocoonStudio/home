import { SRGBColorSpace } from 'three'
import {
  useEffect,
  forwardRef,
  useRef,
  useImperativeHandle,
  useMemo,
} from 'react'

export const VideoTexture = forwardRef(function VideoTexture(
  { video: videoSrc, play = true, ...props },
  ref,
) {
  const texture = useRef()

  useImperativeHandle(ref, () => texture.current)
  const video = useMemo(
    () =>
      Object.assign(document.createElement('video'), {
        src: videoSrc,
        crossOrigin: 'Anonymous',
        loop: true,
        muted: true,
      }),
    [videoSrc],
  )

  useEffect(() => {
    if (play) {
      video.play()
    } else {
      video.pause()
    }
  }, [play, video])

  return (
    <videoTexture
      ref={texture}
      attach='map'
      args={[video]}
      colorSpace={SRGBColorSpace}
      {...props}
    />
  )
})
