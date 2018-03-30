// a.js
var b = require('./b');
console.log("0ms——我是a.js,我的foo="+b.foo+"我的foo()="+b.foo());
setTimeout(() => {
    console.log("1000ms——我是a.js,我的foo="+b.foo+"我的foo()="+b.foo());
    var b1 = require('./b')
    console.log("1000ms——我是a.js,当我再次require后,我的foo="+b.foo+"我的foo()="+b.foo()); 
}, 1000);
