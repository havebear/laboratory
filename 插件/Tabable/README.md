# Tapable

tapable 是 webpack 内部使用的一个流程管理工具，主要用来串联插件，完善事件流执行。

## 常用 hooks

- SyncHook
- SyncBailHook
- SyncWaterfallHook
- AsyncParallelHook
- AsyncParallelBailHook
- AsyncSeriesHook
- AsyncSeriesBailHook
- AsyncSeriesWaterfallHook

## 用法

```js
// hooks接收一个数组参数，参数为执行回调事件所需的参数名。
const hook = new SyncHook([arg1, arg2, ...])
```

- hooks 接收一个数组参数，参数为执行回调事件所需的参数名。
- hooks 通过 tap 函数注册事件，可多次注册
- hooks 通过 call 函数执行 tap 注册的所有事件
- tapAsync/callAsync、tapPromise/Promise 用于注册同步执行的异步事件，callAsync 用在并行执行的异步狗子完成后再执行该函数

