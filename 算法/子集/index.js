/*
 * @Author: BGG
 * @Date: 2021-12-17 13:04:15
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-17 14:45:09
 * @Description:  
 */

const list = [ 'A', 'B', 'C', 'D' ]

/**
 * 求子集
 * @param {array} arr 
 * @returns 
 */
const subset = (arr = []) => {
  // 集合长度
  const length = arr.length
  // 如果长度为0
  if (!length) return []
  // 结果
  const result = []
  // 子集总数
  const total = Math.pow(2, length)

  for (let i = 1; i <= total; i++) {
    console.log(i)
    result.push(
      i
        .toString(2)
        .padStart(length, 0)
        .split('')
        .map((item, index) => Number(item) && arr[index])
        .filter((item) => item)
    )
  }

  return result
}

console.log(subset(list))
