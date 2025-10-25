import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import styles from '../styles/ScrollControls.module.css'
import { ScrollContext } from './ScrollContext'
import { useScroll, useResizeEvent } from 'src'

export const ScrollControls = ({ children, pages = 1, distance = 1 }) => {
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

  // scroll lengths
  const size = useResizeEvent()
  const [scrollLength, setScrollLength] = useState(
    pages * distance * size.height,
  )
  useLayoutEffect(() => {
    setScrollLength(pages * distance * size.height)
  }, [distance, pages, size]) // must keep size to work on resizes

  // scroll callbacks
  const {
    scrollTo,
    getOffset: _getOffset,
    getClampedOffset: _getClampedOffset,
  } = useScroll(markupState.scrollElement)

  const contextValue = useMemo(
    () => ({
      scrollLength,
      scrollTo,
      getOffset: () => _getOffset(scrollLength),
      getClampedOffset: (min, max) => _getClampedOffset(min, max, scrollLength),
      ...markupState,
    }),
    [_getClampedOffset, _getOffset, markupState, scrollLength, scrollTo],
  )

  return (
    <ScrollContext.Provider value={contextValue}>
      <div className={styles.container} ref={scrollElement}>
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
}
