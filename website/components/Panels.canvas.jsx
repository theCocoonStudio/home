import { useMarkupBounds } from 'src/hooks'
import { useCallback, useMemo, useRef, useState } from 'react'
import {
  CatmullRomCurve3,
  CurvePath,
  LineCurve3,
  Vector2,
  Vector3,
} from 'three'
import { useScroll } from '@react-three/drei'
import Article from 'assets/Article.svg'
import { ScrollPanel } from './ScrollPanel'

const items = [0, 0, 0, 0, 0, 0]
export const Panels = function Panels({
  panelDepth = 0.03,
  titleDepth = 0.007,
  titleFontSize = 24,
  padding = 0.1,
  innerPadding = 0.03,
  ...props
}) {
  const ref = useRef()
  const [scale, setScale] = useState(null)
  const [fontSize, setFontSize] = useState(null)

  const callback = useCallback(
    ({ target, element, contentRect, min, max, ppwu, camera }) => {
      const width = /* 600 / ppwu.x */ (max.x - min.x) / 2
      setScale(new Vector2(width, (width * 9) / 16))
      setFontSize(titleFontSize / ppwu.x)
    },
    [titleFontSize],
  )

  useMarkupBounds(
    {
      target: ref,
      callback,
    },
    [],
  )

  const curve = useMemo(() => {
    if (scale?.y) {
      const lineHeight = (scale.y + padding) * (items.length - 1)
      const line = new LineCurve3(
        new Vector3(0, -lineHeight, 0),
        new Vector3(0, 0, 0),
      )
      const catmullRom = new CatmullRomCurve3(
        [
          new Vector3(0, 0, 0),
          new Vector3(0, 0.3, 0),
          new Vector3(0, 0.3, -5),
          new Vector3(0, -lineHeight, -5),
        ],
        false,
      )
      const path = new CurvePath()
      path.add(line)
      path.add(catmullRom)
      return path
    }
  }, [padding, scale])

  const scrollData = useScroll()
  const panelsArray = useMemo(() => {
    if (scale && fontSize) {
      return items.map((item, index) => (
        <ScrollPanel
          key={index}
          panelDepth={panelDepth}
          width={scale.x}
          height={scale.y}
          fontSize={fontSize}
          titleDepth={titleDepth}
          innerPadding={innerPadding}
          index={index}
          typeSvgIcon={Article}
          padding={padding}
          scrollData={scrollData}
          curvePath={curve}
        />
      ))
    }
  }, [
    curve,
    fontSize,
    innerPadding,
    padding,
    panelDepth,
    scale,
    scrollData,
    titleDepth,
  ])

  return (
    <group
      ref={ref}
      {...props}
      onPointerDown={() => {
        console.log('clicked panels')
      }}
    >
      {scale && fontSize && panelsArray}
    </group>
  )
}
