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
    const result = await Promise.all(
        [
            run_thread({n}),
            run_thread({n}),
            run_thread({n}),
            run_thread({n}),
            run_thread({'n': n}),
            run_thread({n}),
            run_thread({n}),
            run_thread({n}),
            run_thread({n}),
            run_thread({'n': n}),
        ]
    )
    let finish = Date.now()
    console.log(`result = ${result}`)
    console.log(`all time = ${finish-start} ms`)
}

console.clear()
console.log('many threads')
main().catch(console.error)