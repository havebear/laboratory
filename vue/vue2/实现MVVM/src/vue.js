function Vue (options = {}) {
  const elm = document.querySelector(options.el)
  this._data = options.data
  this._template = elm
  this._el = options.el
  this._parent = elm.parentNode

  /** 初始化状态 */
  // this.initComputed()
  this.initData()

  /** 组件挂载 - 依赖收集 */
  this.mount()
}