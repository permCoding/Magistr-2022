const request = require('request') // npm i request

const get_lines_from_url = async (url) => {
    let arr = []
    await request.get(url, (error, response, data) => {
        if (!error && response.statusCode == 200) {
            arr = data.split("\n")
            // тут решение
            console.log(arr)
        }
    })
    return arr
}

url = "https://pcoding.ru/txt/labrab04-1.txt"
lines = get_lines_from_url(url)
