/*
 * @Author: 616749285@qq.com
 * @Date: 2021-12-07 17:07:51
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-12-07 17:22:01
 * @Description:  VNode类
 */

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
