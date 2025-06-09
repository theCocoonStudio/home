import { useCallback, useRef } from 'react'

export const useMarkupAnimation = (
  {
    scroll: {
      ranges: { preScroll: preScrollRange },
    },
    content: {
      sections: {
        software: { range: softwareRange },
      },
    },
  },
  { markup: { itemDescriptionElement } },
) => {
  const itemDescriptionVisible = useRef(null)
  const scrollCallback = useCallback(
    (state, delta, scrollData) => {
      // if in preScroll range
      if (scrollData.visible(...preScrollRange)) {
        // hide itemDescription
        if (
          itemDescriptionVisible.current !== false &&
          itemDescriptionElement
        ) {
          itemDescriptionElement.style.opacity = 0
          itemDescriptionElement.style.pointerEvents = 'none'
          itemDescriptionVisible.current = false
        }
        // if out of preScroll range
      } else {
        // prepare to hide itemDescription when back in range
        if (typeof itemDescriptionVisible.current === 'boolean') {
          itemDescriptionVisible.current = null
        }
      }
    },
    [itemDescriptionElement, preScrollRange],
  )
  return scrollCallback
}
