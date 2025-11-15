import styles from 'website/styles/ArticleLoaderTitle.module.css'
import { useResizeEvent } from 'src/hooks/useResizeEvent'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScrollControls } from 'src'
import { useTheme } from 'website/hooks/useTheme'
import { Fragment } from 'react'
import { OffsetStagger } from '../utils/damping'

export const ArticleLoaderTitle = ({
  config: {
    title,
    url,
    data: {
      markupIds: { loaderProgress },
    },
  },
  threeTunnel,
}) => {
  // refs
  const titleText = useRef()
  const titleImage = useRef()
  const textInitial = useRef()
  const imageInitial = useRef()
  const textTarget = useRef()
  const imageTarget = useRef()

  // styles
  const size = useResizeEvent()

  const titleContainerStyle = useMemo(() => {
    const progressEl = document.getElementById(loaderProgress)

    if (progressEl && size) {
      const top = progressEl.getBoundingClientRect().top
      const titleContainerStyle = {
        bottom: `${size.height - top}px`,
      }

      return titleContainerStyle
    }
  }, [loaderProgress, size]) // must keep size to update on resizes

  // const title
  const { initialMarkup, targetMarkup } = useMemo(() => {
    const initialMarkup = []
    const targetMarkup = []
    title.split(' ').forEach((word, index) => {
      initialMarkup.push(
        <Fragment key={`title-text-initial${index}`}>
          <span>
            <span className='changa-one-regular'>{word}</span>
            <span className='changa-one-regular'>{word}</span>
          </span>
          &#32;
        </Fragment>,
      )
      targetMarkup.push(
        <Fragment key={`title-text-target${index}`}>
          <span className='changa-one-regular'>{word}</span>
          &#32;
        </Fragment>,
      )
    })
    return { initialMarkup, targetMarkup }
  }, [title])
  return (
    <>
      <div className={`${styles.titleTargetContainer} changa-one-regular`}>
        <div>
          <div ref={imageTarget} className={styles.titleImageTarget} />
          <div ref={textTarget} className={styles.titleTextTarget}>
            {targetMarkup}
          </div>
        </div>
      </div>
      {titleContainerStyle && (
        <div
          className={`${styles.titleContainer} changa-one-regular`}
          style={titleContainerStyle}
        >
          <div className={styles.titleContainerInner}>
            <div className={styles.titleImageInitial} ref={imageInitial}>
              <div
                ref={titleImage}
                className={styles.titleImage}
                style={{ backgroundImage: `url(${url})` }}
              />
            </div>
            <div ref={textInitial} className={styles.titleTextInitial}>
              <div
                ref={titleText}
                className={`${styles.titleText} changa-one-regular`}
              >
                {initialMarkup}
              </div>
            </div>
          </div>
        </div>
      )}
      <threeTunnel.In>
        <Animation
          size={size}
          titleText={titleText}
          titleImage={titleImage}
          textTarget={textTarget}
          imageTarget={imageTarget}
          textInitial={textInitial}
          imageInitial={imageInitial}
        />
      </threeTunnel.In>
    </>
  )
}

const Animation = ({
  size,
  titleText,
  titleImage,
  textTarget,
  imageTarget,
  textInitial,
  imageInitial,
}) => {
  // theme data
  const {
    page: { loaderTitleFontSizeFinal, loaderTitleFontSizeInitial },
  } = useTheme()

  // animation callbacks
  const { getClampedOffset } = useScrollControls()

  const stagger = useRef(
    new OffsetStagger({
      count: textTarget.current.children.length,
      start: (index) => {
        return index / textTarget.current.children.length
      },
      end: (index) => {
        return 1
      },
    }),
  )
  const { dampTitleImage, dampTitleText } = useMemo(() => {
    if (size) {
      // image animation
      const clientRects = {
        // source and target position/scale data
        imageTarget: imageTarget.current.getBoundingClientRect(),
        imageInitial: imageInitial.current.getBoundingClientRect(),
      }
      const imageTransform = {
        // last term accounts for scale change
        x:
          clientRects.imageTarget.left -
          clientRects.imageInitial.left +
          0.5 *
            (clientRects.imageTarget.width - clientRects.imageInitial.width),

        // last term accounts for scale change
        y:
          clientRects.imageTarget.top -
          clientRects.imageInitial.top +
          0.5 *
            (clientRects.imageTarget.height - clientRects.imageInitial.height),
        scale: clientRects.imageTarget.width / clientRects.imageInitial.width,
      }

      const dampTitleImage = (offset) => {
        titleImage.current.style.transform = `translate(${imageTransform.x * offset}px, ${imageTransform.y * offset}px) scale(${1 + (imageTransform.scale - 1) * offset}, ${1 + (imageTransform.scale - 1) * offset})`
      }

      // text animation
      const textTransform = []
      const textSize = []
      for (let i = 0; i < textTarget.current.children.length; i++) {
        const initialRect =
          textInitial.current.children[0].children[i].getBoundingClientRect()
        const finalRect = textTarget.current.children[i].getBoundingClientRect()
        textTransform.push({
          y: finalRect.top - initialRect.top,

          x: finalRect.left - initialRect.left,
        })
        textSize.push({
          getSize: (offset) => ({
            width: `${initialRect.width + offset * (finalRect.width - initialRect.width)}px`,
            height: `${initialRect.height + offset * (finalRect.height - initialRect.height)}px`,
          }),
        })
      }

      // font size data
      const fontSizeInitial = +loaderTitleFontSizeInitial.replace('rem', '')
      const fontSizeFinal = +loaderTitleFontSizeFinal.replace('rem', '')

      const dampTitleText = (baseOffset) => {
        textTransform.forEach(({ x, y }, index) => {
          const offset = stagger.current.offset(index, baseOffset)
          const el = titleText.current.children[index].children[0]
          const { getSize } = textSize[index]
          const { width, height } = getSize(offset)
          el.style.width = width
          el.style.height = height
          el.style.transform = `translate(${x * offset}px, ${y * offset}px)`
          el.style.fontSize = `${fontSizeInitial + offset * (fontSizeFinal - fontSizeInitial)}rem`
        })
      }

      return { dampTitleImage, dampTitleText }
    }
  }, [
    imageInitial,
    imageTarget,
    loaderTitleFontSizeFinal,
    loaderTitleFontSizeInitial,
    size,
    textInitial,
    textTarget,
    titleImage,
    titleText,
  ]) // must keep size to update on resizes

  useFrame(() => {
    const offset = getClampedOffset(0, size.height)
    dampTitleImage(offset)
    dampTitleText(offset)
  })
}
