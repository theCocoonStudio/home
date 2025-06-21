export const composeClassNames = (initial, ...classNames) =>
  classNames.reduce(
    (acc, curr) => (typeof curr === 'string' ? `${acc} ${curr}` : acc),
    initial,
  )

export const changaOne = (italic, styles = {}, ...classNames) => {
  return {
    style: {
      ...styles,
    },
    className: composeClassNames(
      italic ? 'changa-one-regular-italic' : 'changa-one-regular',
      ...classNames,
    ),
  }
}

export const raleway = (weight, italic, styles = {}, ...classNames) => {
  return {
    style: {
      ...styles,
      fontWeight: `${weight}`,
    },
    className: composeClassNames(
      italic ? 'raleway-italic' : 'raleway',
      ...classNames,
    ),
  }
}
