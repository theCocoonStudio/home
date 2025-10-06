import { useMemo } from 'react'
import styles from './Home.styles.module.css'

export const Main = function Main({
  /* scrollContainer,
  ready, */
  config: {
    data: {
      content: { items },
      markupIds: { itemDescription },
    },
  },
}) {
  const itemDescriptions = useMemo(
    () =>
      items.map(({ title, description, date }, index) => {
        return (
          <div
            key={`itemDescription-${index}`}
            className={`${styles.titleContainerInner}`}
            id={`${itemDescription}-${index}`}
          >
            <div className={`${styles.itemDescription}`}>
              <h1 className={`${styles.title} changa-one-regular`}>{title}</h1>
              <h3 className={`${styles.date} raleway`}>{date}</h3>
              <p className={`${styles.description} raleway`}>{description}</p>
            </div>
          </div>
        )
      }),
    [itemDescription, items],
  )

  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <div className={`${styles.titleContainer}`}>{itemDescriptions}</div>
      </div>
    </div>
  )
}
