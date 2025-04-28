import { useContext, useMemo } from 'react'
import { useTheme } from '../../hooks/useTheme'
import styles from './Home.styles.module.css'
import { View } from '@react-three/drei'
import { ScrollEventContext } from './ScrollEventContext'

export const Main = function Main({ config }) {
  const {
    main: { EventDispatcherComponent, eventDispatcherViewPrority },
  } = config
  const {
    lengths: { navHeight, footerHeight, atomicPadding },
  } = useTheme()

  const mainStyles = useMemo(
    () => ({
      top: `${navHeight}px`,
      right: `calc(8 * ${atomicPadding}px)`,
      left: `calc(8 * ${atomicPadding}px)`,
      bottom: `${footerHeight}px`,
    }),
    [atomicPadding, footerHeight, navHeight],
  )
  const { setRange } = useContext(ScrollEventContext)

  return (
    <>
      <div style={mainStyles} className={styles.main}></div>
      <View
        frames={1}
        visible={false}
        index={eventDispatcherViewPrority}
        style={{ display: 'none' }}
      >
        <EventDispatcherComponent config={config} setRange={setRange} />
      </View>
    </>
  )
}
