import { useMemo } from 'react'
import { raleway } from '../../utils/styles'
import styles from './ItemDescription.module.css'

export const ItemDescription = ({ id, section }) => {
  const { style: buttonStyle, className: buttonClass } = useMemo(
    () =>
      raleway(
        350,
        false,
        undefined,
        styles.button,
        section === 'blog'
          ? styles.purpleBackgroundOnHover
          : styles.slateBackgroundOnHover,
      ),
    [section],
  )
  return (
    <div className={`${styles.itemDescriptionContainer}`} id={id}>
      <div className={`${styles.itemDescription}`}>
        <h1 className='changa-one-regular'></h1>
        <h3 className='raleway'></h3>
        <div className='raleway'>
          <p></p>
          <div
            className={`${styles.accent} ${section === 'blog' ? styles.purpleBackground : styles.slateBackground}`}
          />
        </div>

        <button className={buttonClass} style={buttonStyle}>
          read more
        </button>
      </div>
    </div>
  )
}
