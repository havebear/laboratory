let watcherid = 0
class Watcher {
  /**
   * @param {Object} vm Vue实例
   * @param {Function} expOrFn 
   */
  constructor (vm, expOrFn) {
    this.vm = vm
    this.getter = expOrFn
    this.id = watcherid++
    this.deps = []
    this.depIds = {}
    // 实例化时调用get
    this.get()
  }

  get () {
    pushTarget(this)
    this.getter(this.vm)
    popTarget()
  }

  run () {
    this.get()
  }

  /** 对外公开的更新方法 */
  update () {
    this.run()
  }

  addDep (dep) {
    this.deps.push(dep)
  }
}