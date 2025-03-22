import { useMemo } from 'react'
import { ThemeContext } from './ThemeContext'

export const ThemeProvider = ({
  children,
  theme: { colors, lengths, utils },
}) => {
  const value = useMemo(() => {
    return { colors, lengths, utils }
  }, [colors, lengths, utils])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
