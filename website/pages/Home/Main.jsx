import { useMemo } from 'react'
import styles from './Home.styles.module.css'
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined'
import { useNavigation } from 'website/hooks/useNavigation'

export const Main = function Main({
  ready,
  config: {
    data: {
      content: { items },
      markupIds: { itemDescription },
    },
  },
}) {
  const navigate = useNavigation()
  const itemDescriptions = useMemo(
    () =>
      items.map(({ title, description, date, route }, index) => {
        return (
          <div
            key={`itemDescription-${index}`}
            className={`${styles.titleContainerInner}`}
            id={`${itemDescription}-${index}`}
          >
            <div className={`${styles.itemDescription}`}>
              <h1 className={`${styles.title} changa-one-regular-italic`}>
                {title}
              </h1>
              <h3 className={`${styles.date} raleway`}>{date}</h3>
              <p className={`${styles.description} raleway`}>
                <span>{description + ' '}</span>
                <LaunchOutlinedIcon
                  fontSize='inherit'
                  onClick={() => {
                    navigate(route)
                  }}
                />
              </p>
            </div>
          </div>
        )
      }),
    [itemDescription, items, navigate],
  )

  return (
    <div className={styles.main} style={{ opacity: ready ? 1 : 0 }}>
      <div className={styles.inner}>
        <div className={`${styles.titleContainer}`}>{itemDescriptions}</div>
      </div>
    </div>
  )
}
