import { useMemo } from 'react'
import { ThemeContext } from './ThemeContext'

export const ThemeProvider = ({
  children,
  theme: { colors, lengths, utils, markupIds },
}) => {
  const value = useMemo(() => {
    return { colors, lengths, utils, markupIds }
  }, [colors, lengths, utils, markupIds])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
