import { useContext, useMemo } from 'react'
import { ThemeContext } from 'website/context/ThemeContext'

export const useTheme = (util = 'compose', ...utilArgs) => {
  const { colors, lengths, utils } = useContext(ThemeContext)

  const utilReturn = useMemo(
    () => (utilArgs.length > 0 ? { utilReturn: utils[util](...utilArgs) } : {}),
    [util, utilArgs, utils],
  )

  const value = useMemo(
    () => ({ colors, lengths, utils, ...utilReturn }),
    [colors, lengths, utilReturn, utils],
  )

  return value
}
