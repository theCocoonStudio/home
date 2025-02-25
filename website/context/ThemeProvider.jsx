import { useMemo } from 'react'
import { ThemeContext } from './ThemeContext'

export const ThemeProvider = ({ children, theme: { colors, lengths } }) => {
  const value = useMemo(() => {
    return { colors, lengths }
  }, [colors, lengths])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
