import IconDeviceTvOld from '@tabler/icons-react/dist/esm/icons/IconDeviceTvOld'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import styles from 'web/styles/AppIcon.module.css'

export const AppIcon = forwardRef(function AppIcon(
  { children, ...props },
  forwardedRef,
) {
  const ref = useRef()
  useImperativeHandle(forwardedRef, () => ref.current, [])

  return (
    <div ref={ref} className={styles.container} {...props}>
      <div className={styles.background} />
      <div className={styles.border} />
      {children ?? <IconDeviceTvOld stroke={1} size={'60%'} />}
    </div>
  )
})