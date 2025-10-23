import styles from 'website/styles/MenuStyles.module.css'
import Switch from '@mui/material/Switch'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'

export const MenuSwitch = ({
  statusColor,
  statusBackgroundColor,
  statusText,
  labelText,
  checked,
  onChange,
}) => {
  return (
    <div className={`${styles.switch} raleway`}>
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
        <Switch
          checkedIcon={
            <CheckIcon
              sx={{
                fontSize: 'switchIcon',
                borderRadius: '50%',
                backgroundColor: 'common.black',
                p: '3px',
                color: 'common.white',
              }}
            />
          }
          icon={
            <CloseIcon
              sx={{
                fontSize: 'switchIcon',
                borderRadius: '50%',
                backgroundColor: 'common.black',
                p: '4px',
              }}
            />
          }
          edge='end'
          checked={checked}
          onChange={onChange}
        />
      </div>
    </div>
  )
}
