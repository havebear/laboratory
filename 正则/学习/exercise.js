/*
 * @Author: BGG
 * @Date: 2021-12-11 20:03:27
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-14 22:44:58
 * @Description:  练习
 */

/** 匹配字符串中的数字 */
let str = 'aBACCCCbc213DGdW.@2342'

let regex = /[0-9]+/
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


str = 'runooooooooooob'
/** 匹配字符串中runoo（0~多个o）b的字符串 */
regex = /runoo+b/
console.log('匹配字符串中runoo（1~多个o）b的字符串')
console.log(str.match(regex))

/** 匹配字符串中runoo（0~多个o）b的字符串 */
regex = /runoo*b/
console.log('匹配字符串中runoo（0~多个o）b的字符串')
console.log(str.match(regex))

/** 匹配字符串中runoo（0~1个o）b的字符串 */
regex = /colou?r/
str = 'color'
console.log('匹配字符串中color或者colour')
console.log(str.match(regex))

/** 匹配字符串中所有的a、e、i、o、u字符 */
regex = /[aeiou]/g
str = 'google ali taobao'
console.log('匹配字符串中所有的a、e、i、o、u字符')
console.log(str.match(regex))

/** 匹配字符串中所有除了a、e、i、o、u的字符 */
regex = /[^aeiou]/g
str = 'google ali taobao'
console.log('匹配字符串中所有除了a、e、i、o、u的字符')
console.log(str.match(regex))

/** 匹配所有字母 */
regex = /[A-Za-z]/g
str = 'asdf1231Ac.k123sa'
console.log('匹配所有字母')
console.log(str.match(regex))

/** 匹配所有空白符、换行 */
regex = /[\s]/g
str = `12 asdf12 12 123 
ad `
console.log('匹配所有空白符、换行')
console.log(str.match(regex))

/** 匹配非空白符、非换行符 */
regex = /[\S]/g
// regex = /[^\s]/g
str = `12 asdf12 12 123 
ad `
console.log('匹配非空白符、非换行符')
console.log(str.match(regex))

/** 匹配除换行符（\n、\r）之外的任何单个字符 */
regext = /./g
console.log('匹配除换行符（\n、\r）之外的任何单个字符')
console.log(str.match(regex))

regext = /[^\n\r]/g
console.log('匹配除换行符（\n、\r）之外的任何单个字符')
console.log(str.match(regex))

/** 匹配字符串是否以123结尾 */
regex = /123$/
str = 'zcxvxzcv123'
console.log('匹配字符串是否以123结尾')
console.log(!!str.match(regex))

/** 匹配字符串是否以123开头 */
regex = /^123/
str = '123'
console.log('匹配字符串是否以12开头')
console.log(!!str.match(regex))

/** 匹配字符串是否以123开头，123结尾 */
regex = /^123[\S]+123$/
str = '123sdkfjdasjf123'
console.log('匹配字符串是否以123开头，123结尾')
console.log(!!str.match(regex))

