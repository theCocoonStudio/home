import styles from 'website/styles/MenuStyles.module.css'

export const MenuButton = ({ labelText, enabled, onClick }) => {
  return (
    <div className={styles.buttons}>
      <div
        onClick={enabled ? onClick : undefined}
        className={`raleway ${styles.button} ${enabled ? styles.activeButton : styles.disabledButton}`}
      >
        {labelText}
      </div>
    </div>
  )
}
