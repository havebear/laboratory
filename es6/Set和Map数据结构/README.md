# Set和Map

## 为什么出现

Set是一种叫做**集合**的数据结构，Map是一种叫做**字典**的数据结构

## Set的操作

- add(value)，添加值
- delete(value)，移除一个值
- has(value)，如果值在集合中存在，true
- clear()，移除所有成员

## Set的遍历

- keys()，返回一个包含集合中所有键的数组
- values()，返回一个包含结合中所有值的数组
- entries()，返回键值对的数组，没啥用
- forEach()， 使用回调函数遍历每个成员

``` js
Set.prototype[Symbol.iterator] === Set.prototype.values
// true
```

JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。

## Map的遍历

- keys()，返回一个包含集合中所有键的数组
- values()，返回一个包含结合中所有值的数组
- entries()，返回键值对的数组，没啥用
- forEach()， 使用回调函数遍历每个成员
