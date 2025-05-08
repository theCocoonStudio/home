import { Path, Vector2 } from 'three'
import { clamp, lerp } from 'three/src/math/MathUtils.js'
import { sine, expo } from 'maath/easing'

const getClampedClipSpacePoint = (uvClamp) => {
  return -1.0 + 2.0 * clamp(Math.random(), uvClamp / 2, 1.0 - uvClamp / 2)
}

export const getBoundLine = (uvSpaceClamps, maxLength = 1.0) => {
  const start = new Vector2(
    getClampedClipSpacePoint(uvSpaceClamps.x),
    getClampedClipSpacePoint(uvSpaceClamps.y),
  )
  const end = new Vector2(
    getClampedClipSpacePoint(uvSpaceClamps.x),
    getClampedClipSpacePoint(uvSpaceClamps.y),
  )
  const distance = start.distanceTo(end)
  if (distance <= maxLength) {
    return { start, end }
  } else {
    return getBoundLine(uvSpaceClamps, maxLength)
  }
}

export class BoundPathGenerator {
  #padding = new Vector2()
  #radii
  #paths
  #currentPath
  #easing
  #mappedInterpolation
  constructor(padding) {
    if (padding) {
      this.#padding.copy(padding)
    }
    this.#generateRadii()
    this.#generatePaths()
    this.#generateCurrentPath()
  }
  updatePadding(padding) {
    if (padding) {
      this.#padding.copy(padding)
    }
    this.#generateRadii()
    this.#generatePaths()
    this.#generateCurrentPath()
  }

  #generateRadii() {
    const radii = new Vector2(
      1.0 - this.#padding.x / 2.0,
      1.0 - this.#padding.y / 2.0,
    )

    this.#radii = [
      radii,
      radii.clone().multiplyScalar(0.66),
      radii.clone().multiplyScalar(0.33),
    ]
  }

  #generatePaths() {
    this.#paths = this.#radii.map(({ x: radiusX, y: radiusY }) =>
      new Path().absellipse(0.0, 0.0, radiusX, radiusY, 0.0, Math.PI * 2.0),
    )
  }

  #getNewEasing() {
    const index = Math.floor(Math.random() * 6)
    const easing = [
      sine.in,
      sine.out,
      sine.inOut,
      expo.in,
      expo.out,
      expo.inOut,
    ][index]
    this.#easing = (factor) => easing(factor)
  }

  #getNewMappedInterpolation() {
    const start = Math.random()
    let end = clamp(Math.random(), start - 0.5, start + 0.5)
    end = clamp(end, 0.0, 1.0)
    this.#mappedInterpolation =
      Math.random() < 0.5
        ? (offset) =>
            this.#currentPath.getPoint(lerp(start, end, this.#easing(offset)))
        : (offset) =>
            this.#currentPath.getPoint(lerp(end, start, this.#easing(offset)))
  }
  #generateCurrentPath() {
    const index = Math.floor(Math.random() * 3)
    this.#currentPath = this.#paths[index]
    this.#getNewEasing()
    this.#getNewMappedInterpolation()
  }

  newPath() {
    this.#generateCurrentPath()
    return this
  }

  getPoint(offset) {
    return this.#mappedInterpolation(offset)
  }
}
