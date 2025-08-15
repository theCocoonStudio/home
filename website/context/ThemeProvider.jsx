import { useCallback, useMemo, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import { useResizeEvent } from 'src/hooks/useResizeEvent'

export const ThemeProvider = ({
  children,
  theme: { colors, lengths, utils, markupIds, responsiveLengths, typography },
  container,
}) => {
  const [size, setSize] = useState()

  const value = useMemo(() => {
    return {
      colors,
      lengths: size ? responsiveLengths(size, lengths) : lengths,
      utils,
      markupIds,
      typography,
    }
  }, [colors, size, responsiveLengths, lengths, utils, markupIds, typography])

  const getSize = useCallback(() => {
    if (container) {
      setSize({ width: container.clientWidth, height: container.clientHeight })
    }
  }, [container])

  useResizeEvent(container, getSize)

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
