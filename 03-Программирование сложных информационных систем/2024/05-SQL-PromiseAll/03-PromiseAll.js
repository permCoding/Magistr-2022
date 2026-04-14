const log = console.log
const _ = require('lodash')

const get_intersection = (a, b) => {
    return a.filter(x => _.findIndex(b, (y) => x.id == y.id) > -1)
}

const get_json = async (url) => {
    let response = await fetch(url)
    return await response.json()
}

url1 = "http://files-pcoding.1gb.ru/json?filename=wb_laptops_popular.json"
url2 = "http://files-pcoding.1gb.ru/json?filename=wb_laptops_pricedown.json"

Promise
    .all([get_json(url1), get_json(url2)])
    .then(results => {
        json1 = results[0].map(obj => _.pick(obj, ['id']))
        json2 = results[1].map(obj => _.pick(obj, ['id']))
        let res = get_intersection(json1, json2)
        log(res.length)
        log(JSON.stringify(res, null, 4))
    }) // результат за 3 сек => в 2 раза быстрее
