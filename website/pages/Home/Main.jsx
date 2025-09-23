import styles from './Home.styles.module.css'

export const Main = function Main({ scrollContainer, ready, config }) {
  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <div className={`${styles.itemContainer}`}></div>
        <div className={`${styles.titleContainer}`}>
          <div className={`${styles.titleContainerInner}`}>
            <h1 className={`${styles.title} changa-one-regular`}>
              This is my title and it is the best. Made longer for testing.
            </h1>
            <h3 className={`${styles.date} raleway`}>September 1, 2025</h3>
            <p className={`${styles.description} raleway`}>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
