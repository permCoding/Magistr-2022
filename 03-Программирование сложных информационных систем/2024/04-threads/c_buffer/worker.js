const { workerData, parentPort } = require('worker_threads')

const buffer = new Uint32Array(workerData.shared_array)

const fib = n => n<2? n: fib(n-1)+fib(n-2)

let start = workerData.start
let count = workerData.count
let len = buffer.length

for (let i=start; i<len; i+=count) {
    buffer[i] = fib(i)
}

parentPort.postMessage('done')
