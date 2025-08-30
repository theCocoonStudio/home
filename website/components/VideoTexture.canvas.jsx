import { SRGBColorSpace } from 'three'
import {
  useEffect,
  forwardRef,
  useRef,
  useImperativeHandle,
  useMemo,
} from 'react'
import { useThree } from '@react-three/fiber'

export const VideoTexture = forwardRef(function VideoTexture(
  {
    video: videoSrc,
    play = true,
    loop = true,
    speed = 1.0,
    fit: { type = 'cover', videoAspect = 1920 / 1080 } = {},
    ...props
  },
  ref,
) {
  const texture = useRef()

  useImperativeHandle(ref, () => texture.current)
  const video = useMemo(
    () =>
      Object.assign(document.createElement('video'), {
        src: videoSrc,
        crossOrigin: 'Anonymous',
        loop,
        muted: true,
        playbackRate: speed,
      }),
    [loop, speed, videoSrc],
  )

  useEffect(() => {
    if (play) {
      video.play()
    } else {
      video.pause()
    }
  }, [play, video])

  const aspect = useThree(({ viewport: { aspect } }) => aspect)

  useEffect(() => {
    if (texture.current && aspect && videoAspect && type === 'cover') {
      const imageAspect = videoAspect
      if (imageAspect > aspect) {
        texture.current.repeat.x = aspect / imageAspect
        texture.current.repeat.y = 1

        texture.current.offset.x = (1 - texture.current.repeat.x) / 2
        texture.current.offset.y = 0
      } else {
        texture.current.repeat.x = 1
        texture.current.repeat.y = imageAspect / aspect

        texture.current.offset.x = 0
        texture.current.offset.y = (1 - texture.current.repeat.y) / 2
      }
    }
  }, [aspect, type, videoAspect, videoSrc]) // keep videoSrc to resize on src change

  useEffect(
    () => () => {
      if (texture.current) {
        texture.current.dispose()
      }
    },
    [],
  )

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
