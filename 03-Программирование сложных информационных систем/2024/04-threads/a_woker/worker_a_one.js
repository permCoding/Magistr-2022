const { Worker } = require('worker_threads')

const run_thread = (workerData) => {
    return new Promise((resolve, reject) => {
        let start = Date.now()
        const worker = new Worker('./worker.js', { workerData })
        worker.on('message', (data) => { 
            let finish = Date.now()
            console.log(finish-start)
            resolve(data)
        })
        // worker.on('message', resolve)
        worker.on('error', reject)
    })
}

const main = async () => {
    let start = Date.now()
    let n = 38
    const result = await run_thread({n})
    let finish = Date.now()
    console.log(`result = ${result}`)
    console.log(`all time = ${finish-start} ms`)
}

console.clear()
console.log('one thread')
main().catch(console.error)