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
    // 调用响应式对象ob的dep属性的notify，触发更新
    // console.log(this.__ob__.dep)
    this.__ob__.dep.notify()
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
      Object.keys(value).forEach(key => defineReactive(value, key, value[key], true))
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