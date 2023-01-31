<!--
 * @Author: BGG
 * @Date: 2022-07-08 10:27:32
 * @LastEditors: BGG
 * @LastEditTime: 2023-01-31 14:47:58
 * @Description: 
-->
# 日志

## 配置 "@"

安装依赖：

yarn add @vitejs/plugin-vue -D

vite.config.js

``` js
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [ vue() ],
  resolve: {
    alias: {
      '@': resolve('src')
    }
  }
})
```
