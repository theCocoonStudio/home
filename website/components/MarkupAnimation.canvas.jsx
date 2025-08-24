import { forwardRef, useImperativeHandle } from 'react'
import { useMarkupId } from '../hooks/useMarkupId'
import { useMarkupQuerySelector } from '../hooks/useMarkupQuerySelector'
import { useMarkupAnimation } from '../hooks/useMarkupAnimation.canvas'
import { useScroll } from '@react-three/drei'

export const MarkupAnimation = forwardRef(function MarkupAnimation(
  {
    config: {
      main: {
        markupIds: {
          title,
          subtitle,
          description,
          itemDescription,
          photographyButton,
          dummySubtitle,
          dummyDescription,
        },
      },
      content: {
        sections: {
          software: { items: softwareItems },
          blog: { items: blogItems },
        },
      },
    },
    animationTargets: {
      refs: { softwareRef, photographyRef, blogRef },
    },
    showLightbox,
  },
  ref,
) {
  const scrollData = useScroll()

  // markup
  const titleElement = useMarkupId(title)
  const subtitleElement = useMarkupId(subtitle)
  const subtitleTextElement = useMarkupQuerySelector(`#${subtitle} > h2`)
  const descriptionElement = useMarkupId(description)
  const itemDescriptionElement = useMarkupId(itemDescription)
  const photographyButtonElement = useMarkupId(photographyButton)
  const dummySubtitleElement = useMarkupId(dummySubtitle)
  const dummyDescriptionElement = useMarkupId(dummyDescription)

  // callback
  const {
    scrollCallback,
    setItemDescriptionTop,
    activeItemDescriptionIndex,
    activeItemSection,
    isAlternateLayout,
  } = useMarkupAnimation({
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
    showLightbox,
    dummySubtitleElement,
    dummyDescriptionElement,
  })

  useImperativeHandle(
    ref,
    () => ({
      scrollCallback,
      titleElement,
      subtitleElement,
      subtitleTextElement,
      descriptionElement,
      itemDescriptionElement,
      photographyButtonElement,
      dummySubtitleElement,
      dummyDescriptionElement,
      setItemDescriptionTop,
      activeItemSectionRef: activeItemSection,
      activeItemDescriptionIndexRef: activeItemDescriptionIndex,
      isAlternateLayout,
    }),
    [
      activeItemDescriptionIndex,
      activeItemSection,
      descriptionElement,
      dummyDescriptionElement,
      dummySubtitleElement,
      isAlternateLayout,
      itemDescriptionElement,
      photographyButtonElement,
      scrollCallback,
      setItemDescriptionTop,
      subtitleElement,
      subtitleTextElement,
      titleElement,
    ],
  )
})
