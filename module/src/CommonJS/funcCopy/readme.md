```
// 执行node a.js
0ms——我是b.js,我开始执行了，现在我的foo=1
执行函数
0ms——我是a.js,我的foo=() => {
    console.log("执行函数")
    return foo;
  }我的foo()=1
500ms——我是b.js,我还没有执行完，现在我的foo=2
执行函数
1000ms——我是a.js,我的foo=() => {
    console.log("执行函数")
    return foo;
  }我的foo()=2
执行函数
1000ms——我是a.js,当我再次require后,我的foo=() => {
    console.log("执行函数")
    return foo;
  }我的foo()=2
```

b模块加载到a模块中，输出的是一个函数，但是要等到这个函数被调用之后，再返回原来的b模块去执行函数，我们可以利用这个输出函数的返回值，来动态地获取我们想要的值。