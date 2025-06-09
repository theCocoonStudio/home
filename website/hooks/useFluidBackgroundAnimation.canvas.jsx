import { useCallback, useRef } from 'react'

export const useFluidBackgroundAnimation = (
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
  { refs: { bgRef }, callbacks: { boundPathForceCallback } },
) => {
  const forceCallbackSet = useRef(false)
  const scrollCallback = useCallback(
    (state, delta, scrollData) => {
      // set forceCallback
      if (!forceCallbackSet.current) {
        bgRef.current.setForceCallback(boundPathForceCallback)
        forceCallbackSet.current = true
      }
    },
    [bgRef, boundPathForceCallback],
  )
  return scrollCallback
}
