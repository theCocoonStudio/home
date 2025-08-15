import { useContext, useMemo } from 'react'
import { ThemeContext } from 'website/context/ThemeContext'

export const useTheme = (util = 'compose', ...utilArgs) => {
  const { colors, lengths, utils, markupIds, typography } =
    useContext(ThemeContext)

  const args = useMemo(
    () =>
      utilArgs.map((arg) =>
        typeof arg === 'function'
          ? arg({ colors, lengths, utils, markupIds, typography })
          : arg,
      ),
    [utilArgs, colors, lengths, utils, markupIds, typography],
  )

  const utilReturn = useMemo(
    () => (args.length > 0 ? { utilReturn: utils[util](...args) } : {}),
    [args, util, utils],
  )

  const value = useMemo(
    () => ({ colors, lengths, utils, markupIds, typography, ...utilReturn }),
    [colors, lengths, markupIds, typography, utilReturn, utils],
  )

  return value
}
