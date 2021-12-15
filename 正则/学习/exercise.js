/*
 * @Author: BGG
 * @Date: 2021-12-11 20:03:27
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-15 17:58:18
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

/** 匹配字符串中所有的ab，abab，ababab…… */
regex = /[ab]+/g
str = 'abcababab123abab=-abaaaabbb'
console.log('匹配字符串中所有的ab，abab，ababab……')
console.log(str.match(regex))

/** 匹配字符串中首位非0数字 */
regex = /[1-9][0-9]*/g
// regex = /[1-9][0-9]+/g
// regex = /[1-9][0-9]?/g
str = 'a1df123,cx0123nsd.01123=-12#$%^&211'
console.log('匹配字符串中首位非0数字')
console.log(str.match(regex))

/** 匹配标签 - 贪婪 */
regex = /<.*>/g
str = '<div><span>TEST</span></div>'
console.log('匹配标签 - 贪婪')
console.log(str.match(regex))

/** 匹配标签 - 非贪婪 */
regex = /<.*?>/g
str = '<div><span>TEST<a>Href</a></span></div>'
console.log('匹配标签（包含闭合标签） - 非贪婪')
console.log(str.match(regex))

/** 匹配标签 - 非贪婪 */
regex = /<\w+?>/g
str = '<div><span>TEST<a>Href</a></span></div>'
console.log('匹配标签（不包含闭合标签） - 非贪婪')
console.log(str.match(regex))

/** 匹配标签中内容 */
// regex = /<.*>/g

/** 匹配数字前面的“abc” */
/** exp1(?=exp2) */
/** 表示查找 exp2 前面的 exp1 */
regex = /abc(?=[0-9]+)/g
str = '123abc123abc'
console.log('匹配数字前面的“abc”')
console.log(str.match(regex))

/** 匹配数字后面的“abc” */
/** (?<=exp2)exp1 */
/** 表示查找 exp2 后面的exp1 */
regex = /(?<=[\d+])abc/g
str = '123abc123abc'
console.log('匹配数字后面的“abc”')
console.log(str.match(regex))

/** 匹配后面不是数字的“abc” */
/** exp1(?!exp2) */
/** 表示查找后面不是 exp2 的 exp1 */
regex = /abc(?![\d+])/g
str = '123abc123abc'
console.log('匹配后面不是数字的“abc”')
console.log(str.match(regex))

/** 匹配前面不是数字的“abc” */
/** exp1(?!exp2) */
/** 表示查找前面不是 exp2 的 exp1 */
regex = /(?<![\d+])abc/g
str = 'abc123abc123abc'
console.log('匹配前面不是数字的“abc”')
console.log(str.match(regex))

