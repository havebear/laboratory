
function getVNode (node = {}) {
  const { nodeType, nodeValue} = node
  let vnode = null

  // 元素节点
  if (nodeType === 1) {
    const { nodeName, attributes, childNodes } = node
    const attr = {}

    // 保存当前节点属性
    for (const { nodeName, nodeValue } of attributes) {
      attr[nodeName] = nodeValue
    }

    // 实例一个VNode
    vnode = new VNode(nodeName, attr, undefined, nodeType)

    // 处理子节点
    childNodes.forEach(el => {
      vnode.appendChild(getVNode(el))
    })
  } else if (nodeType === 3) {
    vnode = new VNode(undefined, undefined, nodeValue, nodeType)
  }
  return vnode
}

/**
 * vnode转真实dom
 */
function parseVNode ({ type, value, data, tag, children }) {
  let node = null

  // 文本节点
  if (type === 3) {
    return document.createTextNode(value)
  }
  // 元素节点
  else if (type === 1) {

    node = document.createElement(tag)

    // 属性
    Object.keys(data).forEach(key => {
      node.setAttribute(key, data[key])
    })

    // 子元素
    children.forEach(item => {
      node.appendChild(parseVNode(item))
    })
  }

  return node
}

const curlyBracesReg = /\{\{(.+?)\}\}/g

/** 数据和模板结合，得到新的vnode */
function combine ({
  type,
  data: attr,
  value,
  tag,
  children
} = {}, data) {
  let vnode = null

  // 文本节点
  if (type === 3) {

    const _value = value.replace(curlyBracesReg, (_, g) => {
      return getValueByPath(data, g.trim())
    })

    vnode = new VNode(tag, attr, _value, type)
  }
  // 元素节点
  else if (type === 1) {
    vnode = new VNode(tag, attr, value, type)
    children.forEach(item => vnode.appendChild(combine(item, data)))
  }

  return vnode
}

/**
 * 根据路径获取属性值
 * @param {Object} obj 
 * @param {String} path 
 */
function getValueByPath (obj, path) {
  const paths = path.split('.')
  let res = obj
  let prop

  while (prop = paths.shift()) {
    res = res[prop]
  }

  return res
}
