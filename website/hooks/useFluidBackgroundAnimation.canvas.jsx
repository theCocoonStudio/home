import { useCallback, useEffect, useMemo, useRef } from 'react'
import { Color } from 'three'
import { Scrub } from '../utils/damping'

export const useFluidBackgroundAnimation = ({
  boundPathForceCallback,
  setForceCallback,
  colors,
  backingMaterialRef,
  meshRef,
  manualRef,
  render,
  showLightbox,
  materialProps,
  ranges,
}) => {
  const forceCallbackSet = useRef(false)
  const slate = useRef(new Color(colors.slate))
  const black = useRef(new Color(colors.black))
  const purple = useRef(new Color(colors.purple))
  const white = useRef(new Color(colors.white))

  /* backing material scrubber */
  const scrubber = useMemo(() => {
    return new Scrub({
      thresholds: [
        ranges.startSoftwareRange[0], // 0
        ranges.startSoftwareRange[0] + ranges.startSoftwareRange[1],
        ranges.startPhotographyRange[0],
        ranges.startPhotographyRange[0] + ranges.startPhotographyRange[1],
        ranges.startBlogRange[0],
        ranges.startBlogRange[0] + ranges.startBlogRange[1],
        ranges.postScrollAnimationRange[0],
        ranges.postScrollAnimationRange[0] + ranges.postScrollAnimationRange[1], // 1
      ],
      targets: [
        { color: { value: black.current } },
        { color: { value: slate.current } },
        { color: { value: slate.current } },
        { color: { value: black.current } },
        { color: { value: black.current } },
        { color: { value: purple.current } },
        { color: { value: purple.current } },
        { color: { value: white.current } },
      ],
    })
  }, [ranges])

  useEffect(() => {
    if (backingMaterialRef.current && !scrubber.model) {
      scrubber.set({ model: backingMaterialRef.current })
    }
  }, [backingMaterialRef, scrubber])

  /* mesh material scrubber */
  const meshScrubber = useMemo(() => {
    return new Scrub({
      thresholds: [
        0,
        ranges.postScrollAnimationRange[0],
        ranges.postScrollAnimationRange[0] + ranges.postScrollAnimationRange[1], // 1
      ],
      targets: [
        materialProps.preScroll,
        materialProps.preScroll,
        materialProps.postScroll,
      ],
    })
  }, [
    materialProps.postScroll,
    materialProps.preScroll,
    ranges.postScrollAnimationRange,
  ])

  useEffect(() => {
    if (meshRef.current?.material && !meshScrubber.model) {
      meshScrubber.set({ model: meshRef.current.material })
    }
  }, [meshRef, meshScrubber])

  /* scroll callback */
  const scrollCallback = useCallback(
    (state, delta, scrollData, scrollRanges, tailFrames) => {
      /* forceCallback */
      if (!forceCallbackSet.current) {
        setForceCallback(boundPathForceCallback)
        forceCallbackSet.current = true
      }
      /* backing material */
      if (scrubber.model) {
        scrubber.scrub(scrollData.offset, delta)
      }

      /* mesh material */
      if (meshScrubber.model) {
        meshScrubber.scrub(scrollData.offset, delta)
      }
      /* manual mode */
      manualRef.current = showLightbox
        ? false
        : scrollRanges.photographyDurationVisible

      if (manualRef.current && tailFrames.current === 0) {
        render(state, delta)
      }
    },
    [
      boundPathForceCallback,
      manualRef,
      meshScrubber,
      render,
      scrubber,
      setForceCallback,
      showLightbox,
    ],
  )
  return scrollCallback
}
