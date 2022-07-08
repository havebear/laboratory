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
