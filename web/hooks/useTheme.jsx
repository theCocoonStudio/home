import { useContext } from 'react'
import { ThemeContext } from 'web/context/ThemeContext'

export const useTheme = () => {
  const theme = useContext(ThemeContext)

  return theme
}
