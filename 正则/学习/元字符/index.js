

/** 匹配字符串中的邮箱地址 */
let str = '12 asdf@abd.com 123z#$%^&'
/**
 * \w 匹配字母、数字、下划线。等价于[A-Za-z0-9_]
 * .  匹配除换行符(\n、\r)之外的任何单个字符
 * [.%+-] 中的.%+-表示特殊字符
 * ] 后面的 + 表示最少匹配字符集[...]中的任意一项
 */
const regex = /\b[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,6}\b/g

console.log(str.match(regex))
// [ 'asdf@abd.com' ]

str = '+_+@qq.com'
console.log(str.match(regex))
// [ '_+@qq.com' ]

str = '.@qq.123.com'
console.log(str.match(regex))

