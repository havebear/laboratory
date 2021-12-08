class VNode {
  /**
   * @param {String} tag 标签名
   * @param {Object} data 属性对象
   * @param {String} value 文本节点内容
   * @param {Number} type 节点类型
   */
  constructor (tag, data, value, type) {
    Object.assign(this, {
      tag,
      data,
      value,
      type,
      children: []
    })
  }

  appendChild (vnode) {
    this.children.push(vnode)
  }
}
