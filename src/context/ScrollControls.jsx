import {
  forwardRef,
  useCallback,
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
  {
    children,
    useScrollMarkupHeight = false,
    pages = 1,
    distance = 1,
    enabled = true,
  },
  forwardedRef,
) {
  // independent data
  const size = useResizeEvent()
  // markup elements
  const scrollElement = useRef()
  const fillElement = useRef()
  const fixedMarkupContainer = useRef()
  const scrollMarkupContainer = useRef()

  const [markupState, setMarkupState] = useState({
    scrollElement: null,
    fillElement: null,
    scrollContainer: null,
    fixedContainer: null,
  })
  useLayoutEffect(() => {
    setMarkupState({
      scrollElement: scrollElement.current,
      fillElement: fillElement.current,
      scrollContainer: scrollMarkupContainer.current,
      fixedContainer: fixedMarkupContainer.current,
    })
  }, [])

  // scroll length
  const [scrollLength, setScrollLength] = useState()
  useLayoutEffect(() => {
    if (markupState.scrollContainer) {
      setScrollLength(
        useScrollMarkupHeight
          ? markupState.scrollContainer.clientHeight - size.height
          : pages * distance * size.height,
      )
    }
  }, [distance, markupState, pages, size, useScrollMarkupHeight])

  // abort callback
  const abort = useRef(false)
  const abortScrollCallback = useCallback(() => {
    if (abort.current) {
      scrollElement.current.scrollTop = 0
      return true
    }
    return false
  }, [])

  // scroll to 0 if disabled; toggle abort ref
  useLayoutEffect(() => {
    if (!enabled) {
      abort.current = true
      scrollElement.current.scrollTop = 0
    } else {
      abort.current = false
    }
  }, [enabled])

  // context value
  const {
    scrollTo,
    getOffset: _getOffset,
    getClampedOffset: _getClampedOffset,
  } = useScroll(markupState.scrollElement, abortScrollCallback)

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
        <div className={styles.fixed}>{children}</div>
        <div
          ref={fillElement}
          className={styles.fill}
          style={{ height: `${scrollLength}px` }}
        />
        <div
          className={styles.markup}
          style={{
            height: `calc(${scrollLength}px + 100%)`,
          }}
        >
          <div ref={fixedMarkupContainer} className={styles.fixedMarkup} />
          <div className={styles.scrollMarkup}>
            <div ref={scrollMarkupContainer} />
          </div>
        </div>
      </div>
    </ScrollContext.Provider>
  )
})
