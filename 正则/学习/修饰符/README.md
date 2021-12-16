# 修饰符（标记）

标记也称为修饰符，正则表达式的标记用于指定额外的匹配策略。

标记位于表达式外，如：

- /pattern/flags
- new RegExp(pattern, flags)

``` js
let str = 'aaAabaBa'
let regex
```

## i

ignore，不区分大小写

将匹配设置为不区分大小写，即 A 和 a 没有区别

``` js
/** 不带i */
regex = /a/g
console.log(str.match(regex))
// [ 'a', 'a', 'a', 'a', 'a' ]

/** 带i */
regex = /a/gi
console.log(str.match(regex))
// [ 'a', 'a', 'A', 'a', 'a', 'a' ]
```

## g

global，全局匹配

查找所有的匹配项

``` js
/** 不带g */
regex = /a/
console.log(str.match(regex))
// [ 'a', index: 0, input: 'aaAabaBa', groups: undefined ]

/** 带g */
regex = /a/g
console.log(str.match(regex))
// [ 'a', 'a', 'a', 'a', 'a' ]
```

## m

multi line，多行匹配

使边界字符（定位符）^ 和 $ 匹配每一行的开头和结尾，记住，是多行，而不是整个字符串的开头和结尾

``` js
str = `a
a
b
a
b
`
regex = /^a/g
console.log(str.match(regex))
// [ 'a' ] 第一行的a

/** 测试m修饰符，带m */
regex = /^a/gm
console.log(str.match(regex))
// [ 'a', 'a', 'a' ]
```

## s

特殊字符圆点 . 中包含换行符 \n

// . 匹配除换行符（\n、\r）之外的任何单个字符，等价于[^\n\r]

默认情况下圆点 . 是匹配除换行符 \n 之外的任何字符，加上 s 修饰符之后，. 中包括换行符 \n

``` js
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
```

