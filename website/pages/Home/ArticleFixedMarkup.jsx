import styles from 'website/pages/Home/Article.styles.module.css'
import { useResizeEvent } from 'src/hooks/useResizeEvent'
import { useMemo } from 'react'

export const ArticleFixedMarkup = ({
  config: {
    title,
    description,
    date,
    url,
    data: {
      markupIds: { loaderProgress },
    },
  },
  atStartOrFinish,
}) => {
  const size = useResizeEvent()

  const titleContainerStyle = useMemo(() => {
    const progressEl = document.getElementById(loaderProgress)

    if (progressEl && size) {
      const top = progressEl.getBoundingClientRect().top
      return {
        bottom: `${size.height - top}px`,
      }
    }
  }, [loaderProgress, size]) // must keep size to update on resizes

  return (
    <div className={styles.fixedContainer}>
      {titleContainerStyle && (
        <div
          className={`${styles.titleContainer} changa-one-regular`}
          style={titleContainerStyle}
        >
          <div>
            <div
              className={styles.titleImage}
              style={{ backgroundImage: `url(${url})` }}
            />
            <h1 className={styles.titleText}>{title}</h1>
          </div>
        </div>
      )}
    </div>
  )
}
