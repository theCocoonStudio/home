export const composeClassNames = (initial, ...classNames) =>
  classNames.reduce(
    (acc, curr) => (typeof curr === 'string' ? `${acc} ${curr}` : acc),
    initial,
  )

export const nunito = (weight, styles = {}, ...classNames) => {
  return {
    style: {
      ...styles,
      fontWeight: `${weight}`,
    },
    className: composeClassNames('nunito', ...classNames),
  }
}

export const roboto = ([weight, width = 100], styles = {}, ...classNames) => {
  return {
    style: {
      ...styles,
      fontWeight: `${weight}`,
      fontVariationSettings: `'wdth' ${width}`,
    },
    className: composeClassNames('roboto', ...classNames),
  }
}

export const robotoMono = (weight, styles = {}, ...classNames) => {
  return {
    style: {
      ...styles,
      fontWeight: `${weight}`,
    },
    className: composeClassNames('roboto-mono', ...classNames),
  }
}
