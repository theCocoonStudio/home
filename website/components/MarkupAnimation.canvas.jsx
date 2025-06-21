import { forwardRef, useImperativeHandle } from 'react'
import { useMarkupId } from '../hooks/useMarkupId'
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
      style: { focusFactor },
    },
    animationTargets: {
      refs: { softwareRef, photographyRef, blogRef },
    },
  },
  ref,
) {
  const scrollData = useScroll()
  // markup
  const titleElement = useMarkupId(title)
  const subtitleElement = useMarkupId(subtitle)
  const descriptionElement = useMarkupId(description)
  const itemDescriptionElement = useMarkupId(itemDescription)
  const photographyButtonElement = useMarkupId(photographyButton)

  // callback
  const scrollCallback = useMarkupAnimation({
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
