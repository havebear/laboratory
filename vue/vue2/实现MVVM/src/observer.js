// 处理数组方法
const ARRAY_METHODS = [
  'push',
  'pop',
  'shift',
  'unshift',
  'reverse',
  'sort',
  'splice'
]

const array_methods = Object.create(Array.prototype)

ARRAY_METHODS.forEach(method => {
  array_methods[method] = function () {
    console.log('调用：' + method)
    // 讲数组成员进行响应式
    for (let i = 0; i < arguments.length; i++) {
      observer(arguments[i])
    }
    // ([...arguments]).forEach(arg => observer(arg))
    // 执行原型上的方法，并返回结果
    return Array.prototype[method].apply(this, arguments)
  }
})

class Observer {
  /** 构造响应式对象 */
  constructor (value) {
    this.value = value
    this.dep = new Dep()

    // 当前对象绑定__ob__属性
    def(value, '__ob__', this)

    // 数组
    if (Array.isArray(value)) {
      // 修改数组方法
      value.__proto__ = array_methods
      // 成员响应式
      this.observerArray(value)
    }
    // 对象
    else {
      Object.keys(value).forEach(key => defineReactive(value, key))
    }
  }

  /**
   * 对数组成员进行响应式
   * @param {Array} arr 
   */
  observerArray (arr = []) {
    // init-data中的observer方法
    arr.forEach(item => observer(item))
  }
}