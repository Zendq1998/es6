// 添加状态和then
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

MyPromise.prototype.then = function(successCallback) {
  // 如果promise已经决议，那么就立即执行回调，否则先推入回调数组中
  if (this.status === 'fulfill') {
    successCallback(this._val)
  }
  this.callBacks.push(successCallback)
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
