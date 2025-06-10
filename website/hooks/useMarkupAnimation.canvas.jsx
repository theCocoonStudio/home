import { useCallback, useEffect, useRef } from 'react'
import { useTheme } from './useTheme'
import { damp } from 'maath/easing'
import { MathUtils } from 'three'

export const useMarkupAnimation = ({
  softwareItems,
  focusFactor,
  itemDescriptionElement,
  titleElement,
  subtitleElement,
  descriptionElement,
  softwareRef,
  scrollData,
}) => {
  const {
    lengths: { navHeight, atomicPadding },
  } = useTheme()

  const titleInitialized = useRef(false)
  const itemDescriptionVisible = useRef(false)
  const dampedOffset = useRef(0.0)

  useEffect(() => {
    if (scrollData.offset < scrollData.eps && !titleInitialized.current) {
      titleInitialized.current = true
      // title
      titleElement.style.fontSize = `${4 + (1 - dampedOffset.current) * 4}rem`
      const titleDOMRect = titleElement.getBoundingClientRect()
      const leftTarget = `calc( 50px + (11 * ${atomicPadding}px) + ${1.0 - dampedOffset.current} * (50% - 50px - (11 * ${atomicPadding}px) - ${titleDOMRect.width / 2}px) )`
      const topTarget = `calc( ${navHeight / 2}px - ${titleDOMRect.height / 2}px + ${1.0 - dampedOffset.current} * (50% - ${titleDOMRect.height / 2}px - ${navHeight / 2}px) )`
      titleElement.style.left = leftTarget
      titleElement.style.top = topTarget
      titleElement.style.opacity = 1
      // subtitle
      subtitleElement.style.fontSize = `${2.8 + dampedOffset.current * 7}rem`
      const subtitleDOMRect = subtitleElement.getBoundingClientRect()
      const leftTarget2 = `calc( (8 * ${atomicPadding}px) + ${1.0 - dampedOffset.current} * (50% - (8 * ${atomicPadding}px) - ${subtitleDOMRect.width / 2}px) )`
      const topTarget2 = `calc( ${navHeight}px + ${1.0 - dampedOffset.current} * (50% - ${navHeight}px) )`
      subtitleElement.style.left = leftTarget2
      subtitleElement.style.top = topTarget2
      subtitleElement.style.opacity = 1
      // description
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
    subtitleElement,
    titleElement,
  ])

  const scrollCallback = useCallback(
    (state, delta, scrollData) => {
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
      } else {
        // else, hide itemDescription
        if (itemDescriptionVisible.current) {
          itemDescriptionElement.style.opacity = 0
          itemDescriptionElement.style.pointerEvents = 'none'
          itemDescriptionVisible.current = false
        }
      }
      /* title elements initial preScroll animation */
      if (titleElement && subtitleElement && descriptionElement) {
        const offset = scrollData.range(
          0,
          softwareItems[0].range[0] +
            (softwareItems[0].range[1] * (1 - focusFactor)) / 2,
        )
        const toDamp = damp(dampedOffset, 'current', offset, 0.0, delta)
        if (toDamp) {
          // title
          titleElement.style.fontSize = `${4 + (1 - dampedOffset.current) * 4}rem`
          const titleDOMRect = titleElement.getBoundingClientRect()
          const leftTarget = `calc( 50px + (11 * ${atomicPadding}px) + ${1.0 - dampedOffset.current} * (50% - 50px - (11 * ${atomicPadding}px) - ${titleDOMRect.width / 2}px) )`
          const topTarget = `calc( ${navHeight / 2}px - ${titleDOMRect.height / 2}px + ${1.0 - dampedOffset.current} * (50% - ${titleDOMRect.height / 2}px - ${navHeight / 2}px) )`
          titleElement.style.left = leftTarget
          titleElement.style.top = topTarget
          // subtitle
          subtitleElement.style.fontSize = `${2.8 + dampedOffset.current * 7}rem`
          const subtitleDOMRect = subtitleElement.getBoundingClientRect()
          const leftTarget2 = `calc( (8 * ${atomicPadding}px) + ${1.0 - dampedOffset.current} * (50% - (8 * ${atomicPadding}px) - ${subtitleDOMRect.width / 2}px) )`
          const topTarget2 = `calc( ${navHeight}px + ${1.0 - dampedOffset.current} * (50% - ${navHeight}px) )`
          subtitleElement.style.left = leftTarget2
          subtitleElement.style.top = topTarget2
          // description
          descriptionElement.style.opacity = MathUtils.inverseLerp(
            0.6,
            1,
            dampedOffset.current,
          )
        }
      }
    },
    [
      atomicPadding,
      descriptionElement,
      focusFactor,
      itemDescriptionElement,
      navHeight,
      softwareItems,
      softwareRef,
      subtitleElement,
      titleElement,
    ],
  )
  return scrollCallback
}
