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
      eps = 0.00001 /* @drei/ScrollControls default */,
    } = {},
  ) {
    this.#initialScale.copy(initialScale)
    this.#targetScale.copy(targetScale)
    this.#initialPosition.copy(initialPosition)
    this.#intermediatePosition.copy(intermediatePosition)
    this.#focusPosition.copy(focusPosition)
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

  frame(delta, scrollData, callback) {
    this.#items.forEach((item) => {
      const { ref, range, targetPosition } = item
      const rangeOffset = scrollData.range(...range)
      const targetIndex = this.#offsetThresholds.findIndex(
        (threshold) => rangeOffset < threshold,
      )
      const {
        position: {
          from: fromPosition,
          to: toPosition = targetPosition.clone(),
        },
        scale: { from: fromScale, to: toScale },
      } = this.#targets[targetIndex - 1]

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
        dampE(ref.rotation, [thresholdOffset * Math.PI * 2, 0, 0], 0.05, delta)
      } else {
        dampE(ref.rotation, [0, 0, 0], 0.15, delta)
      }

      const isActive = scrollData.visible(...range)
      if (isActive && callback) {
        callback({ targetIndex, thresholdOffset, item })
      }
    })
    return this
  }
}
