## 静态编译a.js和b.js

```js
// a.js
// export的变量先被声明
export const bar；
// import被提前
import {foo} from './b';
console.log('a starting')
console.log('in b, foo:', foo);
// 赋值还是再以前的位置
bar = 2;
console.log('a done');

// b.js
// export的变量先被声明
export const foo；
// import被提前
import {bar} from './a';
console.log('b starting');
// 在以前的位置执行赋值
foo = 'foo';
console.log('in a, bar:', bar);
setTimeout(() => {
  console.log('in a, setTimeout bar:', bar);
})
console.log('b done');
```

## 执行a模块 过程详解

| 步骤 | a.js                                                                                       | b.js                                                                    | 说明                                                                                                                            |
|------|--------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| 1    | export const bar； import {foo} from './b';                                                |                                                                         | 暴露接口bar(undefined) 进入b.js                                                                                                 |
| 2    |                                                                                            | export const foo; import {bar} from './a';                              | 暴露接口foo(undefined) 准备进入a.js，但是不能重复执行a.js 所以接收到接口(bar)之后就跳过a.js， 执行b.js下面的。                  |
| 3    |                                                                                            | console.log('b starting'); foo = 'foo'; console.log('in a, bar:', bar); | // b starting // in a, bar: undefined                                                                                           |
| 4    |                                                                                            | setTimeout(() => { console.log('in a, setTimeout bar:', bar); })        | 这个先延迟，不执行                                                                                                              |
| 5    |                                                                                            | console.log('b done');                                                  | // b done                                                                                                                       |
| 6    | console.log('astarting')； console.log('in b, foo:', foo); bar = 2; console.log('a done'); |                                                                         | import {foo} from './b'执行完毕，接收到到接口是foo = 'foo';所以输出结果是： // a starting // in b, foo: foo // a done           |
| 7    |                                                                                            | setTimeout(() => {console.log('in a, setTimeout bar:', bar);})          | 回来再执行这句。 刚才a模块的bar被赋值为2。 由于es6输出的值是动态引用，和模块内动态绑定。所以结果是： // in a, setTimeout bar: 2 |

## 结果
```
// babel-node a.js
// 执行结果：
// b starting
// in a, bar: undefined
// b done
// a starting
// in b, foo: foo
// a done
// in a, setTimeout bar: 2
```