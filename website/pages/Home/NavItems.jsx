import { useMemo } from 'react'
import { useTheme } from '../../hooks/useTheme'
import styles from './Home.styles.module.css'
import { useScrollEvent } from './useScrollEvent'
import { useScroll } from 'src/hooks'

export const NavItems = ({
  config: {
    content: { sections },
  },
  scrollContainer,
}) => {
  const {
    colors: { slate, black, midnight, charcoal, purple, white },
  } = useTheme()

  const section = useScrollEvent()
  const scrollTo = useScroll(scrollContainer)
  const targets = useMemo(() => {
    const targetFuncs = {}
    Object.keys(sections).forEach((section) => {
      targetFuncs[section] = () => {
        scrollTo(
          sections[section].items[0].range[0] +
            sections[section].items[0].range[1] / 2,
        )
      }
    })
    return targetFuncs
  }, [scrollTo, sections])
  const softwareStyle = useMemo(
    () => ({
      pointerEvents: section === 'preScroll' ? 'none' : 'auto',
      color: section === 'preScroll' ? `${black}` : `${slate}`,
    }),
    [black, section, slate],
  )
  const photographyStyle = useMemo(
    () => ({
      pointerEvents: section === 'preScroll' ? 'none' : 'auto',
      color:
        section === 'preScroll' || section === 'software'
          ? `${black}`
          : `${charcoal}`,
    }),
    [black, charcoal, section],
  )
  const musicyStyle = useMemo(
    () => ({
      pointerEvents: section === 'preScroll' ? 'none' : 'auto',
      color:
        section === 'preScroll' ||
        section === 'software' ||
        section === 'photography'
          ? `${black}`
          : `${charcoal}`,
    }),
    [black, charcoal, section],
  )
  const blogStyle = useMemo(
    () => ({
      pointerEvents: section === 'preScroll' ? 'none' : 'auto',
      color:
        section === 'preScroll' ||
        section === 'software' ||
        section === 'photography' ||
        section === 'music'
          ? `${black}`
          : `${purple}`,
    }),
    [black, purple, section],
  )

  const currentRangeKey = useScrollEvent()

  const slateStyle = useMemo(
    () => ({
      backgroundColor: `${slate}`,
    }),
    [slate],
  )
  const midnightStyle = useMemo(
    () => ({
      backgroundColor: `${midnight}`,
    }),
    [midnight],
  )
  const charcoalStyle = useMemo(
    () => ({
      backgroundColor: `${charcoal}`,
    }),
    [charcoal],
  )
  const purpleStyle = useMemo(
    () => ({
      backgroundColor: `${purple}`,
    }),
    [purple],
  )
  return (
    <>
      <div
        className={styles.iconContainer}
        style={softwareStyle}
        onClick={targets.software}
      >
        {/* free-icons.github.io */}
        <>
          <svg
            viewBox='0,0,48,48'
            xmlns='http://www.w3.org/2000/svg'
            width={36}
            height={36}
            strokeWidth={3}
            transform='rotate(0) matrix(1 0 0 1 0 0)'
          >
            <g fill='none'>
              <path
                stroke={`${black}`}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={3}
                d='M23 40H7C5.34315 40 4 38.6569 4 37V11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V25.8824'
              />
              <path
                fill={softwareStyle.color}
                stroke={`${black}`}
                strokeWidth={3}
                d='M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z'
              />
              <path
                stroke={`${black}`}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={3}
                d='M34 33L30 37L34 41'
              />
              <path
                stroke={`${black}`}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={3}
                d='M40 33L44 37L40 41'
              />
              <circle
                r={2}
                fill={`${white}`}
                transform='matrix(0 -1 -1 0 10 14)'
              />
              <circle
                r={2}
                fill={`${white}`}
                transform='matrix(0 -1 -1 0 16 14)'
              />
            </g>
          </svg>
        </>

        {currentRangeKey === 'software' && (
          <div style={slateStyle} className={styles.active} />
        )}
      </div>
      <div
        className={styles.iconContainer}
        style={photographyStyle}
        onClick={targets.photography}
      >
        <>
          <svg
            viewBox='0,0,48,48'
            xmlns='http://www.w3.org/2000/svg'
            width={36}
            height={36}
            strokeWidth={3}
            transform='rotate(0) matrix(1 0 0 1 0 0)'
          >
            <g
              fill='none'
              stroke={`${black}`}
              strokeLinejoin='round'
              strokeWidth={3}
            >
              <path
                strokeLinecap='round'
                d='M5 10C5 8.89543 5.89543 8 7 8L41 8C42.1046 8 43 8.89543 43 10V38C43 39.1046 42.1046 40 41 40H7C5.89543 40 5 39.1046 5 38V10Z'
                clipRule='evenodd'
              />
              <path
                strokeLinecap='round'
                d='M14.5 18C15.3284 18 16 17.3284 16 16.5C16 15.6716 15.3284 15 14.5 15C13.6716 15 13 15.6716 13 16.5C13 17.3284 13.6716 18 14.5 18Z'
                clipRule='evenodd'
              />
              <path
                fill={photographyStyle.color}
                d='M15 24L20 28L26 21L43 34V38C43 39.1046 42.1046 40 41 40H7C5.89543 40 5 39.1046 5 38V34L15 24Z'
              />
            </g>
          </svg>
        </>

        {currentRangeKey === 'photography' && (
          <div style={charcoalStyle} className={styles.active} />
        )}
      </div>
      {Object.keys(sections).includes('music') && (
        <div
          className={styles.iconContainer}
          style={musicyStyle}
          onClick={targets.music}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='1em'
            fill='currentColor'
            viewBox='0 0 512 512'
          >
            <path d='M 33.736434108527135 25.7984496124031 Q 35.72093023255814 47.627906976744185 57.55038759689923 49.6124031007752 L 454.4496124031008 49.6124031007752 L 454.4496124031008 49.6124031007752 Q 476.27906976744185 47.627906976744185 478.26356589147287 25.7984496124031 Q 476.27906976744185 3.9689922480620154 454.4496124031008 1.9844961240310077 L 57.55038759689923 1.9844961240310077 L 57.55038759689923 1.9844961240310077 Q 35.72093023255814 3.9689922480620154 33.736434108527135 25.7984496124031 L 33.736434108527135 25.7984496124031 Z M 49.6124031007752 160.74418604651163 Q 27.782945736434108 160.74418604651163 13.891472868217054 176.6201550387597 Q 0 193.48837209302326 1.9844961240310077 214.32558139534885 L 33.736434108527135 468.3410852713178 L 33.736434108527135 468.3410852713178 Q 36.713178294573645 486.2015503875969 49.6124031007752 498.1085271317829 Q 62.51162790697674 510.015503875969 81.36434108527132 510.015503875969 L 430.6356589147287 510.015503875969 L 430.6356589147287 510.015503875969 Q 449.48837209302326 510.015503875969 462.38759689922483 498.1085271317829 Q 475.28682170542635 486.2015503875969 478.26356589147287 468.3410852713178 L 510.015503875969 214.32558139534885 L 510.015503875969 214.32558139534885 Q 512 193.48837209302326 498.1085271317829 176.6201550387597 Q 484.2170542635659 160.74418604651163 462.38759689922483 160.74418604651163 L 49.6124031007752 160.74418604651163 L 49.6124031007752 160.74418604651163 Z M 438.5736434108527 343.3178294573643 Q 436.5891472868217 400.86821705426354 384.9922480620155 438.5736434108527 L 384.9922480620155 438.5736434108527 L 384.9922480620155 438.5736434108527 Q 333.3953488372093 477.27131782945736 256 478.26356589147287 Q 178.6046511627907 477.27131782945736 127.0077519379845 438.5736434108527 Q 75.4108527131783 400.86821705426354 73.42635658914729 343.3178294573643 Q 75.4108527131783 285.7674418604651 127.0077519379845 248.06201550387595 Q 178.6046511627907 209.36434108527132 256 208.37209302325581 Q 333.3953488372093 209.36434108527132 384.9922480620155 248.06201550387595 Q 436.5891472868217 285.7674418604651 438.5736434108527 343.3178294573643 L 438.5736434108527 343.3178294573643 Z M 256 375.06976744186045 Q 269.8914728682171 375.06976744186045 278.8217054263566 368.1240310077519 L 278.8217054263566 368.1240310077519 L 278.8217054263566 368.1240310077519 Q 287.7519379844961 361.1782945736434 287.7519379844961 351.25581395348837 Q 287.7519379844961 341.3333333333333 278.8217054263566 334.38759689922483 Q 269.8914728682171 327.4418604651163 256 327.4418604651163 Q 242.10852713178295 327.4418604651163 233.1782945736434 334.38759689922483 Q 224.24806201550388 341.3333333333333 224.24806201550388 351.25581395348837 Q 224.24806201550388 361.1782945736434 233.1782945736434 368.1240310077519 Q 242.10852713178295 375.06976744186045 256 375.06976744186045 L 256 375.06976744186045 Z M 41.674418604651166 81.36434108527132 Q 19.844961240310077 83.34883720930233 17.86046511627907 105.17829457364341 Q 19.844961240310077 127.0077519379845 41.674418604651166 128.9922480620155 L 470.3255813953488 128.9922480620155 L 470.3255813953488 128.9922480620155 Q 492.15503875968994 127.0077519379845 494.13953488372096 105.17829457364341 Q 492.15503875968994 83.34883720930233 470.3255813953488 81.36434108527132 L 41.674418604651166 81.36434108527132 L 41.674418604651166 81.36434108527132 Z' />
          </svg>
          {currentRangeKey === 'music' && (
            <div style={charcoalStyle} className={styles.active} />
          )}
        </div>
      )}
      <div
        className={styles.iconContainer}
        style={blogStyle}
        onClick={targets.blog}
      >
        <>
          <svg
            viewBox='0,0,48,48'
            xmlns='http://www.w3.org/2000/svg'
            width={36}
            height={36}
            strokeWidth={3}
            transform='rotate(0) matrix(1 0 0 1 0 0)'
          >
            <g fill='none' strokeLinejoin='round' strokeWidth={3}>
              <path
                fill={blogStyle.color}
                stroke={`${black}`}
                d='M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z'
              />
              <path
                fill={blogStyle.color}
                stroke={`${white}`}
                d='M36 16H28V24H36V16Z'
              />
              <path stroke={`${white}`} strokeLinecap='round' d='M12 32H36' />
              <path stroke={`${white}`} strokeLinecap='round' d='M12 16H18' />
              <path stroke={`${white}`} strokeLinecap='round' d='M12 24H18' />
            </g>
          </svg>
        </>

        {currentRangeKey === 'blog' && (
          <div style={purpleStyle} className={styles.active} />
        )}
      </div>
    </>
  )
}
