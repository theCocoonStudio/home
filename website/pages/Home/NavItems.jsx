import About from '@tabler/icons-react/dist/esm/icons/IconUser'
import Contact from '@tabler/icons-react/dist/esm/icons/IconAt'
import Services from '@tabler/icons-react/dist/esm/icons/IconHeartHandshake'
import Attribution from '@tabler/icons-react/dist/esm/icons/IconHandLoveYou'
import { useTheme } from '../../hooks/useTheme'
import { useCallback, useRef, useState, useTransition } from 'react'
import { useScroll, View } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import styles from './Home.styles.module.css'

export const NavItems = ({
  config: {
    nav: { sectionRanges, viewRenderPriority },
  },
}) => {
  const {
    colors: { black },
  } = useTheme()

  const [isPending, startTransition] = useTransition()
  const [sectionIndex, setSectionIndex] = useState()

  const setCurrentSection = useCallback((i) => {
    startTransition(() => {
      setSectionIndex(i)
    })
  }, [])
  return (
    <>
      <div>
        <About size={45} color={black} stroke={2} />
        {sectionIndex === 0 && <div className={styles.active} />}
      </div>
      <div>
        <Contact size={45} color={black} stroke={2} />
        {sectionIndex === 1 && <div className={styles.active} />}
      </div>
      <div>
        <Services size={45} color={black} stroke={2} />
        {sectionIndex === 2 && <div className={styles.active} />}
      </div>
      <div>
        <Attribution size={45} color={black} stroke={2} />
        {sectionIndex === 3 && <div className={styles.active} />}
      </div>
      <View
        frames={1}
        visible={false}
        index={viewRenderPriority}
        style={{ display: 'none' }}
      >
        <CanvasHook sections={sectionRanges} setSection={setCurrentSection} />
      </View>
    </>
  )
}

const CanvasHook = ({ setSection, sections }) => {
  const scroll = useScroll()
  const cache = useRef()
  useFrame(() => {
    if (scroll.visible(...sections[0])) {
      if (cache.current !== 0) {
        cache.current = 0
        setSection(0)
      }
    } else if (scroll.visible(...sections[1])) {
      if (cache.current !== 1) {
        cache.current = 1
        setSection(1)
      }
    } else if (scroll.visible(...sections[2])) {
      if (cache.current !== 2) {
        cache.current = 2
        setSection(2)
      }
    } else if (scroll.visible(...sections[3])) {
      if (cache.current !== 3) {
        cache.current = 3
        setSection(3)
      }
    } else {
      if (cache.current !== -1) {
        cache.current = -1
        setSection(undefined)
      }
    }
  })
  return <group />
}
