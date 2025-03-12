import { useFont } from '@react-three/drei'
import Karla from 'assets/Karla_ExtraBold.json'
import Karla_light from 'assets/Karla_Light.json'
import Karla_Regular from 'assets/Karla_Regular.json'
import { useEffect, useMemo } from 'react'
import { ExtrudeGeometry } from 'three'

export const PanelTitle = ({
  text,
  descriptionText,
  dateText,
  extrudeSettings,
  depth = 0.01,
  fontSize = 0.1,
  descriptionFontSize = 0.8,
  dateFontSize = 0.8,
  xPos = 0.0,
  yPos = 0.0,
  zPos = 0.0,
}) => {
  const font = useFont(Karla)
  const descriptionFont = useFont(Karla_Regular)
  const dateFont = useFont(Karla_light)

  const { shapes, descriptionShapes, dateShapes } = useMemo(
    () => ({
      shapes: font.generateShapes(text, 1.0),
      descriptionShapes: descriptionFont.generateShapes(descriptionText, 1.0),
      dateShapes: dateFont.generateShapes(dateText, 1.0),
    }),
    [dateFont, dateText, descriptionFont, descriptionText, font, text],
  )

  const settings = useMemo(
    () => ({
      steps: 2,
      depth: depth,
      bevelEnabled: false,
      bevelThickness: depth,
      bevelSize: depth,
      bevelOffset: 0,
      bevelSegments: 6,
      curveSegments: 12,
      ...extrudeSettings,
    }),
    [depth, extrudeSettings],
  )

  const {
    geometry,
    length,
    height,
    descriptionGeometry,
    descriptionLength,
    descriptionHeight,
    dateGeometry,
    dateLength,
    dateHeight,
  } = useMemo(() => {
    const geometry = new ExtrudeGeometry(shapes, settings)
    const descriptionGeometry = new ExtrudeGeometry(descriptionShapes, settings)
    const dateGeometry = new ExtrudeGeometry(dateShapes, settings)
    return {
      geometry: geometry.center(),
      length: geometry.boundingBox.max.x - geometry.boundingBox.min.x,
      height: geometry.boundingBox.max.y - geometry.boundingBox.min.y,
      descriptionGeometry: descriptionGeometry.center(),
      descriptionLength:
        descriptionGeometry.boundingBox.max.x -
        descriptionGeometry.boundingBox.min.x,
      descriptionHeight:
        descriptionGeometry.boundingBox.max.y -
        descriptionGeometry.boundingBox.min.y,
      dateGeometry: dateGeometry.center(),
      dateLength:
        dateGeometry.boundingBox.max.x - dateGeometry.boundingBox.min.x,
      dateHeight:
        dateGeometry.boundingBox.max.y - dateGeometry.boundingBox.min.y,
    }
  }, [dateShapes, descriptionShapes, settings, shapes])

  useEffect(
    () => () => {
      geometry.dispose()
      descriptionGeometry.dispose()
      dateGeometry.dispose()
    },
    [dateGeometry, descriptionGeometry, geometry],
  )

  return (
    <>
      <mesh
        scale-x={dateFontSize}
        scale-y={dateFontSize}
        position-x={xPos + (dateLength * dateFontSize) / 2}
        position-y={yPos - (dateHeight * dateFontSize) / 2}
        position-z={zPos}
        geometry={dateGeometry}
      >
        <meshStandardMaterial />
      </mesh>
      <mesh
        scale-x={fontSize}
        scale-y={fontSize}
        position-x={xPos + (length * fontSize) / 2}
        position-y={
          yPos -
          (height * fontSize) / 2 -
          dateHeight * dateFontSize -
          descriptionFontSize
        }
        position-z={zPos}
        geometry={geometry}
      >
        <meshStandardMaterial />
      </mesh>
      <mesh
        scale-x={descriptionFontSize}
        scale-y={descriptionFontSize}
        position-x={xPos + (descriptionLength * descriptionFontSize) / 2}
        position-y={
          yPos -
          (descriptionHeight * descriptionFontSize) / 2 -
          dateHeight * dateFontSize -
          descriptionFontSize -
          height * fontSize -
          descriptionFontSize * 1.5
        }
        position-z={zPos}
        geometry={descriptionGeometry}
      >
        <meshStandardMaterial />
      </mesh>
    </>
  )
}
