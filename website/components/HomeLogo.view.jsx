import { Children, cloneElement, useEffect, useMemo, useRef } from 'react'
import { useTheme } from '../hooks/useTheme'
import { useScrollEvent } from '../pages/Home/useScrollEvent'

export const HomeLogo = function HomeLogo({ children, initialLogoColor }) {
  const logo = useRef()
  const child = useMemo(() => {
    try {
      return Children.only(children)
    } catch (e) {
      console.log('Logo component in Layout can only contain one child')
    }
  }, [children])

  const section = useScrollEvent()

  const {
    colors: { slate, charcoal, purple, white },
  } = useTheme()

  useEffect(() => {
    if (logo.current.material) {
      const color = {
        preScroll: initialLogoColor,
        software: slate,
        photography: charcoal,
        blog: purple,
        postScroll: white,
      }[section]
      logo.current.material.color.set(color)
    }
  }, [charcoal, initialLogoColor, purple, section, slate, white])
  return (
    <>
      {cloneElement(child, {
        ref: logo,
      })}
    </>
  )
}
