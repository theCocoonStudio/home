import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react'

const _Photography = function PhotographyAnimation(
  { config, setReady },
  forwardedRef,
) {
  const resizeCallback = useCallback(() => {}, [])
  const scrollCallback = useCallback(() => {}, [])

  const activeItemIndexRef = useRef(0)
  const photographyButtonVisibleRef = useRef(false)
  const photoSizesPxRef = useRef([])

  useImperativeHandle(
    forwardedRef,
    () => ({
      resizeCallback,
      scrollCallback,
      activeItemIndexRef,
      photographyButtonVisibleRef,
    }),
    [resizeCallback, scrollCallback],
  )

  return <></>
}

export const PhotographyAnimation = forwardRef(_Photography)
