/**
 * 将对象属性的访问映射到另一个对象的属性上
 */
function proxy (target, prop, key) {
  Object.defineProperty(target, key, {
    enumerable: true,
    configurable: true,
    get () {
      return target[prop][key]
    },
    set (newVal) {
      target[prop][key] = newVal
    }
  })
}

/**
 * 劫持对象
 * @param {Object} target 劫持对象
 * @param {String} key 属性
 * @param {String} value 属性值
 * @param {Boolean} enumerable 可枚举
 */
function defineReactive (target, key, value, enumerable) {
  
  // 如果value是一个对象或者数组，则将该对象响应式
  if (typeof value === 'object' && value !== null) {
    observer(value)
  }

  // 接着劫持get和set
  // 当前作用域闭包了一个dep
  const dep = new Dep()

  // 劫持属性时，对属性进行响应式化（对象下的对象数组属性）
  const childOb = observer(value)

  Object.defineProperty(target, key, {
    configurable: true,
    enumerable,
    get () {
      // 收集依赖
      dep.depend()
      // 如果当前value对象/数组，且已被响应式处理
      if (childOb) {
        // 收集依赖该属性（对象）的watcher
        childOb.dep.depend()
      }
      return value
    },
    set (newVal) {
      // 相同值返回
      if (value === newVal) return
      // 如果新值是对象或者数组
      if (typeof value === 'object' && value !== null) {
        observer(newVal)
      }

      value = newVal

      // 派发更新
      dep.notify()
    }
  })
}

/** 把对象变成响应式 */
function observer (value) {
  
  // 如果不为对象 或 为vnode
  if (!(value !== null && typeof value === 'object') || value instanceof VNode) {
    return
  }

  let ob

  // 是否已经被响应式，是则不再重复响应式
  if (value.hasOwnProperty('__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__
  }
  
  // 数组或者对象
  else if (Array.isArray(value) || isPlainObject(value)) {
    ob = new Observer(value)
  }
  return ob
}

/** 初始化数据，将数据变成响应式 */
Vue.prototype.initData = function () {
  
  // 响应式对象
  observer(this._data)

  // 将_data的属性访问映射到this下
  Object.keys(this._data).forEach(key => {
    proxy(this, '_data', key)
  })
}