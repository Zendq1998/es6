import foo from './b.js'
console.log(foo)
foo.a = 2
console.log(foo)
foo.b = 3
console.log(foo)
// foo = {}
// Error:"foo" is read-only