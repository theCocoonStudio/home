import {
  Children,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import styles from 'web/styles/ButtonGroup.module.css'

export const ButtonGroup = forwardRef(function ButtonGroup(
  { children, name, labels = [], fit = true, ...props },
  ref,
) {
  const buttons = useMemo(
    () =>
      Children.count(children) < 2 ? (
        <div className={`${styles.child} ${fit ? styles.fit : ''}`}>
          {children}
          {labels[0] && <ButtonLabel>{labels[0]}</ButtonLabel>}
        </div>
      ) : (
        children.map((child, i) => (
          <div className={`${styles.child} ${fit ? styles.fit : ''}`} key={i}>
            {child}
            {labels[i] && <ButtonLabel>{labels[i]}</ButtonLabel>}
          </div>
        ))
      ),
    [children, fit, labels],
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
