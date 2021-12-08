# 数组元素变化

## 现象

- 无法对数组中基本数据类型进行劫持，修改无作用，不会触发派发更新
- 对数组中引用类型的数据进行修改，会触发派发更新
- 数组中能修改自身的方法：push、pop、shift、unshift、splice、sort被重写，内部调用了notify方法派发更新
- 通过索引新增的元素，不会被响应式，不会触发更新
- 通过索引对子元素重新赋值，不会触发更新

## 解决

- this.$set(target, key, value)
- this.arr = [ ...this.arr ]
- this.arr.splice(0, 0)
