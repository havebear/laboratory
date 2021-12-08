# 数组元素变化

## 现象

- 新增属性无法触发响应式
- 删除属性无法出发响应式

## 解决

- this.$set(target, key, value)，解决增加属性的问题
- this.$delete(target, key)，解决删除属性的问题
