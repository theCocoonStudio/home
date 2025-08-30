import {
  damp,
  damp2,
  damp3,
  damp4,
  dampAngle,
  dampE,
  dampLookAt,
  dampM,
  dampQ,
  dampS,
} from 'maath/easing'
import {
  Euler,
  MathUtils,
  Matrix4,
  Quaternion,
  Spherical,
  Vector2,
  Vector3,
  Vector4,
} from 'three'
import { clamp, inverseLerp } from 'three/src/math/MathUtils.js'

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

  #overrideTargets({
    initialScale = this.#initialScale,
    initialPosition = this.#initialPosition,
    intermediatePosition = this.#intermediatePosition,
    focusPosition = this.#focusPosition,
    targetScale = this.#targetScale,
  }) {
    return [
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

  #presetFrame(delta, scrollData, callback, targets) {
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
      } = targets[targetIndex - 1]
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

  frame(delta, scrollData, callback, overrideTargets) {
    if (this.#type !== 'custom') {
      this.#presetFrame(
        delta,
        scrollData,
        callback,
        overrideTargets
          ? this.#overrideTargets(overrideTargets)
          : this.#targets,
      )
    }
    return this
  }
}

export class Scrub {
  #eps = 0.00001
  #model
  #thresholds
  #targets
  #targetFunctions

