当你从 b 中想引入 a 模块的时候，因为 node 之前已经加载过 a 模块了，所以它不会再去重复执行 a 模块，而是直接去生成当前 a 模块吐出的 module.exports 对象，因为 a 模块引入 b 模块先于给 done 重新赋值，所以当前 a 模块中输出的 module.exports 中 done 的值仍为 false。而当 a 模块中输出 b 模块的 done 值的时候 b 模块已经执行完毕，所以 b 模块中的 done 值为 true。

## 执行结果：
```
// node a.js
// 执行结果：
// a starting
// b starting
// in b, a.done = false
// b done
// in a, b.done = true
// a done
```

从上面的执行过程中，我们可以看到，在 CommonJS 规范中，当遇到 require() 语句时，会执行 require 模块中的代码，并缓存执行的结果，当下次再次加载时不会重复执行，而是直接取缓存的结果。正因为此，出现循环依赖时才不会出现无限循环调用的情况。虽然这种模块加载机制可以避免出现循环依赖时报错的情况，但稍不注意就很可能使得代码并不是像我们想象的那样去执行。因此在写代码时还是需要仔细的规划，以保证循环模块的依赖能正确工作。