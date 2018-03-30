```
执行node.js
0ms——我是b.js,我开始执行了，现在我的foo=1
0ms——我是a.js,我的foo=1
500ms——我是b.js,我还没有执行完，现在我的foo=1
并且重新export了,module.export.foo=2
1000ms——我是a.js,我的foo=2
1000ms——我是a.js,当我再次require后,我的foo=2
```

- CommonJS 模块重复引入的模块并不会重复执行，再次获取模块直接获得暴露的 module.exports 对象


- 如果你要处处获取到模块内的最新值的话，也可以你每次更新数据的时候每次都要去更新 module.exports 上的值


- 如果你暴露的 module.exports 的属性是个对象，那就不存在这个问题了。[详见](../objCopy)


所以如果你要处处获取到模块内的最新值的话，也可以你每次更新数据的时候每次都要去更新 module.exports 上的值。
