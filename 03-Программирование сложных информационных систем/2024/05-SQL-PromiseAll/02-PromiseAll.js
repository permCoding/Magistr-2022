const log = console.log
const _ = require('lodash')

const get_json = async (url) => {
    let response = await fetch(url)
    return await response.json()
}

url1 = "http://files-pcoding.1gb.ru/json?filename=wb_laptops_popular.json"
url2 = "http://files-pcoding.1gb.ru/json?filename=wb_laptops_pricedown.json"

Promise
    .all([get_json(url1), get_json(url2)])
    .then((results) => results.length)
