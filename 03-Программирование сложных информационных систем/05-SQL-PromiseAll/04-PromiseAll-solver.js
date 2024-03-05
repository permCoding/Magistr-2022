const log = console.log
const _ = require('lodash')

const get_intersection = (arr) => {
    return arr[0].filter(x => _.findIndex(arr[1], (y) => x.id == y.id) > -1)
}

const get_json = async (url) => (await fetch(url)).json()

const solver = async (urls) => {
    let tasks = urls.map(url => get_json(url))
    let arr = await Promise.all(tasks)
        .then(results => get_intersection(results))
    log(JSON.stringify(arr, ['id','name','salePriceU'], 4))
}

let urls = [
    "http://files-pcoding.1gb.ru/json?filename=wb_laptops_popular.json",
    "http://files-pcoding.1gb.ru/json?filename=wb_laptops_pricedown.json"
]

solver(urls)
