/*
添加状态
*/

/*
- Pending (进行中)
- Fulfilled (已成功)
- Rejected (已失败)
*/
const PENDING = Symbol();
const FULFILLED = Symbol();
const REJECTED = Symbol();

function MyPromise(fn) {
  this.value = undefined
  this.status = PENDING

  this.onFulFilledCallbacks = []
  this.onRejectedCallbacks = []

  function resolve(value) {
    if (this.status === PENDING) {
      this.value = value
      this.status = FULFILLED

      this.onFulFilledCallbacks.forEach(callBack => {
        callBack(this.value)
      })
    }
  }

  function reject(value) {
    if (this.status === PENDING) {
      this.value = value
      this.status = REJECTED

      this.onRejectedCallbacks.forEach(callBack => {
        callBack(this.value)
      })
    }
  }

  // 执行fn
  // 考虑到执行handle的过程中有可能出错，所以我们用try/catch块给包起来，并且在出错以后reject
  try {
    fn(resolve, reject)
  } catch (err) {
    reject(err)
  }
}