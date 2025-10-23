import styles from 'website/styles/MenuStyles.module.css'
import InfoOutlineIcon from '@mui/icons-material/InfoOutline'
import Popover from '@mui/material/Popover'

export const MenuTitle = ({
  open,
  anchorEl,
  onPopoverClick,
  onClickAwayClick,
  title,
  PopoverContent,
  popoverContentProps = {},
  children,
}) => {
  return (
    <div className={`${styles.title} changa-one-regular-italic`}>
      <h4>{title}</h4>
      <div onClick={onPopoverClick}>
        <InfoOutlineIcon />
        <Popover
          onClose={onClickAwayClick}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
        >
          <p className={`${styles.popover} raleway`}>
            {children || <PopoverContent {...popoverContentProps} />}
          </p>
        </Popover>
      </div>
    </div>
  )
}
