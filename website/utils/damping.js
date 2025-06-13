import { damp3, dampE, dampLookAt } from 'maath/easing'
import { MathUtils, Vector3 } from 'three'

export class ScrollDamper {
  constructor() {}
  #initialScale = new Vector3()
  #targetScale = new Vector3()
  #initialPosition = new Vector3()
  #intermediatePosition = new Vector3()
  #focusPosition = new Vector3()
  #items
  #offsetThresholds
  #targets
  #type
  #rotate

  #fromTo(fromVector, toVector, factor) {
    const from = fromVector.clone()
    const difference = toVector.clone().sub(from)
    const scaleDifference = difference.multiplyScalar(factor)
    const to = from.add(scaleDifference)
    return to
  }

  #updateFrameConstants(
    itemArray,
    {
      initialScale,
      targetScale,
      initialPosition,
      intermediatePosition,
      focusPosition,
      targetPositions,
    },
    {
      focusFactor = 0.46,
      type,
      rotate = true,
      eps = 0.00001 /* @drei/ScrollControls default */,
    } = {},
  ) {
    this.#type = type
    this.#rotate = rotate
    if (Array.isArray(initialScale)) {
      this.#initialScale = [...initialScale]
    } else {
      this.#initialScale.copy(initialScale)
    }
    this.#targetScale.copy(targetScale)
    if (Array.isArray(initialPosition)) {
      this.#initialPosition = [...initialPosition]
    } else {
      this.#initialPosition.copy(initialPosition)
    }
    if (Array.isArray(intermediatePosition)) {
      this.#intermediatePosition = [...intermediatePosition]
    } else {
      this.#intermediatePosition.copy(intermediatePosition)
    }
    if (Array.isArray(focusPosition)) {
      this.#focusPosition = [...focusPosition]
    } else {
      this.#focusPosition.copy(focusPosition)
    }
    this.#items = itemArray.map(({ index: itemIndex, ...item }) => ({
      ...item,
      targetPosition: targetPositions[itemIndex].clone(),
    }))
    this.#offsetThresholds = [
      0,
      (1 - focusFactor) / 4,
      (1 - focusFactor) / 2,
      (1 - focusFactor) / 2 + focusFactor,
      1 + eps,
    ]
    this.#targets = [
      {
        position: { from: initialPosition, to: intermediatePosition },
        scale: { to: initialScale },
      },
      {
        position: { from: intermediatePosition, to: focusPosition },
        scale: { to: initialScale },
      },
      { position: { to: focusPosition }, scale: { to: initialScale } },
      {
        position: { from: focusPosition, to: undefined },
        scale: { from: initialScale, to: targetScale },
      },
    ]
  }

  setData(...args) {
    this.#updateFrameConstants(...args)

    return this
  }

  #presetFrame(delta, scrollData, callback) {
    this.#items.forEach((item, index) => {
      const { ref, range, targetPosition } = item
      const rangeOffset = scrollData.range(...range)
      const targetIndex = this.#offsetThresholds.findIndex(
        (threshold) => rangeOffset < threshold,
      )
      const {
        position: {
          from: fromPositionArray,
          to: toPositionArray = targetPosition.clone(),
        },
        scale: { from: fromScaleArray, to: toScaleArray },
      } = this.#targets[targetIndex - 1]
      const fromPosition = Array.isArray(fromPositionArray)
        ? fromPositionArray[index]
        : fromPositionArray
      const toPosition = Array.isArray(toPositionArray)
        ? toPositionArray[index]
        : toPositionArray
      const fromScale = Array.isArray(fromScaleArray)
        ? fromScaleArray[index]
        : fromScaleArray
      const toScale = Array.isArray(toScaleArray)
        ? toScaleArray[index]
        : toScaleArray
      const thresholdOffset = MathUtils.inverseLerp(
        this.#offsetThresholds[targetIndex - 1],
        this.#offsetThresholds[targetIndex],
        rangeOffset,
      )
      const position = fromPosition
        ? this.#fromTo(fromPosition, toPosition, thresholdOffset)
        : toPosition
      const scale = fromScale
        ? this.#fromTo(fromScale, toScale, thresholdOffset)
        : toScale

      damp3(ref.position, position, 0.0, delta)
      damp3(ref.scale, scale, 0.0, delta)
      if (this.#rotate) {
        if (targetIndex === 1) {
          dampE(
            ref.rotation,
            [0, 0, Math.PI + thresholdOffset * Math.PI],
            0.05,
            delta,
          )
        } else if (targetIndex === 3) {
          dampLookAt(ref, [0, 0, 1], 0.15, delta)
        } else if (targetIndex === 4) {
          dampE(
            ref.rotation,
            [thresholdOffset * Math.PI * 2, 0, 0],
            0.05,
            delta,
          )
        } else {
          dampE(ref.rotation, [0, 0, 0], 0.15, delta)
        }
      }

      const isActive = scrollData.visible(...range)
      if (isActive && callback) {
        callback({ targetIndex, thresholdOffset, item, index, rangeOffset })
      }
    })
  }

  frame(delta, scrollData, callback) {
    if (this.#type !== 'custom') {
      this.#presetFrame(delta, scrollData, callback)
    }
    return this
  }
}
