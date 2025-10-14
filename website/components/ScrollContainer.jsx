import { useMemo } from 'react'
import styles from 'website/styles/ScrollContainer.module.css'
import { useScroll } from 'src/hooks'

export const ScrollContainer = ({
  config: {
    data: {
      markupIds: { scrollContainerId },
      content: { items },
    },
  },
  atStartOrFinish,
  scrollContainer,
  /* ready */
}) => {
  const { scrollTo } = useScroll(scrollContainer)

  const scrollItems = useMemo(() => {
    return items.map((item, index) => {
      return (
        <div
          onClick={() => scrollTo((1 / items.length) * (index + 0.5))}
          id={`${scrollContainerId}-${index}`}
          key={`scrollItem-${index}`}
          className={styles.item}
        />
      )
    })
  }, [items, scrollContainerId, scrollTo])

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