  static #DAMPING_FUNCTIONS = {
    number: {
      value: damp,
      test: (val) => typeof val === 'number',
      interpolate: (from, to, offset) => {
        return from + offset * (to - from)
      },
    },
    vector2: {
      value: damp2,
      test: (val) =>
        val instanceof Vector2 ||
        (Array.isArray(val) && val.length === 2) ||
        val === 'vector2',
      interpolate: (from, to, offset) => {
        const fromVector = Array.isArray(from)
          ? new Vector2().fromArray(from)
          : from
        const toVector = Array.isArray(to) ? new Vector2().fromArray(to) : to
        return fromVector.add(toVector.sub(fromVector).multiplyScalar(offset))
      },
    },
    vector3: {
      value: damp3,
      test: (val) =>
        val instanceof Vector3 ||
        (Array.isArray(val) && val.length === 3) ||
        val === 'vector3',
      interpolate: (from, to, offset) => {
        const fromVector = Array.isArray(from)
          ? new Vector3().fromArray(from)
          : from
        const toVector = Array.isArray(to) ? new Vector3().fromArray(to) : to
        return fromVector.add(toVector.sub(fromVector).multiplyScalar(offset))
      },
    },
    vector4: {
      value: damp4,
      test: (val) =>
        val instanceof Vector4 ||
        (Array.isArray(val) && val.length === 4) ||
        val === 'vector4',
      interpolate: (from, to, offset) => {
        const fromVector = Array.isArray(from)
          ? new Vector4().fromArray(from)
          : from
        const toVector = Array.isArray(to) ? new Vector4().fromArray(to) : to
        return fromVector.add(toVector.sub(fromVector).multiplyScalar(offset))
      },
    },
    euler: {
      value: dampE,
      test: (val) =>
        val instanceof Euler ||
        (Array.isArray(val) && val.length === 3) ||
        val === 'euler',
      interpolate: (from, to, offset) => {
        const fromVector = Array.isArray(from)
          ? new Vector3(from[0], from[1], from[2])
          : new Vector3(from.x, from.y, from.z)
        const toVector = Array.isArray(to)
          ? new Vector3(to[0], to[1], to[2])
          : new Vector3(to.x, to.y, to.z)
        const result = fromVector.add(
          toVector.sub(fromVector).multiplyScalar(offset),
        )
        return new Euler().setFromVector3(result)
      },
    },
    matrix4: {
      value: dampM,
      test: (val) => val instanceof Matrix4 || val === 'matrix4',
      interpolate: (from, to, offset) => {
        const fromPosition = new Vector3()
        const fromQuaternion = new Quaternion()
        const fromScale = new Vector3()
        const toPosition = new Vector3()
        const toQuaternion = new Quaternion()
        const toScale = new Vector3()

        from.decompose(fromPosition, fromQuaternion, fromScale)
        to.decompose(toPosition, toQuaternion, toScale)

        const fromQuaternionVector = new Vector4(
          fromQuaternion.x,
          fromQuaternion.y,
          fromQuaternion.z,
          fromQuaternion.w,
        )
        const toQuaternionVector = new Vector4(
          toQuaternion.x,
          toQuaternion.y,
          toQuaternion.z,
          toQuaternion.w,
        )

        fromPosition.add(toPosition.sub(fromPosition).multiplyScalar(offset))
        fromQuaternionVector.add(
          toQuaternionVector.sub(fromQuaternionVector).multiplyScalar(offset),
        )
        fromScale.add(toScale.sub(fromScale).multiplyScalar(offset))

        return new Matrix4().compose(
          fromPosition,
          new Quaternion(
            fromQuaternionVector.x,
            fromQuaternionVector.y,
            fromQuaternionVector.z,
            fromQuaternionVector.w,
          ),
          fromScale,
        )
      },
    },
    quaternion: {
      value: dampQ,
      test: (val) =>
        val instanceof Quaternion ||
        (Array.isArray(val) && val.length === 4) ||
        val === 'quaternion',
      interpolate: (from, to, offset) => {
        const fromVector = Array.isArray(from)
          ? new Vector4().fromArray(from)
          : new Vector4(from.x, from.y, from.z, from.w)
        const toVector = Array.isArray(to)
          ? new Vector4().fromArray(to)
          : new Vector4(to.x, to.y, to.z, to.z)
        const result = fromVector.add(
          toVector.sub(fromVector).multiplyScalar(offset),
        )
        return new Quaternion(result.x, result.y, result.z, result.w)
      },
    },
    spherical: {
      value: dampS,
      test: (val) => val instanceof Spherical || val === 'spherical',
      interpolate: (from, to, offset) => {
        const fromVector = Array.isArray(from)
          ? new Vector3(from[0], from[1], from[2])
          : new Vector3(from.radius, from.phi, from.theta)
        const toVector = Array.isArray(to)
          ? new Vector3(to[0], to[1], to[2])
          : new Vector3(to.radius, to.phi, to.theta)
        const result = fromVector.add(
          toVector.sub(fromVector).multiplyScalar(offset),
        )
        return new Spherical(result.x, result.y, result.z)
      },
    },
    angle: {
      value: dampAngle,
      test: (val) => typeof val === 'number' || val === 'angle',
      interpolate: (from, to, offset) => {
        return from + offset * (to - from)
      },
    },
    lookAt: {
      value: dampLookAt,
      test: (val) =>
        val instanceof Vector3 ||
        (Array.isArray(val) && val.length === 3) ||
        val === 'lookAt',
      interpolate: (from, to, offset) => {
        const fromVector = Array.isArray(from)
          ? new Vector3().fromArray(from)
          : from
        const toVector = Array.isArray(to) ? new Vector3().fromArray(to) : to
        return fromVector.add(toVector.sub(fromVector).multiplyScalar(offset))
      },
    },
  }
  constructor({ eps, model, targets, thresholds = [0.0, 1.0] }) {
    this.#set({ eps, model, thresholds, targets })
  }

  #set({ eps, model, thresholds, targets }) {
    if (typeof eps === 'number') {
      this.eps = eps
    }
    if (typeof targets === 'object') {
      this.#model = model
    }
    if (Array.isArray(thresholds)) {
      this.#thresholds = thresholds
    }
    if (Array.isArray(targets)) {
      this.#targets = targets
    }
    const targetFunctions = {}
    Object.keys(targets[0]).forEach((key) => {
      const { type, value } = targets[0][key]
      const dampingFunction = this.getDampingFunction(type || value)
      const interpolateKey = Object.keys(Scrub.#DAMPING_FUNCTIONS).find(
        (key) => Scrub.#DAMPING_FUNCTIONS[key].value === dampingFunction,
      )
      targetFunctions[key] = {
        interpolate: Scrub.#DAMPING_FUNCTIONS[interpolateKey].interpolate,
        dampingFunction,
      }
      this.#targetFunctions = targetFunctions
    })
  }

  static #getFrameValues({ thresholds, offset, eps, targets }) {
    const start = thresholds.findIndex((threshold) => offset + eps > threshold)
    const end = Math.min(start + 1, thresholds.length - 1)
    const startThreshold = thresholds[start]
    const endThreshold = thresholds[end]
    const fromTargets = targets[start]
    const toTargets = targets[end]

    const activeOffset =
      start !== end &&
      inverseLerp(
        startThreshold,
        endThreshold,
        clamp(offset, startThreshold, endThreshold),
      )
    return {
      start,
      end,
      startThreshold,
      endThreshold,
      fromTargets,
      toTargets,
      activeOffset,
    }
  }

  static get DAMPING_FUNCTIONS() {
    return Object.freeze({ ...this.#DAMPING_FUNCTIONS })
  }
  static getDampingFunction(target) {
    const key = Object.keys(this.#DAMPING_FUNCTIONS).find(
      (key) => key === target || this.#DAMPING_FUNCTIONS[key].test(target),
    )
    return key && this.#DAMPING_FUNCTIONS[key].value
  }
  static interpolate(from, to, offset, type) {
    const dampingFunction = this.getDampingFunction(
      typeof type === 'string' ? type : from,
    )
    if (dampingFunction === damp) {
      return {
        target: this.#DAMPING_FUNCTIONS.number.interpolate(from, to, offset),
        dampingFunction,
      }
    }
    if (dampingFunction === damp2) {
      return {
        target: this.#DAMPING_FUNCTIONS.vector2.interpolate(from, to, offset),
        dampingFunction,
      }
    }
    if (dampingFunction === damp3) {
      return {
        target: this.#DAMPING_FUNCTIONS.vector3.interpolate(from, to, offset),
        dampingFunction,
      }
    }
    if (dampingFunction === damp4) {
      return {
        target: this.#DAMPING_FUNCTIONS.vector4.interpolate(from, to, offset),
        dampingFunction,
      }
    }
    if (dampingFunction === dampE) {
      return {
        target: this.#DAMPING_FUNCTIONS.euler.interpolate(from, to, offset),
        dampingFunction,
      }
    }
    if (dampingFunction === dampM) {
      return {
        target: this.#DAMPING_FUNCTIONS.matrix4.interpolate(from, to, offset),
        dampingFunction,
      }
    }
    if (dampingFunction === dampQ) {
      return {
        target: this.#DAMPING_FUNCTIONS.matrix4.interpolate(from, to, offset),
        dampingFunction,
      }
    }
    if (dampingFunction === dampS) {
      return {
        target: this.#DAMPING_FUNCTIONS.spherical.interpolate(from, to, offset),
        dampingFunction,
      }
    }
    if (dampingFunction === dampAngle) {
      return {
        target: this.#DAMPING_FUNCTIONS.angle.interpolate(from, to, offset),
        dampingFunction,
      }
    }
    if (dampingFunction === dampLookAt) {
      return {
        target: this.#DAMPING_FUNCTIONS.lookAt.interpolate(from, to, offset),
        dampingFunction,
      }
    }
  }

  static scrub({
    model,
    thresholds = [0.0, 1.0],
    targets,
    offset,
    eps = 0.00001,
    delta,
  }) {
    const { fromTargets, toTargets, activeOffset } = this.#getFrameValues({
      thresholds,
      offset,
      eps,
      targets,
    })
    Object.keys(fromTargets).forEach((key) => {
      const from = fromTargets[key].value
      const type = fromTargets[key]?.type || toTargets[key]?.type
      const to = toTargets[key].value
      let target, dampingFunction
      if (!activeOffset) {
        dampingFunction = this.getDampingFunction(type || from)
        target = from
      } else {
        const { target: resultTarget, dampingFunction: resultDampingFunction } =
          this.interpolate(from, to, activeOffset, type)
        target = resultTarget
        dampingFunction = resultDampingFunction
      }
      if (dampingFunction === damp) {
        dampingFunction(model, key, target, 0.0, delta)
      } else if (dampingFunction === dampLookAt) {
        dampingFunction(model, target, 0.0, delta)
      } else {
        dampingFunction(model[key], target, 0.0, delta)
      }
    })
  }

  scrub(offset, delta) {
    const { fromTargets, toTargets, activeOffset } = Scrub.#getFrameValues({
      thresholds: this.#thresholds,
      targets: this.#targets,
      eps: this.#eps,
      offset,
    })
    Object.keys(this.#targetFunctions).forEach((key) => {
      const from = fromTargets[key].value
      const to = toTargets[key].value
      const { interpolate, dampingFunction } = this.#targetFunctions[key]
      const target = activeOffset ? interpolate(from, to, activeOffset) : from

      if (dampingFunction === damp) {
        dampingFunction(this.#model, key, target, 0.0, delta)
      } else if (dampingFunction === dampLookAt) {
        dampingFunction(this.#model, target, 0.0, delta)
      } else {
        dampingFunction(this.#model[key], target, 0.0, delta)
      }
    })
  }
}

/* 
[0 eps 1-eps 1]

offset     start    end      activeOffset   value
0          0        eps      0              val(0)
eps/2      eps      1-eps    0              val(eps) 
eps        eps      1-eps    0              val(eps)
1-2*eps    eps      1-eps    ilerp(offset)  < val(1-eps)
1-1.5*eps  1-eps    1        0              val(1-eps)
1-eps      1-eps    1        0              val(1-eps)
1-.5*eps   1        1        0              val(1)

 */
