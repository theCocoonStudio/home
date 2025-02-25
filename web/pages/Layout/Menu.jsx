import styles from 'web/styles/Menu.module.css'

export const Menu = function Menu({ open }) {
  return <div className={`${styles.menu} ${open ? styles.menuOpen : ''}`}></div>
}
