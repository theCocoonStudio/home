import { useMemo } from 'react'
import styles from 'website/styles/ScrollContainer.module.css'

export const ScrollContainer = ({
  config: {
    data: {
      markupIds: { scrollContainerId },
      content: { items },
    },
  },
  atStartOrFinish,
  /* scrollContainer,
  ready,
  openContact, */
}) => {
  const scrollItems = useMemo(() => {
    return items.map((item, index) => {
      return (
        <div
          id={`${scrollContainerId}-${index}`}
          key={`scrollItem-${index}`}
          className={styles.item}
        />
      )
    })
  }, [items, scrollContainerId])

  return (
    <div
      id={scrollContainerId}
      className={`${styles.container}`}
      style={{ pointerEvents: atStartOrFinish.either ? 'none' : 'auto' }}
    >
      {scrollItems}
    </div>
  )
}
