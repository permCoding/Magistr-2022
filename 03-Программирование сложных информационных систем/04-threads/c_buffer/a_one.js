const { Worker } = require('worker_threads')
const shared_array = new SharedArrayBuffer(160) // в байтах
const buffer = new Uint32Array(shared_array)
buffer.fill(0)
console.log(buffer)

let begin = Date.now()
// let start = 3, count = 4
let start = 0, count = 1 // заполним все
const worker = new Worker('./worker.js', {
    workerData: { shared_array, start, count }
})

worker.on('message', () => { 
    console.log(`all time = ${Date.now()-begin} ms`)
    console.log(buffer) }
)
