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

  // callback
  const scrollCallback = useMarkupAnimation({
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
    }),
    [
      descriptionElement,
      itemDescriptionElement,
      photographyButtonElement,
      scrollCallback,
      subtitleElement,
      subtitleTextElement,
      titleElement,
    ],
  )
})
