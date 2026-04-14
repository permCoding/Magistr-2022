const { Worker } = require('worker_threads')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    let feeds = require('./feeds.json')
    res.status(200).json(feeds)
})

app.get('/sorted', (req, res) => {
    let feeds = require('./feeds.json')
    feeds.sort((a,b) => a.name>b.name? +1: -1)
    res.status(200).json(feeds)
})

app.get('/calc_a', (req, res) => {
    let { fib } = require('./module')
    let n = 42
    let result = fib(n)
    res.status(200).json({
        'n': n,
        'result': result
    })
})

app.get('/calc_b', (req, res) => {
    let n = 42
    let workerData = { 'n': n }
    const worker = new Worker('./worker.js', { workerData })
    worker.on('message', (result) => {
        res.status(200).json({
            'n': n,
            'result': result
        })
    })
})

app.get('/calc_c', (req, res) => {
    let { fib } = require('./module')
    let n = 40
    let results = 
        [
            fib(n),
            fib(n),
            fib(n),
            fib(n),
            fib(n)
        ]    
    res.status(200).json({'results': results})
})

app.get('/calc_d', (req, res) => {
    const run_thread = (n) => {
        return new Promise((resolve, reject) => {
            let workerData = { 'n': n }
            const worker = new Worker('./worker.js', { workerData })
            worker.on('message', resolve)
            worker.on('error', reject)
        })
    }
    const main = async (n) => {
        const results = await Promise.all(
            [
                run_thread(n), run_thread(n),
                run_thread(n), run_thread(n),
            ]
        )
        res.status(200)
        res.write(JSON.stringify({'results':results}))
        res.send()
    }

    let n = 42
    main(n).catch(console.error)
})

app.listen(3000, () => console.log(`http://localhost:${3000}/`));
