/*
 * @Date: 2021-12-04 10:08:54
 * @LastEditTime: 2021-12-04 10:24:54
 * @Description:  Set和Map
 */

console.log('Hello World')

/** 获取当前文档节点类型
 * 1. 通过扩展运算符... 或 Array.from 把类数组对象转数组
 * 2. 通过new Set进行去重
 * 3. 通过扩展运算符... 或 Array.from 把类数组对象转数组
*/

let nodeNames = [ ...new Set([...document.querySelectorAll('*')].map(item => item.nodeName)) ]
// let nodeNames = Array.from(new Set(Array.from(document.querySelectorAll('*')).map(item => item.nodeName)))
