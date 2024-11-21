import { useCallback, useRef, useState, useTransition } from 'react'
import { usePage } from 'web/hooks/usePage'

import { Hud } from '@react-three/drei'
import { Performance } from 'web/components/Performance.canvas'
import { useProgress } from 'src/hooks'
import { Effects } from 'web/components/Effects.canvas.jsx'
import { Showcase } from 'web/pages/Showcase/Showcase.canvas'
import { FooterHUD } from './Footer.canvas'

const renderOrder = Object.freeze({
  footerHud: 2,
  showcase: 1,
  global: 1,
})

export const Page = function Page({ count = 5, time = 10, bufferTime = 0.2 }) {
  // three refs

  const home = useRef()

  const {
    theme: colorTheme,

    state: { pause, current },
    setState: { current: setCurrent },
  } = usePage()

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
    renderOrder.global,
  )

  return (
    <>
      {/* footer */}
      <Hud renderPriority={renderOrder.footerHud}>
        <FooterHUD
          renderPriority={renderOrder.footerHud}
          progressColor={progressColor}
          count={count}
          time={time}
          bufferTime={bufferTime}
          setElapsed={setElapsed}
        />
      </Hud>
      {/* r3f globals (will be Showcase globals) */}
      <Effects
        current={current}
        sun={sun}
        renderPriority={renderOrder.global}
      />
      <Performance colorTheme={colorTheme} />

      {/* Showcase slides */}
      <Showcase
        renderPriority={renderOrder.showcase}
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
