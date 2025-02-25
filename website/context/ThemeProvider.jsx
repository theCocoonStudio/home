import { useMemo } from 'react'
import { ThemeContext } from './ThemeContext'

export const ThemeProvider = ({ children, theme: { colors } }) => {
  const value = useMemo(() => {
    return { colors }
  }, [colors])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
