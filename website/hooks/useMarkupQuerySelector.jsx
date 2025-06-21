import { useMemo } from 'react'

export const useMarkupQuerySelector = (selector) => {
  const element = useMemo(() => {
    const el = document.querySelector(selector)
    if (el) {
      return el
    }
  }, [selector])
  return element
}
