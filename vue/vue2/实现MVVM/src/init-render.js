/*
 * @Author: 616749285@qq.com
 * @Date: 2021-12-07 22:12:15
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-12-07 22:54:24
 * @Description:  vue render相关
 */

/** 挂载 */
Vue.prototype.mount = function () {
  this.render = this.createRenderFn()
  this.mountComponent()
}

/** 挂载组件 */
Vue.prototype.mountComponent = function () {
  this.update(this.render())
}

/** 生成render函数，目的是缓存抽象语法树 */
Vue.prototype.createRenderFn = function () {
  const vnode = getVNode(this._template)

  console.log(vnode)

  return function render () {
    return combine(vnode, this._data)
  }
}

Vue.prototype.update = function (vnode) {
  this._parent.replaceChild(parseVNode(vnode), document.querySelector(this._el))
}
