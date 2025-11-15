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
  dampC,
} from 'maath/easing'
import {
  Color,
  Euler,
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
      const thresholdOffset = inverseLerp(
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
  #thresholdRanges
  #interpolateKeys
  #constantKeys
  #targets
  #targetFunctions
  #cache = {
    offset: 0.0,
    frameTargets: {},
    rangeIndex: undefined,
    initialized: false,
  }

  get model() {
    return this.#model
  }
  get eps() {
    return this.#eps
  }
  get targets() {
    return this.#targets
  }
  get thresholds() {
    return this.#thresholds
  }
  static #DAMPING_FUNCTIONS = {
    number: {
      value: damp,
      equals: (fromValue, toValue, eps) => {
        return Math.abs(fromValue - toValue) < eps
      },
      test: (val) => typeof val === 'number' || val === 'number',
      interpolate: (from, to, offset) => {
        return from + offset * (to - from)
      },
    },
    vector2: {
      value: damp2,
      equals: (fromValue, toValue, eps) => {
        const fromArray =
          fromValue instanceof Vector2 ? fromValue.toArray() : fromValue
        const toArray = toValue instanceof Vector2 ? toValue.toArray() : toValue

        for (let i = 0; i < fromArray.length; i++) {
          if (typeof fromArray[i] !== typeof toArray[i]) {
            return false
          }
          if (
            typeof fromArray[i] === 'number' &&
            !(Math.abs(fromArray[i] - toArray[i]) < eps)
          ) {
            return false
          } else if (fromArray[i] !== toArray[i]) {
            return false
          }
        }
        return true
      },
      test: (val) =>
        val instanceof Vector2 ||
        (Array.isArray(val) && val.length === 2) ||
        val === 'vector2',
      interpolate: (from, to, offset) => {
        const fromVector = Array.isArray(from)
          ? new Vector2().fromArray(from)
          : from.clone()
        const toVector = Array.isArray(to)
          ? new Vector2().fromArray(to)
          : to.clone()
        return fromVector.add(toVector.sub(fromVector).multiplyScalar(offset))
      },
    },
    vector3: {
      value: damp3,
      equals: (fromValue, toValue, eps) => {
        const fromArray =
          fromValue instanceof Vector3 ? fromValue.toArray() : fromValue
        const toArray = toValue instanceof Vector3 ? toValue.toArray() : toValue
        for (let i = 0; i < fromArray.length; i++) {
          if (typeof fromArray[i] !== typeof toArray[i]) {
            return false
          }
          if (
            typeof fromArray[i] === 'number' &&
            !(Math.abs(fromArray[i] - toArray[i]) < eps)
          ) {
            return false
          } else if (fromArray[i] !== toArray[i]) {
            return false
          }
        }
        return true
      },
      test: (val) =>
        val instanceof Vector3 ||
        (Array.isArray(val) && val.length === 3) ||
        val === 'vector3',
      interpolate: (from, to, offset) => {
        const fromVector = Array.isArray(from)
          ? new Vector3().fromArray(from)
          : from.clone()
        const toVector = Array.isArray(to)
          ? new Vector3().fromArray(to)
          : to.clone()
        return fromVector.add(toVector.sub(fromVector).multiplyScalar(offset))
      },
    },
    vector4: {
      value: damp4,
      equals: (fromValue, toValue, eps) => {
        const fromArray =
          fromValue instanceof Vector4 ? fromValue.toArray() : fromValue
        const toArray = toValue instanceof Vector4 ? toValue.toArray() : toValue
        for (let i = 0; i < fromArray.length; i++) {
          if (typeof fromArray[i] !== typeof toArray[i]) {
            return false
          }
          if (
            typeof fromArray[i] === 'number' &&
            !(Math.abs(fromArray[i] - toArray[i]) < eps)
          ) {
            return false
          } else if (fromArray[i] !== toArray[i]) {
            return false
          }
        }
        return true
      },
      test: (val) =>
        val instanceof Vector4 ||
        (Array.isArray(val) && val.length === 4) ||
        val === 'vector4',
      interpolate: (from, to, offset) => {
        const fromVector = Array.isArray(from)
          ? new Vector4().fromArray(from)
          : from.clone()
        const toVector = Array.isArray(to)
          ? new Vector4().fromArray(to)
          : to.clone()
        return fromVector.add(toVector.sub(fromVector).multiplyScalar(offset))
      },
    },
    euler: {
      value: dampE,
      equals: (fromValue, toValue, eps) => {
        const fromArray =
          fromValue instanceof Euler ? fromValue.toArray() : fromValue
        const toArray = toValue instanceof Euler ? toValue.toArray() : toValue
        for (let i = 0; i < fromArray.length; i++) {
          if (typeof fromArray[i] !== typeof toArray[i]) {
            return false
          }
          if (
            typeof fromArray[i] === 'number' &&
            !(Math.abs(fromArray[i] - toArray[i]) < eps)
          ) {
            return false
          } else if (fromArray[i] !== toArray[i]) {
            return false
          }
        }
        return true
      },
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
      equals: (fromValue, toValue, eps) => {
        const fromArray =
          fromValue instanceof Matrix4 ? fromValue.toArray() : fromValue
        const toArray = toValue instanceof Matrix4 ? toValue.toArray() : toValue
        for (let i = 0; i < fromArray.length; i++) {
          if (typeof fromArray[i] !== typeof toArray[i]) {
            return false
          }
          if (
            typeof fromArray[i] === 'number' &&
            !(Math.abs(fromArray[i] - toArray[i]) < eps)
          ) {
            return false
          } else if (fromArray[i] !== toArray[i]) {
            return false
          }
        }
        return true
      },
      test: (val) =>
        val instanceof Matrix4 ||
        (Array.isArray(val) && val.length === 16) ||
        val === 'matrix4',
      interpolate: (from, to, offset) => {
        const fromPosition = new Vector3()
        const fromQuaternion = new Quaternion()
        const fromScale = new Vector3()
        const toPosition = new Vector3()
        const toQuaternion = new Quaternion()
        const toScale = new Vector3()
        const fromMatrix = Array.isArray(from)
          ? new Matrix4().fromArray(from)
          : from
        const toMatrix = Array.isArray(to) ? new Matrix4().fromArray(to) : to
        fromMatrix.decompose(fromPosition, fromQuaternion, fromScale)
        toMatrix.decompose(toPosition, toQuaternion, toScale)

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
      equals: (fromValue, toValue, eps) => {
        const fromArray =
          fromValue instanceof Quaternion ? fromValue.toArray() : fromValue
        const toArray =
          toValue instanceof Quaternion ? toValue.toArray() : toValue
        for (let i = 0; i < fromArray.length; i++) {
          if (typeof fromArray[i] !== typeof toArray[i]) {
            return false
          }
          if (
            typeof fromArray[i] === 'number' &&
            !(Math.abs(fromArray[i] - toArray[i]) < eps)
          ) {
            return false
          } else if (fromArray[i] !== toArray[i]) {
            return false
          }
        }
        return true
      },
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
      equals: (fromValue, toValue, eps) => {
        const fromArray = Array.isArray(fromValue)
          ? fromValue
          : [fromValue.radius, fromValue.phi, fromValue.theta]
        const toArray = Array.isArray(toValue)
          ? toValue
          : [toValue.radius, toValue.phi, toValue.theta]

        for (let i = 0; i < fromArray.length; i++) {
          if (typeof fromArray[i] !== typeof toArray[i]) {
            return false
          }
          if (
            typeof fromArray[i] === 'number' &&
            !(Math.abs(fromArray[i] - toArray[i]) < eps)
          ) {
            return false
          } else if (fromArray[i] !== toArray[i]) {
            return false
          }
        }
        return true
      },
      test: (val) =>
        val instanceof Spherical ||
        (Array.isArray(val) && val.length === 3) ||
        val === 'spherical',
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
      equals: (fromValue, toValue, eps) => {
        return Math.abs(fromValue - toValue) < eps
      },
      test: (val) => typeof val === 'number' || val === 'angle',
      interpolate: (from, to, offset) => {
        return from + offset * (to - from)
      },
    },
    lookAt: {
      value: dampLookAt,
      equals: (fromValue, toValue, eps) => {
        const fromArray =
          fromValue instanceof Vector3 ? fromValue.toArray() : fromValue
        const toArray = toValue instanceof Vector3 ? toValue.toArray() : toValue
        for (let i = 0; i < fromArray.length; i++) {
          if (typeof fromArray[i] !== typeof toArray[i]) {
            return false
          }
          if (
            typeof fromArray[i] === 'number' &&
            !(Math.abs(fromArray[i] - toArray[i]) < eps)
          ) {
            return false
          } else if (fromArray[i] !== toArray[i]) {
            return false
          }
        }
        return true
      },
      test: (val) =>
        val instanceof Vector3 ||
        (Array.isArray(val) && val.length === 3) ||
        val === 'lookAt',
      interpolate: (from, to, offset) => {
        const fromVector = Array.isArray(from)
          ? new Vector3().fromArray(from)
          : from.clone()
        const toVector = Array.isArray(to)
          ? new Vector3().fromArray(to)
          : to.clone()
        return fromVector.add(toVector.sub(fromVector).multiplyScalar(offset))
      },
    },
    // must be last due to string test option
    color: {
      value: dampC,
      equals: (fromValue, toValue) => {
        const fromColor =
          fromValue instanceof Color
            ? fromValue.clone()
            : Array.isArray(fromValue)
              ? new Color(...fromValue)
              : new Color(fromValue)
        const toColor =
          toValue instanceof Color
            ? toValue.clone()
            : Array.isArray(toValue)
              ? new Color(...toValue)
              : new Color(toValue)
        return fromColor.equals(toColor)
      },
      test: (val) =>
        val instanceof Color ||
        (Array.isArray(val) && val.length === 3) ||
        typeof val === 'string' ||
        typeof val === 'number' ||
        val === 'color',
      interpolate: (from, to, offset) => {
        const fromColor =
          from instanceof Color
            ? from.clone()
            : Array.isArray(from)
              ? new Color(...from)
              : new Color(from)
        const toColor =
          to instanceof Color
            ? to.clone()
            : Array.isArray(to)
              ? new Color(...to)
              : new Color(to)
        return new Color().lerpColors(fromColor, toColor, offset)
      },
    },
  }
  constructor({ eps, model, targets, thresholds = [0.0, 1.0] }) {
    this.set({ eps, model, thresholds, targets })
  }

  set({ eps, model, thresholds, targets }) {
    if (typeof eps === 'number') {
      this.#eps = eps
    }
    if (typeof model === 'object') {
      this.#model = model
    }
    if (Array.isArray(thresholds)) {
      this.#thresholds = thresholds

      if (this.#thresholds[0] > 0.0) {
        this.#thresholds.unshift(0.0)
      }
      if (this.#thresholds[this.#thresholds.length - 1] < 1.0) {
        this.#thresholds.push(1.0)
      }
      this.#thresholdRanges = []
      for (let i = 0; i < this.#thresholds.length - 1; i++) {
        this.#thresholdRanges[i] = [
          this.#thresholds[i],
          this.#thresholds[i + 1],
        ]
      }
    }
    if (Array.isArray(targets)) {
      this.#targets = targets
      const targetFunctions = {}
      Object.keys(targets[0]).forEach((key) => {
        const { type, value } = targets[0][key]
        const dampingFunction = Scrub.getDampingFunction(type || value)
        const interpolateKey = Object.keys(Scrub.#DAMPING_FUNCTIONS).find(
          (key) => Scrub.#DAMPING_FUNCTIONS[key].value === dampingFunction,
        )
        const { interpolate, equals } = Scrub.#DAMPING_FUNCTIONS[interpolateKey]
        targetFunctions[key] = {
          interpolate,
          equals,
          dampingFunction,
        }
        this.#targetFunctions = targetFunctions
      })
    }
    if (this.#targets && this.#thresholdRanges) {
      this.#interpolateKeys = []
      this.#constantKeys = []
      this.#thresholdRanges.forEach((range, rangeIndex) => {
        const interpolateKeys = []
        const constantKeys = []
        Object.keys(this.#targets[0]).forEach((key) => {
          const fromValue = this.#targets[rangeIndex][key].value
          const toValue = this.#targets[rangeIndex + 1][key].value
          const equals = this.#targetFunctions[key].equals(
            fromValue,
            toValue,
            this.#eps,
          )
          if (equals) {
            constantKeys.push(key)
          } else {
            interpolateKeys.push(key)
          }
        })
        this.#interpolateKeys.push(interpolateKeys)
        this.#constantKeys.push(constantKeys)
      })
    }
    this.#cache = {
      offset: 0.0,
      frameTargets: {},
      rangeIndex: undefined,
      initialized: false,
    }

    return this
  }

  #setRangeIndex() {
    this.#cache.rangeIndex = this.#thresholdRanges.findIndex(
      ([min, max]) => this.#cache.offset >= min && this.#cache.offset <= max,
    )
  }

  #setInterpolatedTargets() {
    const interpolateKeys = this.#interpolateKeys[this.#cache.rangeIndex]
    if (interpolateKeys.length > 0) {
      const activeOffset = inverseLerp(
        this.#thresholdRanges[this.#cache.rangeIndex][0],
        this.#thresholdRanges[this.#cache.rangeIndex][1],
        clamp(
          this.#cache.offset,
          this.#thresholdRanges[this.#cache.rangeIndex][0],
          this.#thresholdRanges[this.#cache.rangeIndex][1],
        ),
      )
      const fromTargets = this.#targets[this.#cache.rangeIndex]
      const toTargets = this.#targets[this.#cache.rangeIndex + 1]
      interpolateKeys.forEach((key) => {
        const { interpolate } = this.#targetFunctions[key]
        const from = fromTargets[key].value
        const to = toTargets[key].value
        this.#cache.frameTargets[key] = interpolate(from, to, activeOffset)
      })
    }
  }
  #setConstantTargets() {
    const keys = this.#constantKeys[this.#cache.rangeIndex]
    if (keys.length > 0) {
      const targets = this.#targets[this.#cache.rangeIndex]
      keys.forEach((key) => {
        this.#cache.frameTargets[key] = targets[key].value
      })
    }
  }
  #damp({ smoothTime, delta, maxSpeed, easing, dampEPS }) {
    Object.keys(this.#cache.frameTargets).forEach((key) => {
      const { dampingFunction } = this.#targetFunctions[key]
      const target = this.#cache.frameTargets[key]
      if (dampingFunction === damp) {
        dampingFunction(
          this.#model,
          key,
          target,
          smoothTime,
          delta,
          maxSpeed,
          easing,
          dampEPS,
        )
      } else if (dampingFunction === dampLookAt) {
        dampingFunction(
          this.#model,
          target,
          smoothTime,
          delta,
          maxSpeed,
          easing,
          dampEPS,
        )
      } else {
        dampingFunction(
          this.#model[key],
          target,
          smoothTime,
          delta,
          maxSpeed,
          easing,
          dampEPS,
        )
      }
    })
  }

  static get DAMPING_FUNCTIONS() {
    return Object.freeze({ ...Scrub.#DAMPING_FUNCTIONS })
  }
  static getDampingFunction(target) {
    const key = Object.keys(Scrub.#DAMPING_FUNCTIONS).find(
      (key) => key === target || Scrub.#DAMPING_FUNCTIONS[key].test(target),
    )
    return key && Scrub.#DAMPING_FUNCTIONS[key].value
  }

  scrub(offset, delta, { smoothTime = 0.0, maxSpeed, easing, dampEPS } = {}) {
    if (this.#cache.initialized) {
      const scrollChanged = !(Math.abs(this.#cache.offset - offset) < this.#eps)

      if (scrollChanged) {
        this.#cache.offset = offset
        const rangeChanged =
          offset > this.#thresholdRanges[this.#cache.rangeIndex][1] ||
          offset < this.#thresholdRanges[this.#cache.rangeIndex][0]

        if (rangeChanged) {
          this.#setRangeIndex()
          this.#setConstantTargets()
        }
        this.#setInterpolatedTargets()
      }
    } else {
      this.#cache.initialized = true
      this.#cache.offset = offset
      this.#setRangeIndex()
      this.#setConstantTargets()
      this.#setInterpolatedTargets()
    }
    this.#damp({ smoothTime, maxSpeed, easing, dampEPS, delta })

    // return instance
    return this
  }
}

export class OffsetStagger {
  #count
  #startArray
  #endArray

  #setParams = ({ count, start, end }) => {
    if (typeof count !== 'undefined') {
      this.#count = count
    }
    const getStart = start || this.#defaultStart
    const getEnd = end || this.#defaultEnd

    const startArray = []
    const endArray = []
    for (let i = 0; i < this.#count; i++) {
      startArray.push(getStart(i))
      endArray.push(getEnd(i))
    }
    this.#startArray = startArray
    this.#endArray = endArray
  }

  #defaultStart = (index) => {
    return (1 / this.#count) * index
  }
  #defaultEnd = (index) => {
    return (1 / this.#count) * (index + 1)
  }

  updateParams(...args) {
    this.#setParams(...args)
  }

  get count() {
    return this.#count
  }

  get startArray() {
    return [...this.#startArray]
  }

  get endArray() {
    return [...this.#endArray]
  }

  offset(index, baseOffset) {
    return inverseLerp(
      this.#startArray[index],
      this.#endArray[index],
      clamp(baseOffset, this.#startArray[index], this.#endArray[index]),
    )
  }
  constructor(...args) {
    this.#setParams(...args)
  }
}
