/*
为了达成Promise的链式调用，我们每次调用 then 都会返回一个新的 promise。
*/
// 添加链式调用
function MyPromise(fn) {
  // 订阅者回调函数数组
  this.callBacks = []
  // promise的状态
  this.status = 'pending'
  // 记录决议后的值
  this._val = null
  // 发布信息 调用订阅者的回调函数 使用箭头函数可以保证this的指向是此Promise实例
  const resolve = val => {
    // 切换状态
    this.status = 'fulfill'
    // 决议赋值
    this._val = val
    // 执行回调
    this.callBacks.forEach(fn => {
      fn(val)
    })
  }
  // 将resolve作为实参传入fn中，交给fn决定何时发布信息
  fn(resolve)
}


/*
promise.then 接受一个函数，它既可以是同步的，返回一个值，也可以是异步的，返回一个Promise。
*/
MyPromise.prototype.then = function(successCallback) {
  const _handleSuccessCallback = resolve => val => {
    //successCallback是Promise实例调用then调用时传入的successCallback 不是return出去的Promise实例再调用then时候传入的successCallback哦
    const result = successCallback(val);
    //如果result的值是promise 那么就在加一个then进去 执行return出去promise的resolve
    if (result && result instanceof MyPromise) {
      result.then(_val => {
        resolve(_val);
      })
    } else {
      resolve(result);
    }
  }
  // 先缓存this
  const that = this
  return new MyPromise(function(resolve) {
    // 如果promise已经决议，那么立即执行回调函数
    if (that.status === 'fulfill') {
      _handleSuccessCallback(resolve)(that._val)
    } else {
      that.callBacks.push(_handleSuccessCallback(resolve))
    }
  })
}

// 尝试执行
const p = new MyPromise(function(resolve) {
  setTimeout(() => {
    resolve(123)
  }, 1000)
})

p.then(val => {
  console.log(val)
})

const p1 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject(123)
  }, 1000)
})

p1.then(val => {
  console.log('成功' + val)
}, val => {
  console.log('失败' + val)
})
