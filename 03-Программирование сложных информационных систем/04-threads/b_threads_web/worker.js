const { workerData, parentPort } = require('worker_threads')

const fib = (n) => {
    return n<2? n: fib(n-1)+fib(n-2)
}

let result = fib(workerData.n)

parentPort.postMessage(result)
