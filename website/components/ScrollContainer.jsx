import { useMemo } from 'react'
import styles from 'website/styles/ScrollContainer.module.css'

export const ScrollContainer = ({
  config: {
    data: {
      markupIds: { scrollContainerId },
      content: { items },
    },
  },
  /* scrollContainer,
  ready,
  openContact, */
}) => {
  const scrollItems = useMemo(() => {
    return items.map((item, index) => {
      console.log('hi')
      return (
        <div
          id={`${scrollContainerId}-${index}`}
          key={`scrollItem-${index}`}
          className={styles.item}
        />
      )
    })
  }, [items, scrollContainerId])
  console.log(scrollItems)
  return (
    <div id={scrollContainerId} className={`${styles.container}`}>
      {scrollItems}
    </div>
  )
}
