/** 挂载 */
Vue.prototype.mount = function () {
  this.render = this.createRenderFn()
  this.mountComponent()
}

/** 挂载组件 */
Vue.prototype.mountComponent = function () {
  const mount = () => {
    console.log('触发')
    this.update(this.render())
  }

  new Watcher(this, mount)
}

/** 生成render函数，目的是缓存抽象语法树 */
Vue.prototype.createRenderFn = function () {
  const vnode = getVNode(this._template)

  // console.log(vnode)

  return function render () {
    return combine(vnode, this._data)
  }
}

Vue.prototype.update = function (vnode) {
  this._parent.replaceChild(parseVNode(vnode), document.querySelector(this._el))
}
