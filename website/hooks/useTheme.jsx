import { useContext } from 'react'
import { ThemeContext } from 'website/context/ThemeContext'

export const useTheme = () => {
  const { colors, lengths } = useContext(ThemeContext)

  return { colors, lengths }
}
