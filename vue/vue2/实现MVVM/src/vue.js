function Vue (options = {}) {
  const elm = document.querySelector(options.el)
  this._data = options.data
  this._template = elm
  this._el = options.el
  this._parent = elm.parentNode

  this.mount()
}