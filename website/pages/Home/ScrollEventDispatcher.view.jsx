import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'

export const ScrollEventDispatcher = ({ ranges, setRange }) => {
  const rangeKeys = useMemo(() => Object.keys(ranges), [ranges])

  const scroll = useScroll()
  const cache = useRef()
  const stop = useRef(false)
  const offsetCache = useRef(0.0)
  useFrame(() => {
    // only run if scoll has changed
    if (offsetCache.current !== scroll.offset) {
      // update offsetCache
      offsetCache.current = scroll.offset
      // set stop to false each frame
      stop.current = false
      // for each key
      rangeKeys.forEach((key) => {
        // if stop hasn't been set to true during an iteration
        if (!stop.current) {
          // and if its range is visible
          if (scroll.visible(...ranges[key])) {
            // stop forEach loop for this frame
            stop.current = true
            // and if it wasn't visible last frame
            if (cache.current !== key) {
              // set it in context
              setRange(key)
              // set it in cache
              cache.current = key
            }
          }
        }
      })
    }
  })
  return <group />
}
