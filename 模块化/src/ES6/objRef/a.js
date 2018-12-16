import {foo} from './b.js'
console.log(foo)
setTimeout(() => {
    console.log(foo)
},1000)