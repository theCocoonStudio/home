import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useCallback, useMemo, useRef } from 'react'
import { useFrameCallback } from 'src/hooks/useFrameCallback/useFrameCallback'
import { useSettings } from 'website/pages/Home/useSettings'

export const useScrollAnimation = (config, animationTargets) => {
  const { focusFactor } = useSettings()

  const scroll = useScroll()
  const tailFrames = useRef(0)
  const offsetCache = useRef(0.0)

  const ranges = useMemo(() => {
    const {
      content: {
        sections: {
          software: { items: softwareItems, range: softwareRange },
          photography: { items: photographyItems, range: photographyRange },
          blog: { items: blogItems, range: blogRange },
        },
      },

      scroll: {
        ranges: { preScroll: presScrollRange, postScroll: postScrollRange },
      },
    } = config
    const ranges = {
      softwareRange,
      photographyRange,
      blogRange,
      presScrollRange,
      postScrollRange,
      photographyDurationRange: [
        photographyItems[0].range[0] + photographyItems[0].range[1] / 2,
        photographyRange[1] - photographyItems[0].range[1] / 2,
      ],
      startSoftwareRange: [
        0,
        softwareItems[0].range[0] +
          (softwareItems[0].range[1] * (1 - focusFactor)) / 2,
      ],
      startPhotographyRange: [
        photographyItems[0].range[0],
        photographyItems[0].range[1] / 2,
      ],
      startBlogRange: [blogItems[0].range[0], blogItems[0].range[1] / 2],
      postScrollAnimationRange: [
        blogItems[blogItems.length - 1].range[0] +
          (blogItems[blogItems.length - 1].range[1] * (1 - focusFactor)) / 2 +
          blogItems[blogItems.length - 1].range[1] * focusFactor,
        1.0 -
          (blogItems[blogItems.length - 1].range[0] +
            (blogItems[blogItems.length - 1].range[1] * (1 - focusFactor)) / 2 +
            blogItems[blogItems.length - 1].range[1] * focusFactor),
      ],
    }
    return ranges
  }, [config, focusFactor])

  const getActiveRanges = useCallback(
    (scrollData) => {
      // sections visible
      const _ranges = {}
      _ranges.softwareVisible = scrollData.visible(...ranges.softwareRange)
      _ranges.photographyVisible = scrollData.visible(
        ...ranges.photographyRange,
      )
      _ranges.blogVisible = scrollData.visible(...ranges.blogRange)
      // subsections visible
      _ranges.photographyDurationVisible = scrollData.visible(
        ...ranges.photographyDurationRange,
      )
      // section offsets
      _ranges.photographyOffset = scrollData.range(...ranges.photographyRange)
      _ranges.postScrollOffset = scrollData.range(...ranges.postScrollRange)
      // subsection offsets
      _ranges.startSoftwareOffset = scrollData.range(
        ...ranges.startSoftwareRange,
      )
      _ranges.startPhotographyOffset = scrollData.range(
        ...ranges.startPhotographyRange,
      )
      _ranges.startBlogOffset = scrollData.range(...ranges.startBlogRange)
      _ranges.postScrollAnimationOffset = scrollData.range(
        ...ranges.postScrollAnimationRange,
      )
      return _ranges
    },
    [ranges],
  )

  const scrollCallback = useCallback(
    (state, delta, elapsed) => {
      const isResize = typeof elapsed !== 'undefined'
      const scrollRanges = { ...ranges, ...getActiveRanges(scroll) }
      Object.keys(animationTargets.refs).forEach(
        (key) =>
          animationTargets.refs[key].current?.scrollCallback &&
          animationTargets.refs[key].current.scrollCallback(
            state,
            delta,
            scroll,
            scrollRanges,
            tailFrames,
            isResize,
          ),
      )
    },
    [animationTargets, getActiveRanges, ranges, scroll],
  )

  const frame = useFrameCallback(scrollCallback)

  useFrame((state, delta) => {
    if (
      Math.abs(scroll.offset - offsetCache.current) > scroll.eps ||
      tailFrames.current++ < 10
    ) {
      if (Math.abs(scroll.offset - offsetCache.current) > scroll.eps) {
        tailFrames.current = 0
      }
      offsetCache.current = scroll.offset
      scrollCallback(state, delta)
    }
  })

  return { frame, ranges }
}
