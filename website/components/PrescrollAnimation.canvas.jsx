import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import { useTheme } from '../hooks/useTheme'

/* const path = new Path().moveTo(0.0, -0.25).lineTo(0.0, 0.25) */
const _PrescrollAnimation = forwardRef(function PrescrollAnimation(
  {
    config: {
      scroll: {
        ranges: { preScroll: range },
      },
      content: {
        sections: {
          software: { range: softwareRange },
        },
      },
    },
    animationTargets: {
      markup: { itemDescriptionElement },
      refs: { bgRef, softwareRef, photographyRef, lightRef },
      callbacks: { boundPathForceCallback },
    },
  },
  forwardedRef,
) {
  const forceCallbackSet = useRef(false)
  const itemDescriptionVisible = useRef(null)
  const scrollCallback = useCallback(
    (state, delta, scrollData) => {
      // if in preScroll range
      if (scrollData.visible(...range)) {
        // hide itemDescription
        if (
          itemDescriptionVisible.current !== false &&
          itemDescriptionElement
        ) {
          itemDescriptionElement.style.opacity = 0
          itemDescriptionElement.style.pointerEvents = 'none'
          itemDescriptionVisible.current = false
        }
        // set forceCallback
        if (!forceCallbackSet.current) {
          bgRef.current.setForceCallback(boundPathForceCallback)
          forceCallbackSet.current = true
        }
        // if out of preScroll range
      } else {
        // prepare to hide itemDescription when back in range
        if (typeof itemDescriptionVisible.current === 'boolean') {
          itemDescriptionVisible.current = null
        }
        // prepare set forceCallback when back in range
        if (forceCallbackSet.current) {
          forceCallbackSet.current = false
        }
      }
    },
    [bgRef, boundPathForceCallback, itemDescriptionElement, range],
  )

  useImperativeHandle(forwardedRef, () => ({ scrollCallback }), [
    scrollCallback,
  ])
})

export const PrescrollAnimation = memo(_PrescrollAnimation)
