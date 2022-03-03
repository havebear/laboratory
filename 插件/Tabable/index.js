import { SyncHook, AsyncParallelHook } from 'tapable'

// new SyncHook 的参数

class Car {
  constructor () {
    this.hooks = {
      // 加速 hook
      accelerate: new SyncHook(['newSpeed']),
      // 制动 hook
      break: new SyncHook(),
      // 计算路线
      calculateRoutes: new AsyncParallelHook(['source', 'target', 'routerList'])
    }
  }
}

const car = new Car()

car.hooks.accelerate.tap('WarningLampPlugin', speed => {
  console.log('WarningLampPlugin' + speed)
})

car.hooks.accelerate.tap('WarningLampPlugin2', speed => {
  console.log('WarningLampPlugin2' + speed)
})

car.hooks.accelerate.call(123)
// 'WarningLampPlugin'
// 'WarningLampPlugin2'

