const fib = (n) => {
    return n<2? n: fib(n-1)+fib(n-2)
}

const get_result = (n) => new Promise((resolve) => {
    let start = Date.now()
    let result = fib(n)
    let finish = Date.now()
    console.log(`${result}\tone time = ${finish-start} ms`)
    resolve(result)
})

console.clear()
console.log('many fib one thread')

const main = async () => {
    let start = Date.now()
    let n = 38
    let results = await Promise.all(
        [
            get_result(n),
            get_result(n),
            get_result(n),
            get_result(n),
            get_result(n)
        ]
    )
    let finish = Date.now()
    console.log(results)
    console.log(`all time = ${finish-start} ms`)
}
main().catch(console.error)
