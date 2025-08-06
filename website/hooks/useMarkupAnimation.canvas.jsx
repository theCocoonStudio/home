import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useTheme } from './useTheme'
import { damp } from 'maath/easing'
import { Color, MathUtils } from 'three'
import { useThree } from '@react-three/fiber'

export const useMarkupAnimation = ({
  softwareItems,
  blogItems,
  itemDescriptionElement,
  titleElement,
  subtitleElement,
  subtitleTextElement,
  descriptionElement,
  photographyButtonElement,
  softwareRef,
  photographyRef,
  blogRef,
  scrollData,
  subtitleSizeInitial = 2.8,
  subtitleSizeInitialMd = 2.4,
  subtitleSizeInitialSm = 2,
  subtitleSizeFinal = 9,
  subtitleSizeFinalMd = 5.5,
  subtitleSizeFinalSm = 4,
  titleSizeInitial = 8,
  titleSizeInitialMd = 6.5,
  titleSizeInitialSm = 5,
  titleSizeFinal = 3,
  titleSizeFinalMobileMd = 2.4,
  titleSizeFinalMobileSm = 2.0,
  showLightbox,
}) => {
  const {
    lengths: { navHeight, atomicPadding },
    colors,
  } = useTheme()

  const titleInitialized = useRef(false)
  const itemDescriptionVisible = useRef(false)
  const photographyButtonVisible = useRef(false)
  const dampedOffset = useRef(0.0)
  const dampedOffset2 = useRef(0.0)
  const subtitleText = useRef('software and stuff')
  const white = useRef(new Color(colors.white))
  const black = useRef(new Color(colors.black))
  const color = useRef(new Color())

  useEffect(() => {
    if (showLightbox) {
      photographyButtonElement.style.opacity = 0
    } else if (photographyButtonVisible.current === true) {
      photographyButtonElement.style.opacity = 1
    }
  }, [photographyButtonElement, showLightbox])

  const { width } = useThree(({ size }) => size)
  const {
    titleLeftFinal,
    titleFinalSize,
    titleInitialSize,
    subtitleInitialSize,
    subtitleLeftFinal,
    subtitleFinalSize,
  } = useMemo(() => {
    const titleLeftFinal =
      width > 768
        ? `(50px + (10 * ${atomicPadding}px))`
        : width > 450
          ? `(50px + (5 * ${atomicPadding}px))`
          : `(50px + (2 * ${atomicPadding}px))`
    const titleFinalSize =
      width > 768
        ? titleSizeFinal
        : width > 450
          ? titleSizeFinalMobileMd
          : titleSizeFinalMobileSm
    const titleInitialSize =
      width > 768
        ? titleSizeInitial
        : width > 450
          ? titleSizeInitialMd
          : titleSizeInitialSm
    const subtitleInitialSize =
      width > 768
        ? subtitleSizeInitial
        : width > 450
          ? subtitleSizeInitialMd
          : subtitleSizeInitialSm
    const subtitleLeftFinal =
      width > 768
        ? `(8 * ${atomicPadding}px)`
        : width > 450
          ? `(4 * ${atomicPadding}px)`
          : `(2 * ${atomicPadding}px)`
    const subtitleFinalSize =
      width > 768
        ? subtitleSizeFinal
        : width > 450
          ? subtitleSizeFinalMd
          : subtitleSizeFinalSm
    return {
      titleLeftFinal,
      titleFinalSize,
      titleInitialSize,
      subtitleInitialSize,
      subtitleLeftFinal,
      subtitleFinalSize,
    }
  }, [
    atomicPadding,
    subtitleSizeFinal,
    subtitleSizeFinalMd,
    subtitleSizeFinalSm,
    subtitleSizeInitial,
    subtitleSizeInitialMd,
    subtitleSizeInitialSm,
    titleSizeFinal,
    titleSizeFinalMobileMd,
    titleSizeFinalMobileSm,
    titleSizeInitial,
    titleSizeInitialMd,
    titleSizeInitialSm,
    width,
  ])

  const setTitlePositions = useCallback(
    (rect, rect2, preScroll = true) => {
      const titleLeftInitial = `(50% - ${rect.width / 2}px)`

      const titleTopInitial = `(50% - ${rect.height}px)`
      const titleTopFinal = `(${navHeight / 2}px - ${rect.height / 2}px)`

      const subtitleLeftInitial = `50%`

      const subtitleTopInitial = `50%`
      const subtitleTopFinal = `  ${navHeight}px`

      let leftTarget, leftTarget2, topTarget, topTarget2
      if (preScroll) {
        leftTarget = `calc(${titleLeftInitial} + ${dampedOffset.current} * (${titleLeftFinal} - ${titleLeftInitial}) )`
        topTarget = `calc( ${titleTopInitial} + ${dampedOffset.current} * (${titleTopFinal} - ${titleTopInitial}) )`
        leftTarget2 = `calc(${subtitleLeftInitial} + ${dampedOffset.current} * (${subtitleLeftFinal} - ${subtitleLeftInitial}) )`
        topTarget2 = `calc( ${subtitleTopInitial} + ${dampedOffset.current} * (${subtitleTopFinal} - ${subtitleTopInitial}) )`
      } else {
        leftTarget = `calc(${titleLeftFinal} + ${dampedOffset2.current} * (${titleLeftInitial} - ${titleLeftFinal}) )`
        topTarget = `calc( ${titleTopFinal} + ${dampedOffset2.current} * (${titleTopInitial} - ${titleTopFinal}) )`
        leftTarget2 = `calc(${subtitleLeftFinal} + ${dampedOffset2.current} * (${subtitleLeftInitial} - ${subtitleLeftFinal}) )`
        topTarget2 = `calc( ${subtitleTopFinal} + ${dampedOffset2.current} * (${subtitleTopInitial} - ${subtitleTopFinal}) )`
      }
      titleElement.style.left = leftTarget
      titleElement.style.top = topTarget
      subtitleElement.style.left = leftTarget2
      subtitleElement.style.top = topTarget2
    },
    [
      navHeight,
      subtitleElement,
      subtitleLeftFinal,
      titleElement,
      titleLeftFinal,
    ],
  )
  // runs once on first render
  useEffect(() => {
    if (scrollData.offset < scrollData.eps && !titleInitialized.current) {
      titleInitialized.current = true
      /* remove initial transforms */
      titleElement.style.transform = 'none'
      subtitleElement.style.transform = 'none'
      /* titles */
      // font size
      titleElement.style.fontSize = `${titleInitialSize + dampedOffset.current * (titleFinalSize - titleInitialSize)}rem`
      subtitleElement.style.fontSize = `${subtitleInitialSize + dampedOffset.current * (subtitleFinalSize - subtitleInitialSize)}rem`
      // set positions
      const titleDOMRect = titleElement.getBoundingClientRect()
      const subtitleDOMRect = subtitleElement.getBoundingClientRect()
      setTitlePositions(titleDOMRect, subtitleDOMRect)

      // reveal
      titleElement.style.opacity = 1
      subtitleElement.style.opacity = 1

      /* description */
      descriptionElement.style.opacity = MathUtils.inverseLerp(
        0.6,
        1,
        dampedOffset.current,
      )
    }
  }, [
    atomicPadding,
    descriptionElement,
    navHeight,
    scrollData,
    setTitlePositions,
    subtitleElement,
    subtitleSizeFinal,
    subtitleInitialSize,
    titleElement,
    titleSizeFinal,
    titleSizeFinalMobileMd,
    titleSizeFinalMobileSm,
    width,
    titleInitialSize,
    titleFinalSize,
    subtitleFinalSize,
  ])

  const scrollCallback = useCallback(
    (state, delta, scrollData, scrollRanges, tailFrames, isResize) => {
      /* itemDescription */
      // if in software or blog item focus range, show itemDescription
      if (softwareRef.current.itemDescriptionVisibleRef.current) {
        if (!itemDescriptionVisible.current) {
          const item =
            softwareItems[softwareRef.current.activeItemIndexRef.current]
          itemDescriptionElement.children[0].children[0].innerText = item.title
          itemDescriptionElement.children[0].children[1].innerText = item.date
          itemDescriptionElement.children[0].children[2].children[0].innerText =
            item.description
          itemDescriptionElement.style.opacity = 1
          itemDescriptionElement.style.pointerEvents = 'auto'
          itemDescriptionVisible.current = true
        }
      } else if (blogRef.current.itemDescriptionVisibleRef.current) {
        if (!itemDescriptionVisible.current) {
          const item = blogItems[blogRef.current.activeItemIndexRef.current]
          itemDescriptionElement.children[0].children[0].innerText = item.title
          itemDescriptionElement.children[0].children[1].innerText = item.date
          itemDescriptionElement.children[0].children[2].children[0].innerText =
            item.description
          itemDescriptionElement.style.opacity = 1
          itemDescriptionElement.style.pointerEvents = 'auto'
          itemDescriptionVisible.current = true
        }
      } else {
        // else, hide itemDescription
        if (itemDescriptionVisible.current) {
          itemDescriptionElement.style.opacity = 0
          itemDescriptionElement.style.pointerEvents = 'none'
          itemDescriptionVisible.current = false
        }
      }
      /* photographyButton */
      // if in photography focus range, show software photographyButton
      if (photographyRef.current?.photographyButtonVisibleRef.current) {
        if (!photographyButtonVisible.current) {
          const { width, top } =
            photographyRef.current.photoSizesPxRef.current[
              photographyRef.current.activeItemIndexRef.current
            ]
          photographyButtonElement.style.width = `${Math.round(width)}px`
          photographyButtonElement.style.top = `${Math.round(top)}px`
          photographyButtonElement.style.opacity = 1
          photographyButtonElement.style.pointerEvents = 'auto'
          photographyButtonVisible.current = true
        }
      } else {
        // else, hide photographyButton
        if (photographyButtonVisible.current) {
          photographyButtonElement.style.opacity = 0
          photographyButtonElement.style.pointerEvents = 'none'
          photographyButtonVisible.current = false
        }
      }

      /* title elements styling, subtitle text */

      if (titleElement && subtitleElement && descriptionElement) {
        const offset = scrollRanges.startSoftwareOffset
        const offset2 = scrollRanges.postScrollAnimationOffset

        // subtitle text
        let subtitle
        if (offset < 0.5 + scrollData.eps) {
          subtitle = 'software and stuff'
        } else if (scrollRanges.softwareVisible) {
          subtitle = 'SOFTWARE'
        } else if (scrollRanges.photographyVisible) {
          subtitle = 'PHOTOGRAPHY'
        } else if (scrollRanges.blogVisible && offset2 < 0.1) {
          subtitle = 'BLOG'
        } else if (scrollRanges.blogVisible && offset2 > 0.1) {
          subtitle = ''
        } else {
          subtitle = 'La fin.'
        }

        const toDamp =
          damp(dampedOffset, 'current', offset, 0.0, delta) ||
          (isResize && !(offset2 > 0))
        if (toDamp) {
          // font size
          titleElement.style.fontSize = `${titleInitialSize + dampedOffset.current * (titleFinalSize - titleInitialSize)}rem`
          subtitleElement.style.fontSize = `${
            subtitleInitialSize +
            MathUtils.inverseLerp(
              0.5,
              1.0,
              MathUtils.clamp(dampedOffset.current, 0.5, 1.0),
            ) *
              (subtitleFinalSize - subtitleInitialSize)
          }rem`
          // positions
          const titleDOMRect = titleElement.getBoundingClientRect()
          const subtitleDOMRect = subtitleElement.getBoundingClientRect()
          setTitlePositions(titleDOMRect, subtitleDOMRect)
          // opacities and font families
          if (dampedOffset.current < 0.5 + scrollData.eps) {
            subtitleElement.style.opacity = MathUtils.inverseLerp(
              0.4,
              0,
              MathUtils.clamp(dampedOffset.current, 0.0, 0.4),
            )
            if (
              subtitleElement.classList.contains('changa-one-regular-italic')
            ) {
              subtitleElement.classList.replace(
                'changa-one-regular-italic',
                'raleway',
              )
            }
          } else {
            subtitleElement.style.opacity = MathUtils.inverseLerp(
              0.6,
              1,
              MathUtils.clamp(dampedOffset.current, 0.6, 1.0),
            )
            if (subtitleElement.classList.contains('raleway')) {
              subtitleElement.classList.replace(
                'raleway',
                'changa-one-regular-italic',
              )
            }
          }

          descriptionElement.style.opacity = MathUtils.inverseLerp(
            0.6,
            1,
            MathUtils.clamp(dampedOffset.current, 0.6, 1.0),
          )
        }

        const toDamp2 =
          damp(dampedOffset2, 'current', offset2, 0.0, delta) ||
          (isResize && offset2 > 0)
        // colors
        if (toDamp2) {
          color.current.lerpColors(
            black.current,
            white.current,
            dampedOffset2.current,
          )
          const style = color.current.getStyle()
          titleElement.style.color = style
          subtitleElement.style.color = style
        }
        if (toDamp2 && !(scrollRanges.postScrollOffset > 0)) {
          // font size
          titleElement.style.fontSize = `${titleFinalSize + offset2 * (titleInitialSize - titleFinalSize)}rem`
          subtitleElement.style.fontSize = `${subtitleFinalSize + offset2 * (subtitleInitialSize - subtitleFinalSize)}rem`
          // positions
          const titleDOMRect = titleElement.getBoundingClientRect()
          const subtitleDOMRect = subtitleElement.getBoundingClientRect()
          setTitlePositions(titleDOMRect, subtitleDOMRect, false)
          // opacities and font families

          if (subtitleElement.classList.contains('raleway')) {
            subtitleElement.classList.replace(
              'raleway',
              'changa-one-regular-italic',
            )
          }
          subtitleElement.style.opacity = MathUtils.inverseLerp(
            0.1,
            0,
            dampedOffset2.current,
          )
          descriptionElement.style.opacity = MathUtils.inverseLerp(
            0.1,
            0,
            dampedOffset2.current,
          )
        }

        if (scrollRanges.postScrollOffset > 0) {
          // no other optimizations conditions needed above as this only runs on scroll
          // and scroll ends here

          // font size
          titleElement.style.fontSize = `${titleFinalSize + offset2 * (titleInitialSize - titleFinalSize)}rem`
          subtitleElement.style.fontSize = `${subtitleFinalSize + offset2 * (subtitleInitialSize - subtitleFinalSize)}rem`
          // positions
          const titleDOMRect = titleElement.getBoundingClientRect()
          const subtitleDOMRect = subtitleElement.getBoundingClientRect()
          setTitlePositions(titleDOMRect, subtitleDOMRect, false)

          if (subtitleElement.classList.contains('changa-one-regular-italic')) {
            subtitleElement.classList.replace(
              'changa-one-regular-italic',
              'raleway',
            )
          }

          subtitleElement.style.opacity = 1
          descriptionElement.style.opacity = 0
        }
        if (subtitleText.current !== subtitle) {
          subtitleText.current = subtitle
          subtitleTextElement.innerText = subtitle
        }
      }
    },
    [
      blogItems,
      blogRef,
      descriptionElement,
      itemDescriptionElement,
      photographyButtonElement,
      photographyRef,
      setTitlePositions,
      softwareItems,
      softwareRef,
      subtitleElement,
      subtitleFinalSize,
      subtitleInitialSize,
      subtitleTextElement,
      titleElement,
      titleFinalSize,
      titleInitialSize,
    ],
  )
  return scrollCallback
}
