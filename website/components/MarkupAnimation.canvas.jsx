import { forwardRef, useImperativeHandle } from 'react'
import { useMarkupId } from '../hooks/useMarkupId'
import { useMarkupAnimation } from '../hooks/useMarkupAnimation.canvas'

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
        },
      },
      style: { focusFactor },
    },
    animationTargets: {
      refs: { softwareRef, photographyRef },
    },
    scrollData,
  },
  ref,
) {
  // markup
  const titleElement = useMarkupId(title)
  const subtitleElement = useMarkupId(subtitle)
  const descriptionElement = useMarkupId(description)
  const itemDescriptionElement = useMarkupId(itemDescription)
  const photographyButtonElement = useMarkupId(photographyButton)

  // callback
  const scrollCallback = useMarkupAnimation({
    softwareItems,
    focusFactor,
    itemDescriptionElement,
    titleElement,
    subtitleElement,
    descriptionElement,
    photographyButtonElement,
    softwareRef,
    photographyRef,
    scrollData,
  })

  useImperativeHandle(
    ref,
    () => ({
      scrollCallback,
      titleElement,
      subtitleElement,
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
      titleElement,
    ],
  )
})
