import { Children, cloneElement, useMemo, useRef } from 'react'

export const HomeLogo = function HomeLogo({ children }) {
  const logo = useRef()
  const child = useMemo(() => {
    try {
      return Children.only(children)
    } catch (e) {
      console.log('Logo component in Layout can only contain one child')
    }
  }, [children])

  return (
    <>
      {cloneElement(child, {
        ref: logo,
      })}
    </>
  )
}
