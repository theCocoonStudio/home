import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useCallback, useRef } from 'react'
import { useFrameCallback } from 'src/hooks/useFrameCallback/useFrameCallback'

export const useScrollAnimation = (config, animationTargets) => {
  const scroll = useScroll()
  const tailFrames = useRef(0)
  const offsetCache = useRef(0.0)

  const getActiveRanges = useCallback(
    (scrollData) => {
      const {
        content: {
          sections: {
            software: { items: softwareItems, range: softwareRange },
            photography: { items: photographyItems, range: photographyRange },
            blog: { items: blogItems, range: blogRange },
          },
        },
        style: { focusFactor },
        scroll: {
          ranges: { preScroll: presScrollRange, postScroll: postScrollRange },
        },
      } = config
      const ranges = {}
      // sections visible
      ranges.softwareVisible = scrollData.visible(...softwareRange)
      ranges.photographyVisible = scrollData.visible(...photographyRange)
      ranges.blogVisible = scrollData.visible(...blogRange)
      // subsections visible
      ranges.photographyDurationVisible = scrollData.visible(
        photographyItems[0].range[0] + photographyItems[0].range[1] / 2,
        photographyRange[1] - photographyItems[0].range[1] / 2,
      )
      // section offsets
      ranges.photographyOffset = scrollData.range(...photographyRange)
      // subsection offsets
      ranges.startSoftwareOffset = scrollData.range(
        0,
        softwareItems[0].range[0] +
          (softwareItems[0].range[1] * (1 - focusFactor)) / 2,
      )
      ranges.startPhotographyOffset = scrollData.range(
        photographyItems[0].range[0],
        photographyItems[0].range[1] / 2,
      )
      ranges.startBlogOffset = scrollData.range(
        blogItems[0].range[0],
        blogItems[0].range[1] / 2,
      )
      return ranges
    },
    [config],
  )

  const scrollCallback = useCallback(
    (state, delta) => {
      const scrollRanges = getActiveRanges(scroll)
      Object.keys(animationTargets.refs).forEach(
        (key) =>
          animationTargets.refs[key].current?.scrollCallback &&
          animationTargets.refs[key].current.scrollCallback(
            state,
            delta,
            scroll,
            scrollRanges,
          ),
      )
    },
    [animationTargets, getActiveRanges, scroll],
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

  return frame
}
