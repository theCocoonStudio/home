// tracks and controls all imperative scene objects
export default class ShaderPassesController {
  constructor({ mesh, renderPriority, eventPriority, cascade = false, autoDispose = true }) {
    this.config = { autoDispose, renderPriority, eventPriority, cascade, mesh }
    this.shaderPasses = []
  }

  init() {}

  get output() {
    return this.log[this.log.length - 1]
  }

  react() {}

  // dispose() {}
}
