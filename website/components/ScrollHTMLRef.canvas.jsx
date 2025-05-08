import { useScroll } from '@react-three/drei'
import { memo, useEffect } from 'react'

const _ScrollHTMLRef = function ScrollHTMLRef({ setContainer }) {
  const { el } = useScroll()

  useEffect(() => {
    if (el) {
      setContainer(el)
    }
  }, [el, setContainer])
}

export const ScrollHTMLRef = memo(_ScrollHTMLRef)
