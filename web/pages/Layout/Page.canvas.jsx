import { useCallback, useEffect, useRef, useState, useTransition } from 'react'
import { usePage } from 'web/hooks/usePage'
import { LinkedIn } from 'web/components/Socials/LinkedIn.canvas'
import { Github } from 'web/components/Socials/Github.canvas'
import { Instagram } from 'web/components/Socials/Instagram.canvas'
import { Icon } from 'web/components/Socials/Icon.canvas'
import { Gear } from 'web/components/Gear.canvas'
import { use2DBounds } from 'src/hooks'
import { UNITS } from 'src/constants'
import { Menu } from 'web/components/Menu.canvas'
import { setScaleXYZOfX } from 'web/helpers/use2DBoundsScaleUtils'
import { PerformanceMonitor } from '@react-three/drei'
import { PlayPause } from 'web/components/PlayPause.canvas'
import { Next } from 'web/components/Next.canvas'
import { useProgress } from 'src/hooks'
import { Effects } from 'web/components/Effects.canvas.jsx'
import { Home } from 'web/pages/Home/Home.canvas'

const HomeMarkup = () => (
  <>
    <h1>Creative, technically.</h1>
    <h2>limitless possibilities.</h2>
    <p>
      Background: real-time fluid simulation running fully in the browser using
      WebGL2 with custom GPU shader passes; used as a material alpha-map
      texture.
    </p>
    <p>
      Foreground: Playable 3D Rubik&#39;s cube implementation using a Three.js
      InstancedMesh and custom shaders to override material parameters.
    </p>
  </>
)

const GalleryMarkup = () => (
  <>
    <h1>Sense and sensibility</h1>
    <h2>combining technical knowledge and visual nuance.</h2>
    <p>
      Background: 3D Cloud simulation powered by the creative OSS powerhouse
      pmndrs and its contributors.
    </p>
    <p>Foreground: Select photography with added post-processing effects.</p>
  </>
)

const description = [<HomeMarkup key='home' />, <GalleryMarkup key='gallery' />]

export const Page = function Page({ count = 5, time = 20, setDescription }) {
  // three refs
  const s1 = useRef()
  const s2 = useRef()
  const s3 = useRef()
  const se1 = useRef()
  const se2 = useRef()
  const se3 = useRef()
  const se4 = useRef()
  const menuRef = useRef()
  const home = useRef()

  const {
    theme: colorTheme,
    refs: {
      markup: {
        socials1,
        socials2,
        socials3,
        settings1,
        settings2,
        settings3,
        settings4,
        menu1,
        menu2,
        menu3,
        menu: menuHTML,
      },
    },
    state: { pause, menu, current },
    setState: { pause: setPause, current: setCurrent },
  } = usePage()

  use2DBounds(s1, {
    trackingElement: true,
    trackingElementRef: socials1,
    scaleToFitWidth: false,
    computeScale: setScaleXYZOfX,

    damping: { smoothTime: 0.0 },
  })
  use2DBounds(s2, {
    trackingElement: true,
    trackingElementRef: socials2,
    scaleToFitWidth: false,
    computeScale: setScaleXYZOfX,

    damping: { smoothTime: 0.0 },
  })
  use2DBounds(s3, {
    trackingElement: true,
    trackingElementRef: socials3,
    scaleToFitWidth: false,
    computeScale: setScaleXYZOfX,
    damping: { smoothTime: 0.0 },
  })

  use2DBounds(se1, {
    scaleToFitWidth: false,
    trackingElement: true,
    trackingElementRef: settings1,
    computeScale: setScaleXYZOfX,
    damping: { smoothTime: 0.0 },
  })

  use2DBounds(se2, {
    scaleToFitWidth: false,
    trackingElement: true,
    trackingElementRef: settings2,
    computeScale: setScaleXYZOfX,
    damping: { smoothTime: 0.0 },
  })

  use2DBounds(se3, {
    scaleToFitWidth: false,
    trackingElement: true,
    trackingElementRef: settings3,
    computeScale: setScaleXYZOfX,
    damping: { smoothTime: 0.0 },
  })

  use2DBounds(se4, {
    scaleToFitWidth: false,
    trackingElement: true,
    trackingElementRef: settings4,
    computeScale: setScaleXYZOfX,
    damping: { smoothTime: 0.0 },
  })

  use2DBounds(menuRef, {
    marginUnits: UNITS.PX,
    scaleToFitWidth: true,
    trackingElement: true,
    trackingElementRef: menuHTML,
    damping: { smoothTime: 0.0 },
  })

  // state
  const [progressColor, setProgressColor] = useState(colorTheme.slate)
  const [isPending, startTransition] = useTransition()
  const [sun, setSun] = useState()

  const { progressRef, setElapsed } = useProgress(
    count,
    time,
    pause,
    (progress, curr) => {
      const newColor = [colorTheme.slate, colorTheme.black][curr - 1]
      setCurrent(curr)
      startTransition(() => {
        setSun(home.current[curr - 1].current)
        setProgressColor(newColor)
      })
      document.documentElement.style.setProperty('--progress', newColor)
    },
  )

  const prev = useCallback(() => {
    setPause(false)
    const factor = current === 1 ? count - 1 : current - 2
    setElapsed(factor * time * 0.95)
  }, [count, current, setElapsed, setPause, time])

  const next = useCallback(() => {
    setPause(false)
    const factor = current === count ? 0 : current
    setElapsed(factor * time * 0.95)
  }, [count, current, setElapsed, setPause, time])

  useEffect(() => {
    setDescription(description[current - 1])
  }, [current, setDescription])

  return (
    <>
      <Effects current={current} sun={sun} />
      <PerformanceMonitor /* onChange={({ fps }) => console.log(fps)} */ />
      <Menu
        ref={menuRef}
        position-z={-10}
        visible={true}
        colorTheme={colorTheme}
        menu={menu}
        sub1={menu1}
        sub2={menu2}
        sub3={menu3}
      />

      <Icon ref={s1} colorTheme={progressColor}>
        <LinkedIn colorTheme={colorTheme} />
      </Icon>
      <Icon ref={s2} colorTheme={progressColor}>
        <Github colorTheme={colorTheme} />
      </Icon>
      <Icon ref={s3} colorTheme={progressColor}>
        <Instagram colorTheme={colorTheme} />
      </Icon>
      <Next colorTheme={colorTheme} ref={se1} prev onPointerDown={prev} />
      <PlayPause colorTheme={colorTheme} pause={pause} ref={se2} />
      <Next ref={se3} colorTheme={colorTheme} onPointerDown={next} />
      <Gear ref={se4} colorTheme={colorTheme} menu={menu} />
      <Home
        ref={home}
        time={time}
        progressRef={progressRef}
        current={current}
        isPending={isPending}
      />
    </>
  )
}
