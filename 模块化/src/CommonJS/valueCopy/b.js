let foo = 1;
setTimeout(() => {
  foo = 2;
  console.log("500ms——我是b.js,我还没有执行完，现在我的foo="+foo)
}, 500);
module.exports = {
  foo: foo,
};
console.log("0ms——我是b.js,我开始执行了，现在我的foo="+foo)