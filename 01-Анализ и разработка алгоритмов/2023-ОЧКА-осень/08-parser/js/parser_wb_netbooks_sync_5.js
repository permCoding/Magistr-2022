const request = require('sync-request') // npm i sync-request
// https://github.com/ForbesLindesay/sync-request
const log = console.log

const get_json_from_url = (url) => {
    let data = request("GET", url).getBody("utf8")
    return JSON.parse(data)
}

const ex_03 = (num) => {
    let url = `https://search.wb.ru/exactmatch/ru/common/v4/search?TestGroup=no_test&TestID=no_test&appType=1&curr=rub&dest=12358373&page=${num}&query=ytn%2Cer&resultset=catalog&sort=popular&spp=29&suppressSpellcheck=false&uclusters=1`
    let json = get_json_from_url(url)
    arr = json.data.products.map(elm => elm.brand)
    return arr
}

const solver = () => {
    let count = 2
    let arr = []
    for (let num=1; num<=count; num++) {
        arr = [...arr, ...ex_03(num)]
    }
    arr = arr
        .filter(x => x != '')
        .sort((a,b) => a>b? +1: -1)
    log(arr.length)
    log(arr.slice(0,5))
    log(arr.slice(arr.length-5,arr.length))
}

solver()
