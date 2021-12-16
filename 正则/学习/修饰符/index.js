/*
 * @Author: BGG
 * @Date: 2021-12-16 14:22:26
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-16 15:51:37
 * @Description:  修饰符
 */

let str = 'aaAabaBa'
let regex = null

/** 测试i修饰符，不带i */
console.log('测试i')
regex = /a/g
console.log(str.match(regex))
// [ 'a', 'a', 'a', 'a', 'a' ]

/** 测试i修饰符，带i */
regex = /a/gi
console.log(str.match(regex))
// [ 'a', 'a', 'A', 'a', 'a', 'a' ]

/** 测试g修饰符，不带g */
console.log('测试g')
regex = /a/
console.log(str.match(regex))
// [ 'a', index: 0, input: 'aaAabaBa', groups: undefined ]

/** 测试g修饰符，带g */
regex = /a/g
console.log(str.match(regex))
// [ 'a', 'a', 'a', 'a', 'a' ]

/** 测试m修饰符，不带m */
str = `a 
a 
b
a
b
`
console.log('测试m')
regex = /^a/g
console.log(str.match(regex))

/** 测试m修饰符，带m */
regex = /^a/gm
console.log(str.match(regex))

/** 测试s修饰符，不带s */
console.log('测试s')
regex = /./g
console.log(str.match(regex))
/** 
 [
  'a', ' ', 'a',
  ' ', 'b', 'a',
  'b'
]
*/

/** 测试s修饰符，带s */
regex = /./gs
console.log(str.match(regex))
/**
 [
  'a', ' ',  '\n', 'a',
  ' ', '\n', 'b',  '\n',
  'a', '\n', 'b',  '\n'
]
 */
