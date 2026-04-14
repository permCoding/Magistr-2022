const fib = (n) => {
    return n<2? n: fib(n-1)+fib(n-2)
}

console.clear()
console.log('fib one thread')
let n = 38
let start = Date.now()
let result = fib(n)
let finish = Date.now()
console.log(`${result}\ttime = ${finish-start} ms`)
