import { useCallback, useEffect, useMemo } from 'react'
import styles from './Home.styles.module.css'
import { raleway } from '../../utils/styles'
import { useScrollEvent } from './useScrollEvent'
import { useTheme } from '../../hooks/useTheme'
import { useTargetItems } from './useTargetItems'
import { useLightbox } from '../../hooks/useLightbox'
import { ItemDescription } from './ItemDescription'
import { Titles } from './Titles'

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
        animationTargetInitial,
        animationTargetIntermediate,
        animationTargetFocus,
        dummySubtitle,
        dummyDescription,
      },
    },
  },
}) {
  const {
    colors: { black, white },
  } = useTheme()
  const section = useScrollEvent()

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

  const { style: photoButtonStyle, className: photoButtonClass } = useMemo(
    () => raleway(350, false, undefined, styles.photoButton),
    [],
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
      <Titles
        titleId={title}
        subtitleId={subtitle}
        descriptionId={descriptionId}
        section={section}
        sections={sections}
        scrollContainer={scrollContainer}
        showLightbox={showLightbox}
        dummySubtitleId={dummySubtitle}
        dummyDescriptionId={dummyDescription}
      />
      <ItemDescription
        id={itemDescription}
        section={section}
        animationTargetInitialId={animationTargetInitial}
        animationTargetIntermediateId={animationTargetIntermediate}
        animationTargetFocusId={animationTargetFocus}
      />
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
