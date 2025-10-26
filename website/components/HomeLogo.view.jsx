import { useFrame } from '@react-three/fiber'
import { Children, cloneElement, useCallback, useMemo, useRef } from 'react'
import { clamp, inverseLerp, lerp } from 'three/src/math/MathUtils.js'
import { useSettings } from 'website/pages/Home/useSettings'
import { useScrollControls } from 'src'

export const HomeLogo = function HomeLogo({
  config: {
    data: {
      content: { items },
    },
  },
  children,
}) {
  const logo = useRef()
  const child = useMemo(() => {
    try {
      return Children.only(children)
    } catch (e) {
      console.log('Logo component in Layout can only contain one child')
    }
  }, [children])

  const { getOffset } = useScrollControls()
  const { focusFactor } = useSettings()
  const range = 1 / items.length
  const inEndThreshold = (1 - focusFactor) / 2
  const outStartThreshold = 1 - inEndThreshold
  const prevOffset = useRef(getOffset())
  const getOffsetRotation = useCallback(
    (scrollOffset) => {
      const offset = scrollOffset / range - Math.floor(scrollOffset / range)

      if (offset > inEndThreshold) {
        const activeOffset = inverseLerp(
          outStartThreshold,
          1.0,
          clamp(offset, outStartThreshold, 1),
        )
        return Math.PI / 4 + Math.PI + lerp(0, Math.PI, activeOffset)
      } else {
        const activeOffset = inverseLerp(0, inEndThreshold, offset)
        return Math.PI / 4 + lerp(0, Math.PI, activeOffset)
      }
    },
    [inEndThreshold, outStartThreshold, range],
  )

  useFrame(() => {
    const offset = getOffset()
    // only run if scrolled between frames
    if (Math.abs(offset - prevOffset.current) > 0) {
      const rotationY = getOffsetRotation(offset)
      logo.current.group.rotation.y = rotationY
    }
    prevOffset.current = offset
  }, [])
  return (
    <>
      {cloneElement(child, {
        ref: logo,
      })}
    </>
  )
}
