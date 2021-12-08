
/** 生成类型判断函数 */
const genIsTypeFn = type => {
  return (data) => {
    return Object.prototype.toString.apply(data) === `[object ${type}]`
  }
}

const isPlainObject = genIsTypeFn('Object')

const isRegExp = genIsTypeFn('RegExp')

/**
 * 定义对象属性
 * @param {Object} target 目标对象
 * @param {String} key 属性
 * @param {*} value 属性值
 * @param {Boolean} enumerable 是否可枚举
 */
const def = (target, key, value, enumerable = false) => {
  Object.defineProperty(target, key, {
    value,
    enumerable,
    writable: true,
    configurable: true
  })
}
