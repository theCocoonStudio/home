import { useMemo } from 'react'
import { useTheme } from '../hooks/useTheme'
import { changaOne } from '../utils/styles'
import styles from 'website/styles/HomeSettings.module.css'

export const HomeSettings = ({ config }) => {
  const {
    colors: { white, black },
  } = useTheme()

  const {
    style: titleWithDescriptionStyle,
    className: titleWithDescriptionClassName,
  } = useMemo(() => changaOne(true, undefined, styles.titleWithDescription), [])
  return (
    <div className={styles.container}>
      <div
        className={titleWithDescriptionClassName}
        style={titleWithDescriptionStyle}
      >
        <h4>Performance</h4>{' '}
        <svg
          viewBox='0,0,48,48'
          xmlns='http://www.w3.org/2000/svg'
          strokeWidth={3}
          transform='rotate(0) matrix(1 0 0 1 0 0)'
          width={16}
          height={16}
        >
          <g fill='none'>
            <path
              fill={white}
              stroke={black}
              strokeLinejoin='round'
              strokeWidth={5}
              d='M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z'
            />
            <path
              fill={black}
              fillRule='evenodd'
              d='M24 11C25.3807 11 26.5 12.1193 26.5 13.5C26.5 14.8807 25.3807 16 24 16C22.6193 16 21.5 14.8807 21.5 13.5C21.5 12.1193 22.6193 11 24 11Z'
              clipRule='evenodd'
            />
            <path
              stroke={black}
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={5}
              d='M24.5 34V20H23.5H22.5'
            />
            <path
              stroke={black}
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={5}
              d='M21 34H28'
            />
          </g>
        </svg>
      </div>
    </div>
  )
}
