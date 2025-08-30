import { useEffect, useMemo, useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { changaOne, raleway } from '../utils/styles'
import styles from 'website/styles/HomeSettings.module.css'
import Switch from '@mui/material/Switch'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import InfoOutlineIcon from '@mui/icons-material/InfoOutline'
import Popover from '@mui/material/Popover'
import { ClickAwayListener, Slider } from '@mui/material'
import { useSettings } from 'website/pages/Home/useSettings'
import { useScrollEvent } from '../pages/Home/useScrollEvent'

export const HomeSettings = ({
  /* config, */
  setScrollDistanceFactor,
  setShowMenu,
}) => {
  const {
    colors: { white, black },
    lengths: { atomicPadding },
  } = useTheme()

  const { style: titleStyle, className: titleClassName } = useMemo(
    () => changaOne(true, undefined, styles.title),
    [],
  )
  const { style: switchStyle, className: switchClassName } = useMemo(
    () => raleway(400, false, undefined, styles.switch),
    [],
  )
  const { style: sliderStyle, className: sliderClassName } = useMemo(
    () => raleway(400, false, undefined, styles.slider),
    [],
  )
  const { style: popoverStyle, className: popoverClassName } = useMemo(
    () =>
      raleway(
        400,
        false,
        { padding: `${2 * atomicPadding}px` },
        styles.popover,
      ),
    [atomicPadding],
  )

  const { style: buttonStyle, className: buttonClassname } = useMemo(
    () => raleway(350, false, undefined, styles.button),
    [],
  )

  const [performanceAnchor, setPerformanceAnchor] = useState(null)
  const [scrollAnchor, setScrollAnchor] = useState(null)

  const {
    original,
    resetSettings,
    auto,
    setAuto,
    resolution,
    setResolution,
    frames,
    setFrames,
    mapSize,
    setMapsize,
    focusFactor,
    setFocusFactor,
    scrollDistance,
    setScrollDistance,
    defaultSettings,
  } = useSettings()
  const labelStyles = useMemo(
    () => ({
      autoThrottle: {
        color: auto ? black : white,
        backgroundColor: auto ? white : black,
      },
      resolution: {
        color: !auto ? black : white,
        backgroundColor: !auto ? white : black,
      },
      frames: {
        color: !auto ? black : white,
        backgroundColor: !auto ? white : black,
      },
      mapsize: {
        color: !auto ? black : white,
        backgroundColor: !auto ? white : black,
      },
    }),
    [black, auto, white],
  )

  useEffect(() => {
    setScrollDistanceFactor(scrollDistance)
  }, [scrollDistance, setScrollDistanceFactor])

  const section = useScrollEvent()
  useEffect(() => {
    if (section === 'preScroll' || section === 'postScroll') {
      setShowMenu(false)
    }
  }, [section, setShowMenu])

  return (
    <div className={styles.container}>
      <div className={titleClassName} style={titleStyle}>
        <h4>Performance</h4>
        <div
          onClick={(e) => {
            if (!performanceAnchor) {
              setPerformanceAnchor(e.target)
            }
          }}
        >
          <InfoOutlineIcon />
          <Popover
            open={performanceAnchor}
            anchorEl={performanceAnchor}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'left',
            }}
          >
            <ClickAwayListener
              onClickAway={() => {
                if (performanceAnchor) {
                  setPerformanceAnchor(null)
                }
              }}
            >
              <p style={popoverStyle} className={popoverClassName}>
                Graphics quality and frame rate (fps) have an inverse
                relationship. If your battery is low or your screen resolution
                is very high may, you may need to compromise on graphics or on
                frame rate. <br />
                <br />
                <i>Auto-throttle</i> will automatically degrade/boost graphics
                to reach an ideal frame rate and UX.
                <br />
                <br />
                <strong>
                  Toggling <i>auto-throttle</i> is recommended for nerds only.
                </strong>
              </p>
            </ClickAwayListener>
          </Popover>
        </div>
      </div>
      <div style={switchStyle} className={switchClassName}>
        <div>
          <h5>Auto-throttle:</h5>
          <div style={labelStyles.autoThrottle}>
            <span>{auto ? 'ON' : 'OFF'}</span>
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
            checked={auto}
            onChange={() => {
              setAuto((prev) => !prev)
            }}
          />
        </div>
      </div>
      <div style={sliderStyle} className={sliderClassName}>
        <div>
          <h5>Fluid Resolution:</h5>
          <div style={labelStyles.resolution}>
            <span>{resolution}</span>
          </div>
        </div>
        <div>
          <Slider
            aria-label='Fluid resolution'
            value={resolution}
            valueLabelDisplay='off'
            onChange={(e, newVal) => {
              setResolution(parseFloat(newVal.toFixed(2)))
            }}
            color='common.black'
            min={defaultSettings.performance.resolution.min}
            max={defaultSettings.performance.resolution.max}
            shiftStep={defaultSettings.performance.resolution.step}
            step={defaultSettings.performance.resolution.step}
            disabled={auto}
          />
        </div>
      </div>
      <div style={sliderStyle} className={sliderClassName}>
        <div>
          <h5>Fluid Frames:</h5>
          <div style={labelStyles.frames}>
            <span>{`1 / ${frames}`}</span>
          </div>
        </div>
        <div>
          <Slider
            aria-label='Fluid Frames'
            value={frames}
            valueLabelDisplay='off'
            onChange={(e, newVal) => {
              setFrames(parseInt(newVal))
            }}
            color='common.black'
            min={defaultSettings.performance.frames.min}
            max={defaultSettings.performance.frames.max}
            shiftStep={defaultSettings.performance.frames.step}
            step={defaultSettings.performance.frames.step}
            disabled={auto}
          />
        </div>
      </div>
      <div style={sliderStyle} className={sliderClassName}>
        <div>
          <h5>Light Resolution:</h5>
          <div style={labelStyles.mapsize}>
            <span>{parseInt(2 ** mapSize)}</span>
          </div>
        </div>
        <div>
          <Slider
            aria-label='Light Resolution'
            value={mapSize}
            valueLabelDisplay='off'
            onChange={(e, newVal) => {
              setMapsize(parseInt(newVal))
            }}
            color='common.black'
            min={defaultSettings.performance.mapSize.min}
            max={defaultSettings.performance.mapSize.max}
            shiftStep={defaultSettings.performance.mapSize.step}
            step={defaultSettings.performance.mapSize.step}
            disabled={auto}
          />
        </div>
      </div>
      <div className={titleClassName} style={titleStyle}>
        <h4>Scroll</h4>
        <div
          onClick={(e) => {
            if (!scrollAnchor) {
              setScrollAnchor(e.target)
            }
          }}
        >
          <InfoOutlineIcon />
          <Popover
            open={scrollAnchor}
            anchorEl={scrollAnchor}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'left',
            }}
          >
            <ClickAwayListener
              onClickAway={() => {
                if (scrollAnchor) {
                  setScrollAnchor(null)
                }
              }}
            >
              <p style={popoverStyle} className={popoverClassName}>
                These settings let you modify the scroll-based interaction with
                the page content.
                <br />
                <br />
                <i>Scroll Distance:</i>
                <br /> Greater distance, slower scroll. Smaller distance, faster
                scroll.
                <br />
                <br />
                <i>Focus Factor:</i> <br />
                The proportion of animation time during which items are in focus
                and stationary.
              </p>
            </ClickAwayListener>
          </Popover>
        </div>
      </div>
      <div style={sliderStyle} className={sliderClassName}>
        <div>
          <h5>Scroll Distance:</h5>
          <div>
            <span>{scrollDistance}</span>
          </div>
        </div>
        <div>
          <Slider
            aria-label='Scroll Distance'
            value={scrollDistance}
            valueLabelDisplay='off'
            onChange={(e, newVal) => {
              setScrollDistance(parseFloat(newVal.toFixed(2)))
            }}
            color='common.black'
            min={defaultSettings.scroll.scrollDistance.min}
            max={defaultSettings.scroll.scrollDistance.max}
            shiftStep={defaultSettings.scroll.scrollDistance.step}
            step={defaultSettings.scroll.scrollDistance.step}
          />
        </div>
      </div>
      <div style={sliderStyle} className={sliderClassName}>
        <div>
          <h5>Focus Factor:</h5>
          <div>
            <span>{focusFactor}</span>
          </div>
        </div>
        <div>
          <Slider
            aria-label='Focus Factor'
            value={focusFactor}
            valueLabelDisplay='off'
            onChange={(e, newVal) => {
              setFocusFactor(parseFloat(newVal.toFixed(2)))
            }}
            color='common.black'
            min={defaultSettings.scroll.focusFactor.min}
            max={defaultSettings.scroll.focusFactor.max}
            shiftStep={defaultSettings.scroll.focusFactor.step}
            step={defaultSettings.scroll.focusFactor.step}
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <div
          onClick={original ? undefined : resetSettings}
          className={`${buttonClassname} ${original ? styles.disabledButton : styles.activeButton}`}
          style={buttonStyle}
        >
          reset
        </div>
      </div>
    </div>
  )
}
