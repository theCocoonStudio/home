import { useScroll } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { memo, useEffect } from 'react'

const _ScrollHTMLRef = function ScrollHTMLRef({ setContainer }) {
  const { el } = useScroll()

  const { get } = useThree(({ get }) => ({
    get,
  }))

  /* turn off events, will be turned on for child View */
  useEffect(() => {
    get().setEvents({
      enabled: false,
      priority: 2,
    })
  }, [get])

  useEffect(() => {
    if (el) {
      setContainer(el)
    }
  }, [el, setContainer])
}

export const ScrollHTMLRef = memo(_ScrollHTMLRef)
