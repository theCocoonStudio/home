import { useCallback, useLayoutEffect, useMemo, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import { useResizeEvent } from 'src/hooks/useResizeEvent'

export const ThemeProvider = ({ children, theme }) => {
  /* size */
  const container = useMemo(() => document.body, [])
  const [size, setSize] = useState({
    width: container.clientWidth,
    height: container.clientHeight,
  })
  const updateSize = useCallback(() => {
    const { clientWidth, clientHeight } = container
    setSize({ width: clientWidth, height: clientHeight })
  }, [container])

  useResizeEvent(container, updateSize)

  /* theme values */

  const contextValue = useMemo(() => {
    const contextObj = {}
    Object.keys(theme).forEach((key) => {
      contextObj[key] = {}
      Object.keys(theme[key]).forEach((subKey) => {
        // get raw, theme-object entry value
        const rawEntry = theme[key][subKey]
        // get (optionaly size-based) context value
        const sizedEntry =
          typeof rawEntry === 'function' ? rawEntry(size) : rawEntry
        // convert to string for css variable if necessary
        const cssEntry =
          typeof sizedEntry === 'number' ? `${sizedEntry}px` : sizedEntry
        // update context object
        contextObj[key][subKey] = sizedEntry
        // update css variable
        document.documentElement.style.setProperty(
          `--theme-${key}-${subKey}`,
          cssEntry,
        )
      })
    })
    return contextObj
  }, [size, theme])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
