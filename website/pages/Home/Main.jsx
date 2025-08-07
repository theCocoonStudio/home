import { useCallback, useEffect, useMemo } from 'react'
import styles from './Home.styles.module.css'
import { raleway, changaOne } from '../../utils/styles'
import { useScrollEvent } from './useScrollEvent'
import { useTheme } from '../../hooks/useTheme'
import { useScroll } from 'src/hooks'
import { useTargetItems } from './useTargetItems'
import { useLightbox } from '../../hooks/useLightbox'

export const Main = function Main({
  scrollContainer,
  ready,
  config: {
    content: { sections },
    main: {
      markupIds: {
        title,
        subtitle,
        description: descriptionId,
        itemDescription,
        photographyButton,
      },
    },
    style: { sidePaddingFactor, titleHeight },
  },
}) {
  const {
    lengths: { atomicPadding, footerHeight, navHeight },
    colors: { black, white },
  } = useTheme()
  const section = useScrollEvent()
  const scrollTo = useScroll(scrollContainer)

  const scrollHome = useCallback(() => {
    scrollTo(0.0)
  }, [scrollTo])

  const targetItems = useTargetItems()

  const { showLightbox, setShowLightbox, setOnLightboxExitClick } =
    useLightbox()

  const openLightbox = useCallback(() => {
    setShowLightbox(true)

    targetItems.refs.photographyRef.current.photographyBackgroundRef.current.visible = false
    targetItems.refs.photographyRef.current.photographyItemsGroup.visible = false
    targetItems.refs.softwareRef.current.softwareItemsGroup.visible = false
    targetItems.refs.bgRef.current.manualRef.current = false

    targetItems.refs.bgRef.current.backgroundRef.current.material.color.set(
      black,
    )
    targetItems.refs.bgRef.current.backingMaterialRef.current.color.set(white)
  }, [black, setShowLightbox, targetItems, white])

  const closeLightbox = useCallback(() => {
    targetItems.refs.bgRef.current.backgroundRef.current.material.color.set(
      white,
    )
    targetItems.refs.bgRef.current.backingMaterialRef.current.color.set(black)
    targetItems.refs.photographyRef.current.photographyBackgroundRef.current.visible = true
    targetItems.refs.photographyRef.current.photographyItemsGroup.visible = true
    targetItems.refs.softwareRef.current.softwareItemsGroup.visible = true
    targetItems.refs.bgRef.current.manualRef.current = true
    setShowLightbox(false)
  }, [black, setShowLightbox, targetItems, white])

  useEffect(() => {
    setOnLightboxExitClick(closeLightbox)
  }, [closeLightbox, setOnLightboxExitClick])

  const { style, className } = useMemo(
    () =>
      changaOne(
        false,
        {
          cursor: section === 'preScroll' ? 'auto' : 'pointer',
          opacity: showLightbox ? 0 : 1,
        },
        styles.title,
      ),
    [section, showLightbox],
  )

  const { style: subContainerStyle, className: subContainerClass } = useMemo(
    () =>
      raleway(
        400,
        false,
        {
          opacity: showLightbox ? 0 : 1,
        },
        styles.subtitleContainer,
      ),
    [showLightbox],
  )

  const { style: descStyle, className: descClass } = useMemo(
    () => raleway(400, false, undefined, styles.description),
    [],
  )

  const { style: buttonStyle, className: buttonClass } = useMemo(
    () =>
      raleway(
        350,
        false,
        undefined,
        styles.button,
        section === 'blog'
          ? styles.purpleBackgroundOnHover
          : styles.slateBackgroundOnHover,
      ),
    [section],
  )

  const { style: photoButtonStyle, className: photoButtonClass } = useMemo(
    () => raleway(350, false, undefined, styles.photoButton),
    [],
  )

  const itemDescContainerStyle = useMemo(
    () => ({
      top: `calc(${navHeight + titleHeight + 2 * sidePaddingFactor * atomicPadding}px)`,
      bottom: `${footerHeight + 2 * sidePaddingFactor * atomicPadding}px`,
      left: `calc(100% - 61.8%)`,
      right: `0`,
    }),
    [atomicPadding, footerHeight, navHeight, sidePaddingFactor, titleHeight],
  )

  const separatorClass = useMemo(
    () =>
      `${styles.separator} ${{ photography: styles.charcoalBackground, blog: styles.purpleBackground }[section] || styles.slateBackground}`,
    [section],
  )

  const bgStyles = useMemo(
    () => ({
      opacity: ready ? 0 : 1,
    }),
    [ready],
  )

  return (
    <div className={styles.main}>
      <div className={styles.bg} style={bgStyles} />
      <h1
        style={style}
        className={className}
        id={title}
        onClick={section === 'preScroll' ? undefined : scrollHome}
      >
        Izzy&nbsp;Erlich
      </h1>
      <br />
      <div
        className={subContainerClass}
        style={subContainerStyle}
        id={subtitle}
      >
        <h2 className={styles.subtitle}>software and stuff</h2>
        <p id={descriptionId} className={descClass} style={descStyle}>
          {sections[section] ? sections[section].description : ''}
          <span className={separatorClass} />
        </p>
      </div>
      <div
        className={`${styles.itemDescriptionContainer}`}
        style={itemDescContainerStyle}
        id={itemDescription}
      >
        <div className={`${styles.itemDescription}`}>
          <h1 className='changa-one-regular'></h1>
          <h3 className='raleway'></h3>
          <div className='raleway'>
            <p></p>
            <div
              className={`${styles.accent} ${section === 'blog' ? styles.purpleBackground : styles.slateBackground}`}
            />
          </div>

          <button className={buttonClass} style={buttonStyle}>
            read more
          </button>
        </div>
        <div className={styles.itemDescriptionBackground} />
      </div>
      <button
        className={photoButtonClass}
        style={photoButtonStyle}
        id={photographyButton}
        onClick={openLightbox}
      >
        view image
      </button>
    </div>
  )
}
