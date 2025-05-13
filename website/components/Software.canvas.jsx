import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { useTheme } from '../hooks/useTheme'
import { damp } from 'maath/easing'

const _Software = function Software(
  { range, titleId, subtitleId, scrollData },
  forwardedRef,
) {
  const {
    lengths: { navHeight, atomicPadding },
  } = useTheme()

  const [titleElement, setTitleElement] = useState()
  const [subtitleElement, setSubtitleElement] = useState()

  /* use for changing styles based on new width or aspect */
  const resizeCallback = useCallback(() => {
    if (!titleElement) {
      const el = document.getElementById(titleId)
      if (el) {
        setTitleElement(el)
      }
    }
    if (!subtitleElement) {
      const el = document.getElementById(subtitleId)
      if (el) {
        setSubtitleElement(el)
      }
    }
  }, [subtitleElement, subtitleId, titleElement, titleId])

  useEffect(() => {
    if (scrollData.offset < scrollData.eps) {
      if (titleElement) {
        const titleDOMRect = titleElement.getBoundingClientRect()
        const leftTarget = `calc( 50px + (11 * ${atomicPadding}px) + ${1.0} * (50% - 50px - (11 * ${atomicPadding}px) - ${titleDOMRect.width / 2}px) )`
        const topTarget = `calc( ${navHeight / 2}px - ${titleDOMRect.height / 2}px + ${1.0} * (50% - ${titleDOMRect.height / 2}px - ${navHeight / 2}px) )`
        titleElement.style.left = leftTarget
        titleElement.style.top = topTarget
        titleElement.style.opacity = 1
      }
      if (subtitleElement) {
        const subtitleDOMRect = subtitleElement.getBoundingClientRect()
        const leftTarget = `calc( (8 * ${atomicPadding}px) + ${1.0} * (50% - (8 * ${atomicPadding}px) - ${subtitleDOMRect.width / 2}px) )`
        const topTarget = `calc( ${navHeight}px + ${1.0} * (50% - ${navHeight}px) )`
        subtitleElement.style.left = leftTarget
        subtitleElement.style.top = topTarget
        subtitleElement.style.opacity = 1
      }
    }
  }, [
    atomicPadding,
    navHeight,
    range,
    scrollData,
    subtitleElement,
    titleElement,
  ])

  const dampedOffset = useRef(0.0)
  const scrollCallback = useCallback(
    (state, delta, scrollData) => {
      if (titleElement && subtitleElement) {
        const offset = scrollData.range(0, range[1] * 0.1)
        const toDamp = damp(dampedOffset, 'current', offset, 0.03, delta)
        if (toDamp) {
          // title
          titleElement.style.fontSize = `${4 + (1 - dampedOffset.current) * 4}rem`
          const titleDOMRect = titleElement.getBoundingClientRect()
          const leftTarget = `calc( 50px + (11 * ${atomicPadding}px) + ${1.0 - dampedOffset.current} * (50% - 50px - (11 * ${atomicPadding}px) - ${titleDOMRect.width / 2}px) )`
          const topTarget = `calc( ${navHeight / 2}px - ${titleDOMRect.height / 2}px + ${1.0 - dampedOffset.current} * (50% - ${titleDOMRect.height / 2}px - ${navHeight / 2}px) )`
          titleElement.style.left = leftTarget
          titleElement.style.top = topTarget
          // subtitle
          subtitleElement.style.fontSize = `${2.8 + dampedOffset.current * 2}rem`
          const subtitleDOMRect = subtitleElement.getBoundingClientRect()
          const leftTarget2 = `calc( (8 * ${atomicPadding}px) + ${1.0 - dampedOffset.current} * (50% - (8 * ${atomicPadding}px) - ${subtitleDOMRect.width / 2}px) )`
          const topTarget2 = `calc( ${navHeight}px + ${1.0 - dampedOffset.current} * (50% - ${navHeight}px) )`
          subtitleElement.style.left = leftTarget2
          subtitleElement.style.top = topTarget2
          subtitleElement.style.opacity = 1
        }
      }
    },
    [atomicPadding, navHeight, range, subtitleElement, titleElement],
  )
  useImperativeHandle(
    forwardedRef,
    () => ({ resizeCallback, scrollCallback }),
    [resizeCallback, scrollCallback],
  )
}

export const Software = forwardRef(_Software)
