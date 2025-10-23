import styles from 'website/styles/MenuStyles.module.css'

export const MenuContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
