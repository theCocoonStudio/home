import { Panel } from './Panel.canvas'
import { useTheme } from 'website/hooks/useTheme'
import { useMarkupBounds } from 'src/hooks'
import { useCallback, useMemo, useRef, useState } from 'react'
import { Vector2 } from 'three'

export const Panels = ({ padding = 0.01 }) => {
  /* const { colors } = useTheme() */
  const panels = useRef()

  const [scale, setScale] = useState(null)

  const callback = useCallback(
    ({ target, element, contentRect, min, max, ppwu, camera }) => {
      console.log('in callback')
      const width = (max.x - min.x) / 2
      setScale(new Vector2(width, (width * 9) / 16))
    },
    [],
  )

  useMarkupBounds(
    {
      target: panels,
      callback,
    },
    [],
  )

  const column = useMemo(() => {
    if (scale) {
      const arr = []
      for (let i = -3; i < 4; i++) {
        arr[i + 3] = (
          <Panel
            key={`panel-0-${i}`}
            width={scale.x}
            height={scale.y}
            position-y={i * (scale.y + padding)}
          />
        )
      }
      return arr
    }
  }, [padding, scale])
  return <group ref={panels}>{scale && column}</group>
}
