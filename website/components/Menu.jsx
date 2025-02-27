import { useMemo } from 'react'
import styles from 'website/styles/Menu.module.css'

export const Menu = () => {
  const dynamicStyles = useMemo(
    () => ({
      left: 'calc(100% - 0px)',
    }),
    [],
  )
  console.log(dynamicStyles)
  return <div className={`${styles.menu}`} style={dynamicStyles}></div>
}
