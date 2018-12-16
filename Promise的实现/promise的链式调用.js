// then的参数（onFulfilled, onRejected这两个回调函数）返回一个值
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 1000)
})

let promise2 = promise1.then(res => {
  return '返回一个普通值'
})

promise2.then(res => {
  console.log(res)
})

// then的参数返回一个promise

promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 1000)
})

promise2 = promise1.then(res => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('返回一个promise')
    }, 2000)
  })
})

promise2.then(res => {
  console.log(res)
})