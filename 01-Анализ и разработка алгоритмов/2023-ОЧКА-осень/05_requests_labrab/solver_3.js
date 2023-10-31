const request = require('sync-request') // npm i sync-request
// https://github.com/ForbesLindesay/sync-request

const get_lines_from_url = (url) => {
    let data = request("GET", url).getBody("utf8")
    return data.split("\n")
}

url = "https://pcoding.ru/txt/labrab04-1.txt"
lines = get_lines_from_url(url)
// тут решение
console.log(lines)
