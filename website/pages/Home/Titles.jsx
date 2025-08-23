import { useCallback, useMemo } from 'react'
import { changaOne, raleway } from '../../utils/styles'
import styles from './Titles.module.css'
import { useScroll } from 'src/hooks'

export const Titles = ({
  titleId,
  subtitleId,
  descriptionId,
  section,
  sections,
  scrollContainer,
  showLightbox,
  dummyDescriptionId,
  dummySubtitleId,
}) => {
  const scrollTo = useScroll(scrollContainer)

  const scrollHome = useCallback(() => {
    scrollTo(0.0)
  }, [scrollTo])

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

  const { style: dummySubtitleStyle, className: dummySubtitleClassname } =
    useMemo(() => changaOne(true, undefined, styles.dummySubtitle), [])

  const { style: descStyle, className: descClass } = useMemo(
    () => raleway(400, false, undefined, styles.description),
    [],
  )
  const { style: dummyDescStyle, className: dummyDescClass } = useMemo(
    () => raleway(400, false, undefined, styles.description),
    [],
  )
  const separatorClass = useMemo(
    () =>
      `${styles.separator} ${{ photography: styles.charcoalBackground, blog: styles.purpleBackground }[section] || styles.slateBackground}`,
    [section],
  )

  return (
    <>
      <h1
        style={style}
        className={className}
        id={titleId}
        onClick={section === 'preScroll' ? undefined : scrollHome}
      >
        Izzy&nbsp;Erlich
      </h1>
      <br />
      <div
        className={subContainerClass}
        style={subContainerStyle}
        id={subtitleId}
      >
        <h2 className={styles.subtitle}>software and stuff</h2>
        <p id={descriptionId} className={descClass} style={descStyle}>
          {sections[section] ? sections[section].description : ''}
          <span className={separatorClass} />
        </p>
      </div>
      <div
        id={dummySubtitleId}
        className={dummySubtitleClassname}
        style={dummySubtitleStyle}
      >
        <h2 className={styles.subtitle}>SOFTWARE</h2>
        <p
          id={dummyDescriptionId}
          className={dummyDescClass}
          style={dummyDescStyle}
        >
          {sections.software.description}
          <span className={separatorClass} />
        </p>
      </div>
    </>
  )
}
