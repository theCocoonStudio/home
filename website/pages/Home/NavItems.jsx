import About from '@tabler/icons-react/dist/esm/icons/IconUser'
import Contact from '@tabler/icons-react/dist/esm/icons/IconAt'
import Services from '@tabler/icons-react/dist/esm/icons/IconHeartHandshake'
import Attribution from '@tabler/icons-react/dist/esm/icons/IconHandLoveYou'
import { useTheme } from '../../hooks/useTheme'
import styles from './Home.styles.module.css'
import { useScrollEvent } from './useScrollEvent'

export const NavItems = () => {
  const {
    colors: { black },
  } = useTheme()

  const currentRangeKey = useScrollEvent()
  return (
    <>
      <div>
        <About size={45} color={black} stroke={2} />
        {currentRangeKey === 'about' && <div className={styles.active} />}
      </div>
      <div>
        <Contact size={45} color={black} stroke={2} />
        {currentRangeKey === 'contact' && <div className={styles.active} />}
      </div>
      <div>
        <Services size={45} color={black} stroke={2} />
        {currentRangeKey === 'services' && <div className={styles.active} />}
      </div>
      <div>
        <Attribution size={45} color={black} stroke={2} />
        {currentRangeKey === 'attribution' && <div className={styles.active} />}
      </div>
    </>
  )
}
