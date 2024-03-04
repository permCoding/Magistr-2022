const { Worker } = require('worker_threads')
const shared_array = new SharedArrayBuffer(160) // в байтах
const buffer = new Uint32Array(shared_array)
buffer.fill(0)
console.log(buffer)

let count = 4
let begin = Date.now()

let start = 3
const worker_a = new Worker('./worker.js', {
    workerData: { shared_array, start, count }
})
worker_a.on('message', () => { 
    console.log(`time_a = ${Date.now()-begin} ms`)
    console.log(buffer) }
)

start = 2
const worker_b = new Worker('./worker.js', {
    workerData: { shared_array, start, count }
})
worker_b.on('message', () => { 
    console.log(`time_b = ${Date.now()-begin} ms`)
    console.log(buffer) }
)

start = 1
const worker_с = new Worker('./worker.js', {
    workerData: { shared_array, start, count }
})
worker_с.on('message', () => { 
    console.log(`time_с = ${Date.now()-begin} ms`)
    console.log(buffer) }
)

start = 0
const worker_d = new Worker('./worker.js', {
    workerData: { shared_array, start, count }
})
worker_d.on('message', () => { 
    console.log(`time_с = ${Date.now()-begin} ms`)
    console.log(buffer) }
)
// мы не всегда можем знать заранее какой из процессов закончится последним
