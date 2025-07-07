import { useMemo, useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { changaOne, raleway } from '../utils/styles'
import styles from 'website/styles/HomeSettings.module.css'
import Switch from '@mui/material/Switch'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import InfoOutlineIcon from '@mui/icons-material/InfoOutline'
import Popover from '@mui/material/Popover'
import { ClickAwayListener, Slider } from '@mui/material'

export const HomeSettings = ({ config }) => {
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

  const [checked, setChecked] = useState(true)
  const [performanceAnchor, setPerformanceAnchor] = useState(null)
  const [scrollAnchor, setScrollAnchor] = useState(null)
  const [resolution, setResolution] = useState(0.5)
  const [frames, setFrames] = useState(1)
  const [mapSize, setMapsize] = useState(1.0)
  const [focusFactor, setFocusFactor] = useState(1.0)
  const [scrollDistance, setScrollDistance] = useState(1.0)

  const labelStyles = useMemo(
    () => ({
      autoThrottle: {
        color: checked ? black : white,
        backgroundColor: checked ? white : black,
      },
      resolution: {
        color: !checked ? black : white,
        backgroundColor: !checked ? white : black,
      },
      frames: {
        color: !checked ? black : white,
        backgroundColor: !checked ? white : black,
      },
      mapsize: {
        color: !checked ? black : white,
        backgroundColor: !checked ? white : black,
      },
    }),
    [black, checked, white],
  )
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
              onClickAway={(e) => {
                if (performanceAnchor) {
                  setPerformanceAnchor(null)
                }
              }}
            >
              <p style={popoverStyle} className={popoverClassName}>
                Use the radio buttons to adjust the anchorOrigin and
                transformOrigin positions. You can also set the anchorReference
                to anchorPosition or anchorEl. When it is anchorPosition, the
                component will, instead of anchorEl, refer to the anchorPosition
                prop which you can adjust to set the position of the popover.
              </p>
            </ClickAwayListener>
          </Popover>
        </div>
      </div>
      <div style={switchStyle} className={switchClassName}>
        <div>
          <h5>Auto-throttle:</h5>
          <div style={labelStyles.autoThrottle}>
            <span>{checked ? 'ON' : 'OFF'}</span>
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
            onChange={() => {
              setChecked((prev) => !prev)
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
            min={0.1}
            max={1}
            shiftStep={0.1}
            step={0.1}
            disabled={checked}
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
            min={1}
            max={6}
            shiftStep={1}
            step={1}
            disabled={checked}
          />
        </div>
      </div>
      <div style={sliderStyle} className={sliderClassName}>
        <div>
          <h5>Light Resolution:</h5>
          <div style={labelStyles.mapsize}>
            <span>{mapSize}</span>
          </div>
        </div>
        <div>
          <Slider
            aria-label='Light Resolution'
            value={mapSize}
            valueLabelDisplay='off'
            onChange={(e, newVal) => {
              setMapsize(parseFloat(newVal.toFixed(2)))
            }}
            color='common.black'
            min={0.5}
            max={1.0}
            shiftStep={0.1}
            step={0.1}
            disabled={checked}
          />
        </div>
      </div>
      <div className={titleClassName} style={titleStyle}>
        <h4>Scroll</h4>
        <div
          onClick={(e) => {
            if (!scrollAnchor) {
              setPerformanceAnchor(e.target)
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
              onClickAway={(e) => {
                if (scrollAnchor) {
                  setScrollAnchor(null)
                }
              }}
            >
              <p style={popoverStyle} className={popoverClassName}>
                Use the radio buttons to adjust the anchorOrigin and
                transformOrigin positions. You can also set the anchorReference
                to anchorPosition or anchorEl. When it is anchorPosition, the
                component will, instead of anchorEl, refer to the anchorPosition
                prop which you can adjust to set the position of the popover.
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
            min={0.1}
            max={3.0}
            shiftStep={0.1}
            step={0.1}
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
            min={0.1}
            max={3.0}
            shiftStep={0.1}
            step={0.1}
          />
        </div>
      </div>
    </div>
  )
}
