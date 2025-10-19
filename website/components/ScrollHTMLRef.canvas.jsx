import { useScroll } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { memo, useLayoutEffect } from 'react'

const _ScrollHTMLRef = function ScrollHTMLRef({ setContainer }) {
  const { el } = useScroll()

  const { get } = useThree(({ get }) => ({
    get,
  }))

  /* turn off events, will be turned on for child View */
  useLayoutEffect(() => {
    get().setEvents({
      enabled: false,
      priority: 2,
    })
  }, [get])

  useLayoutEffect(() => {
    if (el) {
      setContainer(el)
      el.classList.add('no-scroll')
    }
  }, [el, setContainer])
}

export const ScrollHTMLRef = memo(_ScrollHTMLRef)
