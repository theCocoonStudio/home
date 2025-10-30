import {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import styles from '../styles/ScrollControls.module.css'
import { ScrollContext } from './ScrollContext'
import { useScroll, useResizeEvent } from 'src'

export const ScrollControls = forwardRef(function _ScrollControls(
  { children, pages = 1, distance = 1, enabled = true },
  forwardedRef,
) {
  const scrollElement = useRef()
  const fixedMarkupContainer = useRef()
  const scrollMarkupContainer = useRef()

  // reference to markup elements
  const [markupState, setMarkupState] = useState({
    scrollElement: null,
    scrollContainer: null,
    fixedContainer: null,
  })
  useLayoutEffect(() => {
    setMarkupState({
      scrollElement: scrollElement.current,
      scrollContainer: scrollMarkupContainer.current,
      fixedContainer: fixedMarkupContainer.current,
    })
  }, [])

  // scroll length
  const size = useResizeEvent()
  const scrollLength = useMemo(
    () => pages * distance * size.height,
    [distance, pages, size], // must keep size to work on resizes
  )

  // scroll to 0 if disabled
  useLayoutEffect(() => {
    if (!enabled) {
      scrollElement.current.scrollTop = 0
    }
  }, [enabled])

  // context value
  const {
    scrollTo,
    getOffset: _getOffset,
    getClampedOffset: _getClampedOffset,
  } = useScroll(markupState.scrollElement)

  const contextValue = useMemo(
    () => ({
      _ScrollControlsContext: ScrollContext,
      scrollLength,
      scrollTo,
      getOffset: () => _getOffset(scrollLength),
      getClampedOffset: (min, max) => _getClampedOffset(min, max, scrollLength),
      ...markupState,
    }),
    [_getClampedOffset, _getOffset, markupState, scrollLength, scrollTo],
  )

  useImperativeHandle(forwardedRef, () => contextValue, [contextValue])

  return (
    <ScrollContext.Provider value={contextValue}>
      <div
        className={styles.container}
        ref={scrollElement}
        style={{ overflowY: enabled ? 'auto' : 'hidden' }}
        onScroll={() => {
          /* 
          prevent browser from continuing to scroll. This can happen if:
          1. user provides scroll input
          2. browser-implemented scroll damping isn't yet finished after input stops
          3. use navigates while damping isn't yet finished
          4. new page compilation is quick
          5. scroll damping not yet finished after compilation is

          Note that the `style` prop above is also required or browser may continue
          to scroll through all these compilation state changes
          */
          if (!enabled) {
            scrollElement.current.scrollTop = 0
          }
        }}
      >
        <div className={styles.fixed}>
          <div className={styles.canvasContainer}>{children}</div>
          <div ref={fixedMarkupContainer} className={styles.fixedMarkup}></div>
        </div>
        <div
          className={styles.fill}
          style={{ height: `${pages * distance * 100}%` }}
        />
        <div
          ref={scrollMarkupContainer}
          className={styles.markup}
          style={{ height: `${pages * distance * 100 + 100}%` }}
        />
      </div>
    </ScrollContext.Provider>
  )
})
