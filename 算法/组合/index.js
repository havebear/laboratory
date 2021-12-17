/*
 * @Author: BGG
 * @Date: 2021-12-17 13:04:06
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-17 14:07:34
 * @Description:  组合算法，n个元素取m个元素的所有组合情况(非排列)
 */

/**
 * 获取传入集合目标位数的子集
 * @param {number} m 组合位数
 * @param {*} first 首位
 * @param {array} arr 集合
 * @returns 
 */
// const combination = (m, first = null, arr = []) => {

//   // 结果
//   const result = []

//   // m >= arr.length的时候退出递归
//   if (m >= arr.length) return result

//   // 组合
//   for (let i = 1; i < arr.length; i++) {
//     result.push([first || arr[0], arr[i]]) 
//   }
  
//   // 递归
//   result.push(...combination(m, arr[1], arr.slice(1)))

//   return result
// }

const list = [ 'A', 'B', 'C', 'D', 'E' ]

// console.log(combination(2, null, list))

const combo = (arr, num) => {

  // 结果
  const result = []

  // 组合
  const range = (_result, _arr) => {
    // 组合位数 等于 传入数组长度，则保存该组合
    if (num === _result.length) {
      result.push(_result)
    } else {
      // 循环次数，等于传入数组长度 - 子集长度 + 当前子集长度
      const len = _arr.length - num + _result.length
      // 
      for (let i = 0; i <= len; i++) {
        range(_result.concat(_arr[i]), _arr.slice(i + 1))
      }
    }
  }

  range([], arr)

  return result
}

console.log(combo(list, 4))

