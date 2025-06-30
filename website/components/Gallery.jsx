import styles from 'website/styles/Gallery.module.css'
import { useTheme } from '../hooks/useTheme'
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useTargetItems } from '../pages/Home/useTargetItems'
import { useLightbox } from '../hooks/useLightbox'
import { raleway } from '../utils/styles'

export const Gallery = ({
  config: {
    content: {
      sections: {
        photography: { items },
      },
    },
  },
}) => {
  const {
    colors: { black, white },
    lengths: { atomicPadding, navHeight, footerHeight },
  } = useTheme()

  const targetItems = useTargetItems()
  const { showLightbox } = useLightbox()

  const containerStyle = useMemo(
    () => ({
      marginRight: `calc(8 * ${atomicPadding}px)`,
      marginLeft: `calc(8 * ${atomicPadding}px)`,
      marginTop: `${navHeight}px`,
      marginBottom: `${footerHeight}px`,
    }),
    [atomicPadding, footerHeight, navHeight],
  )

  const photoContainer = useRef()
  const [itemIndex, setItemIndex] = useState(0)

  useLayoutEffect(() => {
    if (showLightbox && targetItems) {
      const index =
        targetItems.refs.photographyRef.current.activeItemIndexRef.current
      photoContainer.current.style.transform = `translateX(calc(-1 * 100% * ${index}))`
      setItemIndex(index)
    } else {
      setItemIndex(0)
      photoContainer.current.style.transform = `translateX(0)`
      photoContainer.current.style.transition = 'transform 0s'
    }
  }, [showLightbox, targetItems])

  const photoStyle = useMemo(
    () => items.map((item) => ({ backgroundImage: `url("${item.url}")` })),
    [items],
  )

  const shiftRight = useCallback(() => {
    if (itemIndex + 1 < items.length) {
      photoContainer.current.style.transition = 'transform .2s'
      photoContainer.current.style.transform = `translateX(calc(-1 * 100% * ${itemIndex + 1}))`
      setItemIndex((prev) => prev + 1)
    }
  }, [itemIndex, items.length])

  const shiftLeft = useCallback(() => {
    if (itemIndex - 1 >= 0) {
      photoContainer.current.style.transition = 'transform .2s'
      photoContainer.current.style.transform = `translateX(calc(-1 * 100% * ${itemIndex - 1}))`
      setItemIndex((prev) => prev - 1)
    }
  }, [itemIndex])

  const photos = useMemo(
    () =>
      items.map((item, i) => (
        <div
          className={styles.photo}
          style={photoStyle[i]}
          key={`galleryItem${i}`}
        />
      )),
    [items, photoStyle],
  )

  const description = useRef()
  const controlsDescriptionContainerStyle = useMemo(
    () => ({
      height: `${footerHeight}px`,
      paddingRight: `calc(8 * ${atomicPadding}px)`,
      paddingLeft: `calc(8 * ${atomicPadding}px)`,
      paddingTop: `calc(4 * ${atomicPadding}px)`,
      paddingBottom: `calc(4 * ${atomicPadding}px)`,
    }),
    [atomicPadding, footerHeight],
  )

  const { style: descStyle, className: descClass } = useMemo(
    () => raleway(400, false, { color: white }, styles.description),
    [white],
  )

  useLayoutEffect(() => {
    description.current.innerText = items[itemIndex].description
  }, [itemIndex, items])
  return (
    <>
      <div className={styles.container} style={containerStyle}>
        <div className={styles.photoContainer} ref={photoContainer}>
          {photos}
        </div>
      </div>
      <div
        className={styles.controlsDescriptionContainer}
        style={controlsDescriptionContainerStyle}
      >
        <div className={styles.control} onClick={shiftLeft}>
          <svg
            viewBox='0,0,48,48'
            xmlns='http://www.w3.org/2000/svg'
            width={48}
            height={48}
            strokeWidth={3}
            transform='rotate(0) matrix(1 0 0 1 0 0)'
          >
            <g fill='none' strokeLinejoin='round' strokeWidth={3}>
              <path
                fill={black}
                stroke={white}
                d='M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z'
              />
              <path
                stroke={white}
                strokeLinecap='round'
                d='M27 33L18 24L27 15'
              />
            </g>
          </svg>
        </div>
        <p ref={description} style={descStyle} className={descClass}>
          test wqoifhqw doiqwhdq
        </p>
        <div className={styles.control} onClick={shiftRight}>
          <svg
            viewBox='0,0,48,48'
            xmlns='http://www.w3.org/2000/svg'
            width={48}
            height={48}
            strokeWidth={3}
            transform='rotate(0) matrix(1 0 0 1 0 0)'
          >
            <g fill='none' strokeLinejoin='round' strokeWidth={3}>
              <path
                fill={black}
                stroke={white}
                d='M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z'
              />
              <path
                stroke={white}
                strokeLinecap='round'
                d='M27 33L18 24L27 15'
              />
            </g>
          </svg>
        </div>
      </div>
    </>
  )
}
