import { useCallback, useEffect, useRef } from 'react'
import { useTheme } from './useTheme'
import { damp } from 'maath/easing'
import { MathUtils } from 'three'

export const useMarkupAnimation = ({
  softwareItems,
  blogItems,
  focusFactor,
  itemDescriptionElement,
  titleElement,
  subtitleElement,
  descriptionElement,
  photographyButtonElement,
  softwareRef,
  photographyRef,
  blogRef,
  scrollData,
  subtitleSizeInitial = 2.8,
  subtitleSizeFinal = 9.8,
  titleSizeInitial = 8,
  titleSizeFinal = 4,
}) => {
  const {
    lengths: { navHeight, atomicPadding },
  } = useTheme()

  const titleInitialized = useRef(false)
  const itemDescriptionVisible = useRef(false)
  const photographyButtonVisible = useRef(false)
  const dampedOffset = useRef(0.0)

  const setTitlePositions = useCallback(
    (rect, rect2) => {
      const titleLeftInitial = `(50% - ${rect.width / 2}px)`
      const titleLeftFinal = `(50px + (11 * ${atomicPadding}px))`
      const leftTarget = `calc(${titleLeftInitial} + ${dampedOffset.current} * (${titleLeftFinal} - ${titleLeftInitial}) )`

      const titleTopInitial = `(50% - ${rect.height}px)`
      const titleTopFinal = `(${navHeight / 2}px - ${rect.height / 2}px)`
      const topTarget = `calc( ${titleTopInitial} + ${dampedOffset.current} * (${titleTopFinal} - ${titleTopInitial}) )`

      const subtitleLeftInitial = `50%`
      const subtitleLeftFinal = `(8 * ${atomicPadding}px)`
      const leftTarget2 = `calc(${subtitleLeftInitial} + ${dampedOffset.current} * (${subtitleLeftFinal} - ${subtitleLeftInitial}) )`

      const subtitleTopInitial = `50%`
      const subtitleTopFinal = `  ${navHeight}px`
      const topTarget2 = `calc( ${subtitleTopInitial} + ${dampedOffset.current} * (${subtitleTopFinal} - ${subtitleTopInitial}) )`

      titleElement.style.left = leftTarget
      titleElement.style.top = topTarget
      subtitleElement.style.left = leftTarget2
      subtitleElement.style.top = topTarget2
    },
    [atomicPadding, navHeight, subtitleElement, titleElement],
  )

  useEffect(() => {
    if (scrollData.offset < scrollData.eps && !titleInitialized.current) {
      titleInitialized.current = true
      /* titles */
      // font size
      titleElement.style.fontSize = `${titleSizeInitial + dampedOffset.current * (titleSizeFinal - titleSizeInitial)}rem`
      subtitleElement.style.fontSize = `${subtitleSizeInitial + dampedOffset.current * (subtitleSizeFinal - subtitleSizeInitial)}rem`
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
    subtitleSizeInitial,
    titleElement,
    titleSizeFinal,
    titleSizeInitial,
  ])

  const scrollCallback = useCallback(
    (state, delta, scrollData, scrollRanges) => {
      /* itemDescription */
      // if in software focus range, show software itemDescription
      if (softwareRef.current.itemDescriptionVisibleRef.current) {
        if (!itemDescriptionVisible.current) {
          const item =
            softwareItems[softwareRef.current.activeItemIndexRef.current]
          itemDescriptionElement.children[0].children[0].innerText = item.title
          itemDescriptionElement.children[0].children[1].innerText = item.date
          itemDescriptionElement.children[0].children[2].innerText =
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
          itemDescriptionElement.children[0].children[2].innerText =
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
      if (photographyRef.current.photographyButtonVisibleRef.current) {
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
      /* title elements initial preScroll animation */
      if (titleElement && subtitleElement && descriptionElement) {
        const offset = scrollRanges.startSoftwareOffset
        const toDamp = damp(dampedOffset, 'current', offset, 0.0, delta)
        if (toDamp) {
          /* titles */
          // font size
          titleElement.style.fontSize = `${titleSizeInitial + dampedOffset.current * (titleSizeFinal - titleSizeInitial)}rem`
          subtitleElement.style.fontSize = `${subtitleSizeInitial + dampedOffset.current * (subtitleSizeFinal - subtitleSizeInitial)}rem`
          // set positions
          const titleDOMRect = titleElement.getBoundingClientRect()
          const subtitleDOMRect = subtitleElement.getBoundingClientRect()
          setTitlePositions(titleDOMRect, subtitleDOMRect)
          // reveal

          /* description */
          descriptionElement.style.opacity = MathUtils.inverseLerp(
            0.6,
            1,
            dampedOffset.current,
          )
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
      subtitleSizeFinal,
      subtitleSizeInitial,
      titleElement,
      titleSizeFinal,
      titleSizeInitial,
    ],
  )
  return scrollCallback
}
