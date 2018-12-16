// 构造函数接受一个函数，该函数被调用的时候，回被promise传入两个参数（回调函数）
function MyPromise(fn) {
  fn(resolve, reject)
  function resolve(){}
  function reject(){}
}