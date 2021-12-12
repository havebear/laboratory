/*
 * @Author: BGG
 * @Date: 2021-12-11 20:03:27
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-12 22:32:39
 * @Description:  练习
 */

/** 匹配字符串中的数字 */
var str = 'aBACCCCbc213DGdW.@2342'

var regex = /[0-9]+/
console.log('匹配字符串中第一个连续数字')
console.log(str.match(regex))
// [ '213', index: 9, input: 'aBACCCCbc213DGdW.@2342', groups: undefined ]

regex = /[0-9]+/g
console.log('匹配字符串中的所有连续数字')
console.log(str.match(regex))
// [ '213', '2342' ]

/** 匹配字符串中的大写字母 */
regex = /[A-Z]+/
console.log('匹配字符串中的连续大写字母')
console.log(str.match(regex))
// [
//   'BACCCC',
//   index: 1,
//   input: 'aBACCCCbc213DGdW.@2342',
//   groups: undefined
// ]

regex = /[A-Z]+/g
console.log('匹配字符串中的所有连续大写字母')
console.log(str.match(regex))
// [ 'BACCCC', 'DG', 'W' ]

/** 验证字符串是否数字开头、D结尾 */
regex = /^[0-9]+D$/
console.log('验证字符串是否数字开头、D结尾')
console.log(!!str.match(regex))

/** 匹配字符串中的数字开头、D结尾的字符串 */
regex = /[0-9]+D/g
console.log('匹配字符串中的数字开头、D结尾的所有字符串')
console.log(str.match(regex))


