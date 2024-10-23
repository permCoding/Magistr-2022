function fibonaci_for(n) {
    if (n < 2) return n
    let fib = [0, 1]
    for (let i=1; i<n; i++) fib = [fib[1], fib[0]+fib[1]]
    return fib[1]
}

// let n = Number(require('fs').readFileSync(0, 'utf8').split('\n')[0])
let n = 72;
console.log(fibonaci_for(n))

// 9007199254740991 - это макси доп целое для js
// 2**53-1
// 23416728348467684
