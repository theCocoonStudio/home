import { Vector2, Vector3 } from 'three'

const CONSTANTS = Object.freeze({
  layerDepth: 0.175,
  layerDepthFactor: 1,
})

export const getTargetPropsXY = ({
  min,
  max,
  margin = [0, 0, 0, 0] /* left, top , right, bottom */,
  labelHeight = 0,
  boundsPadding: padding = [0, 0, 0, 0] /* left, top , right, bottom */,
}) => {
  const scale = new Vector2(
    max.x - margin[2] - (min.x + margin[0]),
    max.y - (margin[1] + labelHeight) - (min.y + margin[3]),
  )
  const position = new Vector2(
    min.x + margin[0] + scale.x / 2,
    min.y + margin[3] + scale.y / 2,
  )

  const bounds = getBoundsXY({ scale, position, padding })
  return { position, scale, bounds }
}

export const setTargetPropsXY = ({
  target,
  min,
  max,
  margin = [0, 0, 0, 0] /* left, top , right, bottom */,
  labelHeight = 0,
  boundsPadding = [0, 0, 0, 0] /* left, top , right, bottom */,
}) => {
  const { position, scale, bounds } = getTargetPropsXY({
    min,
    max,
    margin,
    labelHeight,
    boundsPadding,
  })
  target.position.setX(position.x)
  target.position.setY(position.y)
  target.scale.setX(scale.x)
  target.scale.setY(scale.y)
  return { position, scale, bounds }
}

export const setTargetProps = ({
  target,
  min,
  max,
  margin = [0, 0, 0, 0] /* left, top , right, bottom */,
  labelHeight = 0,
  layerDepth = CONSTANTS.layerDepth,
  layerDepthFactor = CONSTANTS.layerDepthFactor,
  boundsPadding = [0, 0, 0, 0] /* left, top , right, bottom */,
}) => {
  target.scale.setZ(layerDepth * layerDepthFactor)
  setTargetPropsXY({
    target,
    min,
    max,
    margin,
    labelHeight,
    boundsPadding,
  })
  const scale = target.scale.clone()
  const position = target.position.clone()
  const bounds = getBounds({
    scale,
    position,
    padding: boundsPadding,
    layerDepthFactor,
  })
  return { scale, position, bounds }
}

export const getLabelPropsXY = ({
  min,
  max,
  labelHeight = 0,
  boundsPadding: padding = [0, 0, 0, 0] /* left, top , right, bottom */,
}) => {
  const scale = new Vector2(max.x - min.x, labelHeight)
  const position = new Vector2(
    min.x + (max.x - min.x) / 2,
    max.y - labelHeight / 2,
  )
  const bounds = getBoundsXY({ scale, position, padding })
  return { position, scale, bounds }
}

export const setLabelPropsXY = ({
  target,
  min,
  max,
  labelHeight = 0,
  boundsPadding = [0, 0, 0, 0] /* left, top , right, bottom */,
}) => {
  const { position, scale, bounds } = getLabelPropsXY({
    min,
    max,
    labelHeight,
    boundsPadding,
  })
  target.position.setX(position.x)
  target.position.setY(position.y)
  target.scale.setX(scale.x)
  target.scale.setY(scale.y)
  return { position, scale, bounds }
}

export const setLabelProps = ({
  target,
  min,
  max,
  labelHeight = 0,
  layerDepth = CONSTANTS.layerDepth,
  layerDepthFactor = CONSTANTS.layerDepthFactor,
  boundsPadding: padding = [0, 0, 0, 0] /* left, top , right, bottom */,
}) => {
  target.scale.setZ(layerDepth * layerDepthFactor)
  setLabelPropsXY({ target, min, max, labelHeight })
  const scale = target.scale.clone()
  const position = target.position.clone()
  const bounds = getBounds({
    scale,
    position,
    padding,
  })
  return { scale, position, bounds }
}

export const getBoundsXY = ({
  scale,
  position,
  padding = [0, 0, 0, 0] /* left, top , right, bottom */,
}) => {
  const min = new Vector2(
    position.x - scale.x / 2 + padding[0],
    position.y - scale.y / 2 + padding[3],
  )
  const max = new Vector2(
    position.x + scale.x / 2 - padding[2],
    position.y + scale.y / 2 - padding[1],
  )
  return {
    min,
    max,
    length: new Vector2(max.x - min.x, max.y - min.y),
  }
}

export const getBounds = ({
  scale,
  position,
  padding = [0, 0, 0, 0] /* left, top , right, bottom */,
  layerDepthFactor = CONSTANTS.layerDepthFactor,
}) => {
  const { min, max } = getBoundsXY({ scale, position, padding })
  return {
    min: new Vector3(
      min.x,
      min.y,
      position.z - (layerDepthFactor * scale.z) / 2,
    ),
    max: new Vector3(
      max.x,
      max.y,
      position.z + (layerDepthFactor * scale.z) / 2,
    ),
    length: new Vector3(
      max.x - min.x,
      max.y - min.y,
      layerDepthFactor * scale.z,
    ),
  }
}
