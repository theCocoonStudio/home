import { useMemo } from 'react'
import { ThemeContext } from './ThemeContext'
import { useResizeEvent } from 'src/hooks/useResizeEvent'

export const ThemeProvider = ({ children, theme, pageTheme = {} }) => {
  const size = useResizeEvent()

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
    const pageContextObj = {}
    if (pageTheme) {
      Object.keys(pageTheme).forEach((key) => {
        // get raw, page-theme object entry value
        const rawEntry = pageTheme[key]
        // get (optionaly size-based) context value
        const sizedEntry =
          typeof rawEntry === 'function' ? rawEntry(size, contextObj) : rawEntry
        // convert to string for css variable if necessary
        const cssEntry =
          typeof sizedEntry === 'number' ? `${sizedEntry}px` : sizedEntry
        // update context object
        pageContextObj[key] = sizedEntry
        // update css variable
        document.documentElement.style.setProperty(
          `--theme-page-${key}`,
          cssEntry,
        )
      })
    }
    return { ...contextObj, page: pageContextObj }
  }, [pageTheme, size, theme])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
