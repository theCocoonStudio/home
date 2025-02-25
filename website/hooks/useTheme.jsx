import { useContext } from 'react'
import { ThemeContext } from 'website/context/ThemeContext'

export const useTheme = () => {
  const { colors } = useContext(ThemeContext)

  return colors
}
