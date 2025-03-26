import { useContext, useMemo } from 'react'
import { ThemeContext } from 'website/context/ThemeContext'

export const useTheme = (util = 'compose', ...utilArgs) => {
  const { colors, lengths, utils, markupIds } = useContext(ThemeContext)

  const args = useMemo(
    () =>
      utilArgs.map((arg) =>
        typeof arg === 'function'
          ? arg({ colors, lengths, utils, markupIds })
          : arg,
      ),
    [colors, lengths, utilArgs, utils, markupIds],
  )

  const utilReturn = useMemo(
    () => (args.length > 0 ? { utilReturn: utils[util](...args) } : {}),
    [args, util, utils],
  )

  const value = useMemo(
    () => ({ colors, lengths, utils, markupIds, ...utilReturn }),
    [colors, lengths, markupIds, utilReturn, utils],
  )

  return value
}
