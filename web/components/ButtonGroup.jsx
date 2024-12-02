import {
  Children,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import styles from 'web/styles/ButtonGroup.module.css'

export const ButtonGroup = forwardRef(function ButtonGroup(
  { children, name, labels = [], widths = [], fit = true, ...props },
  ref,
) {
  const buttons = useMemo(
    () =>
      Children.count(children) < 2 ? (
        <div
          className={`${styles.child} ${fit ? styles.fit : ''} ${labels[0] ? styles.labelled : ''} ${widths[0] ? ['', styles.double, styles.triple][widths[0] - 1] : ''}`}
        >
          {children}
          {labels[0] && <ButtonLabel>{labels[0]}</ButtonLabel>}
        </div>
      ) : (
        children.map((child, i) => (
          <div
            className={`${styles.child} ${fit ? styles.fit : ''} ${labels[i] ? styles.labelled : ''} ${widths[i] ? ['', styles.double, styles.triple][widths[i] - 1] : ''}`}
            key={i}
          >
            {child}
            {labels[i] && <ButtonLabel>{labels[i]}</ButtonLabel>}
          </div>
        ))
      ),
    [children, fit, labels, widths],
  )
  const container = useRef()
  useImperativeHandle(ref, () => container.current, [])
  return (
    <div ref={container} className={`${styles.container}`} {...props}>
      {buttons}
      <ButtonLabel className={`${styles.mainLabel}`}>{name}</ButtonLabel>
    </div>
  )
})

const ButtonLabel = forwardRef(function ButtonLabel(
  { children, ...props },
  ref,
) {
  const label = useRef()
  useImperativeHandle(ref, () => label.current)
  return (
    <div ref={label} className={`${styles.label}`} {...props}>
      <span>{children}</span>
    </div>
  )
})
