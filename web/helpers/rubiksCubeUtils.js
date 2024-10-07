import {
  BufferAttribute,
  Color,
  InstancedBufferAttribute,
  Matrix4,
  Quaternion,
  Vector3,
} from 'three'
import { dampM, circ, linear, dampQ, damp3 } from 'maath/easing'

export class RubiksCube3 {
  #state = []
  #targets = []
  #attributes = {
    color: [],
    position: [],
    normal: [],
    uv: [],
    meshPosition: [],
  }

  #baseColors
  #scale = new Vector3(0.9, 0.9, 0.9)
  #size

  constructor(
    colors = [
      new Color('red'), // x = -1
      new Color('white'), // x = 1
      new Color('blue'), // y = -1
      new Color('yellow'), // y = 1
      new Color('green'), // z = -1
      new Color('orange'), // z = 1
    ],
  ) {
    this.#baseColors = colors
    this.#size = 3
    this.#initState()
    this.#initAttributes()
  }

  #initState() {
    let index = 0
    for (let z = -1; z < this.#size - 1; z++) {
      for (let y = -1; y < this.#size - 1; y++) {
        for (let x = -1; x < this.#size - 1; x++) {
          const position = new Vector3(x, y, z)
          const rotation = new Quaternion()
          const scale = this.#scale.clone()
          this.#state.push({
            key: `instance_${index}`,
            index,
            scale,
            rotation,
            position,
          })
          this.#targets.push({
            index: index++,
            matrix: new Matrix4().compose(position, rotation, scale),
          })
        }
      }
    }
  }

  #initAttributes() {
    for (const vertex of vertices) {
      // non-instanced attributes

      this.#attributes.position.push(...vertex.pos.map((v) => v / 2))
      this.#attributes.normal.push(...vertex.norm)
      this.#attributes.uv.push(...vertex.uv)

      let color = new Color(0, 0, 0)

      if (vertex.norm[0]) {
        color = this.#baseColors[vertex.norm[0] < 0 ? 0 : 1]
      } else if (vertex.norm[1]) {
        color = this.#baseColors[vertex.norm[1] < 0 ? 2 : 3]
      } else if (vertex.norm[2]) {
        color = this.#baseColors[vertex.norm[2] < 0 ? 4 : 5]
      }

      this.#attributes.color.push(color.r, color.g, color.b)
    }
    // instanced attributes

    this.#state.forEach(({ position: { x, y, z } }) =>
      this.#attributes.meshPosition.push(x, y, z),
    )
  }

  get colors() {
    return this.#baseColors.map((color) => color.clone())
  }
  get positions() {
    let ordered = []
    this.#state.forEach(({ index, position }) => {
      ordered[index] = position.clone()
    })
    return ordered
  }

  get rotations() {
    let ordered = []
    this.#state.forEach(({ index, rotation }) => {
      ordered[index] = rotation.clone()
    })
    return ordered
  }

  get scales() {
    let ordered = []
    this.#state.forEach(({ index, scale }) => {
      ordered[index] = scale.clone()
    })
    return ordered
  }

  get rigidBodiesProps() {
    let ordered = []
    this.#state.forEach(({ position, rotation, key, scale, index }) => {
      ordered[index] = {
        position: position.toArray(),
        rotation: rotation.toArray(),
        scale: scale.x,
        key,
      }
    })
    return ordered
  }

  get attributes() {
    return {
      position: new BufferAttribute(
        new Float32Array(this.#attributes.position),
        3,
      ),
      normal: new BufferAttribute(new Float32Array(this.#attributes.normal), 3),
      uv: new BufferAttribute(new Float32Array(this.#attributes.uv), 2),
      color: new BufferAttribute(new Float32Array(this.#attributes.color), 3),
      meshPosition: new InstancedBufferAttribute(
        new Float32Array(this.#attributes.meshPosition),
        3,
      ),
    }
  }

  positionFromIndex(i) {
    const { position } = this.#state.find(({ index }) => index == i)
    return position.clone()
  }

  rotationFromIndex(i) {
    const { rotation } = this.#state.find(({ index }) => index == i)
    return rotation.clone()
  }

  matrixFromIndex(i) {
    const { position, rotation, scale } = this.#state.find(
      ({ index }) => index == i,
    )
    return new Matrix4().compose(position, rotation, scale)
  }

  indexFromPosition(vector) {
    const { index } = this.#state.find(({ pos }) => vector.equals(pos))
    return index
  }

  rotatePlane(rotationAxis, angle = Math.PI / 2) {
    const plane = [] // [axis, val]
    const dofIndexes = [] // [dofAxis, dof2Axis]
    rotationAxis.toArray().forEach((val, index) => {
      if (val === 0) {
        dofIndexes.push(index)
      } else {
        plane.push(index, val)
      }
    })

    const transform = new Matrix4().makeRotationAxis(rotationAxis, angle)
    const old = new Matrix4()
    this.#state.forEach(({ position, rotation, scale }) => {
      if (Math.round(position.getComponent(plane[0])) === plane[1]) {
        old
          .compose(position, rotation, scale)
          .premultiply(transform)
          .decompose(position, rotation, scale)
      }
    })
  }

  render(instancedMesh, clockDelta) {
    if (instancedMesh) {
      this.#state.forEach(({ position, rotation, scale, index }) => {
        let matrix = new Matrix4().compose(position, rotation, scale)
        dampM(this.#targets[index].matrix, matrix, 0.15, clockDelta)
        instancedMesh.setMatrixAt(index, this.#targets[index].matrix)
      })
      instancedMesh.instanceMatrix.needsUpdate = true
    }
  }
}

const vertices = [
  // front
  { pos: [-1, -1, 1], norm: [0, 0, 1], uv: [0, 0] },
  { pos: [1, -1, 1], norm: [0, 0, 1], uv: [1, 0] },
  { pos: [-1, 1, 1], norm: [0, 0, 1], uv: [0, 1] },

  { pos: [-1, 1, 1], norm: [0, 0, 1], uv: [0, 1] },
  { pos: [1, -1, 1], norm: [0, 0, 1], uv: [1, 0] },
  { pos: [1, 1, 1], norm: [0, 0, 1], uv: [1, 1] },
  // right
  { pos: [1, -1, 1], norm: [1, 0, 0], uv: [0, 0] },
  { pos: [1, -1, -1], norm: [1, 0, 0], uv: [1, 0] },
  { pos: [1, 1, 1], norm: [1, 0, 0], uv: [0, 1] },

  { pos: [1, 1, 1], norm: [1, 0, 0], uv: [0, 1] },
  { pos: [1, -1, -1], norm: [1, 0, 0], uv: [1, 0] },
  { pos: [1, 1, -1], norm: [1, 0, 0], uv: [1, 1] },
  // back
  { pos: [1, -1, -1], norm: [0, 0, -1], uv: [0, 0] },
  { pos: [-1, -1, -1], norm: [0, 0, -1], uv: [1, 0] },
  { pos: [1, 1, -1], norm: [0, 0, -1], uv: [0, 1] },

  { pos: [1, 1, -1], norm: [0, 0, -1], uv: [0, 1] },
  { pos: [-1, -1, -1], norm: [0, 0, -1], uv: [1, 0] },
  { pos: [-1, 1, -1], norm: [0, 0, -1], uv: [1, 1] },
  // left
  { pos: [-1, -1, -1], norm: [-1, 0, 0], uv: [0, 0] },
  { pos: [-1, -1, 1], norm: [-1, 0, 0], uv: [1, 0] },
  { pos: [-1, 1, -1], norm: [-1, 0, 0], uv: [0, 1] },

  { pos: [-1, 1, -1], norm: [-1, 0, 0], uv: [0, 1] },
  { pos: [-1, -1, 1], norm: [-1, 0, 0], uv: [1, 0] },
  { pos: [-1, 1, 1], norm: [-1, 0, 0], uv: [1, 1] },
  // top
  { pos: [1, 1, -1], norm: [0, 1, 0], uv: [0, 0] },
  { pos: [-1, 1, -1], norm: [0, 1, 0], uv: [1, 0] },
  { pos: [1, 1, 1], norm: [0, 1, 0], uv: [0, 1] },

  { pos: [1, 1, 1], norm: [0, 1, 0], uv: [0, 1] },
  { pos: [-1, 1, -1], norm: [0, 1, 0], uv: [1, 0] },
  { pos: [-1, 1, 1], norm: [0, 1, 0], uv: [1, 1] },
  // bottom
  { pos: [1, -1, 1], norm: [0, -1, 0], uv: [0, 0] },
  { pos: [-1, -1, 1], norm: [0, -1, 0], uv: [1, 0] },
  { pos: [1, -1, -1], norm: [0, -1, 0], uv: [0, 1] },

  { pos: [1, -1, -1], norm: [0, -1, 0], uv: [0, 1] },
  { pos: [-1, -1, 1], norm: [0, -1, 0], uv: [1, 0] },
  { pos: [-1, -1, -1], norm: [0, -1, 0], uv: [1, 1] },
]
