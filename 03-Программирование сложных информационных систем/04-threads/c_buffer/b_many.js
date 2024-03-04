const { Worker } = require('worker_threads')
const shared_array = new SharedArrayBuffer(160) // в байтах
const buffer = new Uint32Array(shared_array)
buffer.fill(0)

const run_thread = ({start, count}) => {
    return new Promise((resolve, reject) => {
        let begin = Date.now()
        const worker = new Worker('./worker.js', { 
            workerData: { shared_array, start, count }
        })
        worker.on('message', () => {
            console.log(`${Date.now()-begin} ms`)
            resolve()
        })
        // worker.on('message', resolve)
        worker.on('error', reject)
    })
}

const main = async () => {
    let begin = Date.now()
    let count = 4
    await Promise.all( // будет ждать пока закончится последний
        [
            run_thread({'start':0, count}),
            run_thread({'start':1, count}),
            run_thread({'start':2, count}),
            run_thread({'start':3, count}),
        ]
    )
    console.log(`all time = ${Date.now()-begin} ms`)
    console.log(buffer)
}

console.clear()
console.log('many threads')
console.log(buffer)

main().catch(console.error)
