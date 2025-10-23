import styles from 'website/styles/MenuStyles.module.css'
import { Slider } from '@mui/material'

export const MenuSlider = ({
  labelText,
  statusColor,
  statusBackgroundColor,
  statusText,
  ...sliderProps
}) => {
  return (
    <div className={`${styles.slider} raleway`}>
      <div>
        <h5>{labelText}</h5>
        <div
          style={{
            color: statusColor,
            backgroundColor: statusBackgroundColor,
          }}
        >
          <span>{statusText}</span>
        </div>
      </div>
      <div>
        <Slider {...sliderProps} />
      </div>
    </div>
  )
}
