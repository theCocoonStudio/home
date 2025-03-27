import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { Panel } from './Panel.canvas'
import { SVG3D } from 'website/components/SVG3D.canvas'
import { PanelTitle } from './PanelTitle.canvas'
import Article from 'assets/Article.svg'

export const ScrollPanel = ({
  panelDepth,
  width,
  height,
  fontSize,
  titleDepth,
  innerPadding,
  index,
  typeSvgIcon = Article,
  padding,
  scrollData,
  curvePath,
  ...props
}) => {
  const panel = useRef()
  const { xPos, yPos, zPos } = useMemo(
    () => ({
      xPos: 0.0 - width / 2 + innerPadding,
      yPos: height / 2 - innerPadding,
      zPos: panelDepth / 2 + titleDepth / 2,
    }),
    [height, innerPadding, panelDepth, titleDepth, width],
  )

  const initialOffset = useMemo(() => {
    const length = curvePath.getLength()
    return ((height + padding) * index) / length
  }, [curvePath, height, index, padding])

  useFrame(() => {
    if (panel.current) {
      const offset = Math.min(scrollData.offset + initialOffset, 1.0)
      panel.current.position.setY(curvePath.getPointAt(offset).y)
      panel.current.position.setX(curvePath.getPointAt(offset).x)
      panel.current.position.setZ(curvePath.getPointAt(offset).z)
      panel.current.rotation.x =
        (Math.PI / 2) * (-1 + curvePath?.getTangentAt(offset).y)
    }
  })
  return (
    <Panel
      ref={panel}
      depth={panelDepth}
      width={width}
      height={height}
      {...props}
    >
      <PanelTitle
        text={`This is my title: measuring\nthings on the web.`}
        descriptionText={`In this article, we will go over\nsome examples. In the\nfirst example, some really\ncool shit happens.`}
        dateText='03/15/2025'
        fontSize={fontSize}
        descriptionFontSize={(fontSize * 2) / 3}
        dateFontSize={(fontSize * 5) / 9}
        depth={titleDepth}
        xPos={xPos}
        yPos={yPos}
        zPos={zPos}
      />
      <SVG3D
        src={typeSvgIcon}
        zPos={zPos}
        xPos={xPos}
        yPos={-yPos}
        depth={titleDepth}
        scaleY={height / 10}
      >
        <meshStandardMaterial />
      </SVG3D>
    </Panel>
  )
}
