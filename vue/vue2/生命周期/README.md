# Vue的生命周期

## 关于 keep-alive 下的 activated 和 deactivated 的总结

- 被 keep-alive 包裹的组件，第一次渲染时会调用activated
- 每次被激活时，会调用 activated
- 组件被停用（离开路由），会调用deactivated
