import { useMemo } from 'react'

export const useMarkupId = (id) => {
  const element = useMemo(() => {
    const el = document.getElementById(id)
    if (el) {
      return el
    }
  }, [id])
  return element
}
