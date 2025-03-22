export const composeClassNames = (initial, ...classNames) =>
  classNames.reduce(
    (acc, curr) => (typeof curr === 'string' ? `${acc} ${curr}` : acc),
    initial,
  )

export const nunito = (
  [weight, width = 100, height = 500],
  styles = {},
  ...classNames
) => {
  return {
    style: {
      ...styles,
      fontWeight: `${weight}`,
      fontVariationSettings: `'wdth' ${width}, 'YTLC' ${height};`,
    },
    classNames: composeClassNames('nunito-sans', ...classNames),
  }
}

export const orbitron = (weight, styles = {}, ...classNames) => {
  return {
    style: {
      ...styles,
      fontWeight: `${weight}`,
    },
    classNames: composeClassNames('orbitron', ...classNames),
  }
}
