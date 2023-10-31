const request = require('request') // npm i request

const get_lines_from_url = (url) => {
    return new Promise((resolve, reject) => {
        request.get(url, (error, response, data) => {
            if (error) reject(error)
            resolve(data.split("\n"))
        })
    })
}

const processData = async (url) => {
    lines = await get_lines_from_url(url)
    // тут решение
    console.log(lines)
}

url = "https://pcoding.ru/txt/labrab04-1.txt"
processData(url)