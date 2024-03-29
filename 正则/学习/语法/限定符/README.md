# 限定符

限定符用来指定正则表达式的一个给定组件必须要出现多少次才能满足匹配。有 * 或 + 或 ? 或 {n} 或 {n,} 或 {n,m} 共6种。

## \*

- 匹配前面的子表达式 0次 或 多次

## \+

- 匹配前面的子表达式 1次 或 多次

## ?

- 匹配前面的子表达式 0次 或 1次

## {n}

- n是非负整数
- 匹配确定的 n 次，例如，“o{2}”匹配字符串 “adfoo” 中的“oo”

## {n,}

- n是非负整数
- 至少匹配 n 次，例如，“o{2,}”不能匹配 “Bob” 中的 “o”，但是能匹配 “foooood” 中的所有 “o”
- “o{1,}” 等价于 “o+”
- “o{0,}” 等价于 “o*”

## {n,m}

- n 和 m 均为非负整数，其中 n < m。
- 最少匹配 n 次 且最多匹配 m 次。
- 例如，“o{1, 3}”，将匹配 “fooooood” 中的前三个 “o”
- “o{0,1}” 等价于 “o?” 

**/* 和 /+ 限定符都是贪婪的，因为他们会尽可能多的匹配文字，只有在它们的后面加上 ? 就可实现非贪婪或最小匹配**
