let depid = 0
class Dep {
  constructor () {
    this.is = depid++
    // 订阅该数据的watcher列表
    this.subs = []
  }

  /** 添加订阅者 */
  addSub (sub) {
    this.subs.push(sub)
  }

  /** 移除订阅者 */
  removeSub (sub) {
    for (let i = this.subs.length; i >= 0; i--) {
      if (sub === this.subs[i]) {
        this.subs.splice(i, 1)
      }
    }
  }

  /** 添加订阅者，也把当前dep添加到对应订阅者中 */
  depend () {
    if (Dep.target) {
      this.addSub(Dep.target)
      Dep.target.addDep(this)
    }
  }

  /** 触发订阅当前dep的wathcer的update方法 - 派发更新 */
  notify () {
    this.subs.slice().forEach(watcher => watcher.update())
  }
}

// 全局存储当前的watcher
Dep.target = null

const targetStack = []

function pushTarget (target) {
  targetStack.unshift(Dep.target)
  Dep.target = target
}

function popTarget () {
  Dep.target = targetStack.shift()
}