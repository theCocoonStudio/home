import { useCallback, useRef, useState, useTransition } from 'react'
import { usePage } from 'web/hooks/usePage'
import { use2DBounds } from 'src/hooks'
import { UNITS } from 'src/constants'
import { Menu } from 'web/components/Menu.canvas'
import { PerformanceMonitor } from '@react-three/drei'
import { useProgress } from 'src/hooks'
import { Effects } from 'web/components/Effects.canvas.jsx'
import { Showcase } from 'web/pages/Showcase/Showcase.canvas'
import { FooterHUD } from './Footer.canvas'

export const Page = function Page({
  count = 5,
  time = 10,
  bufferTime = 0.2,
  opts,
}) {
  // three refs
  const menuRef = useRef()
  const home = useRef()

  const {
    theme: colorTheme,
    refs: {
      markup: { menu1, menu2, menu3, menu: menuHTML },
    },
    state: { pause, menu, current },
    setState: { current: setCurrent },
  } = usePage()

  use2DBounds(menuRef, {
    marginUnits: UNITS.PX,
    scaleToFitWidth: true,
    trackingElement: true,
    trackingElementRef: menuHTML,
    damping: { smoothTime: 0.0 },
    renderPriority: -1,
  })

  // state
  const [progressColor, setProgressColor] = useState(colorTheme.slate)
  const [isPending, startTransition] = useTransition()
  const [sun, setSun] = useState()

  const progressCallback = useCallback(
    (progress, curr) => {
      const newColor = [colorTheme.slate, colorTheme.black][curr - 1]
      document.documentElement.style.setProperty('--progress', newColor)
      setCurrent(curr)
      startTransition(() => {
        setSun(home.current[curr - 1])
        setProgressColor(newColor)
      })
    },
    [colorTheme.black, colorTheme.slate, setCurrent],
  )
  const { progressRef, setElapsed } = useProgress(
    count,
    time,
    pause,
    progressCallback,
    undefined,
    undefined,
    -2,
  )

  return (
    <>
      {/* r3f globals (will be Showcase globals) */}
      <Effects current={current} sun={sun} />
      <PerformanceMonitor /* onChange={({ fps }) => console.log(fps)} */ />
      <Menu
        ref={menuRef}
        position-z={-1}
        visible={true}
        colorTheme={colorTheme}
        menu={menu}
        sub1={menu1}
        sub2={menu2}
        sub3={menu3}
        current={current}
      />
      {/* footer */}
      <FooterHUD
        renderPriority={-2}
        progressColor={progressColor}
        count={count}
        time={time}
        bufferTime={bufferTime}
        setElapsed={setElapsed}
      />
      {/* Showcase slides */}
      <Showcase
        renderPriority={-1}
        opts={opts}
        ref={home}
        time={time}
        bufferTime={bufferTime}
        progressRef={progressRef}
        current={current}
        isPending={isPending}
        setSun={setSun}
      />
    </>
  )
}
