// b.js
// module.exports.foo = 1;   // 同 exports.foo = 1 
let foo = 1;
module.exports = {
    foo: foo,
  };
setTimeout(() => {
  module.exports.foo = 2;
  console.log("500ms——我是b.js,我还没有执行完，现在我的foo="+foo)
  console.log("并且重新export了,module.export.foo="+module.exports.foo)
}, 500);
console.log("0ms——我是b.js,我开始执行了，现在我的foo="+foo)