let url = "https://search.wb.ru/exactmatch/ru/common/v4/search?TestGroup=no_test&TestID=no_test&appType=1&curr=rub&dest=12358373&page=2&query=%D0%BF%D0%B0%D1%8F%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA&resultset=catalog&sort=popular&spp=29&suppressSpellcheck=false&uclusters=1"

let headers = {
    "accept": "*/*",
    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "x-userid": "107167966",
    "Referer": "https://www.wildberries.ru/catalog/0/search.aspx?page=2&sort=popular&search=%D0%BF%D0%B0%D1%8F%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA",
    "Referrer-Policy": "no-referrer-when-downgrade"
}

// fetch(url, {"headers": headers, "body": null, "method": "GET"})
//     .then(res => res.json())
//     .then(json => console.log(JSON.stringify(json, null, 2)))
//     .catch(error => log(error.message))

// fetch(url, {"method": "GET"})
//     .then(res => res.json())
//     .then(json => console.log(JSON.stringify(json.data.products[0], null, 2)))
//     .catch(error => log(error.message))

const processData = (arr) => {
    arr.forEach(element => {
        console.log(element.brand)
    });
}

fetch(url, {"method": "GET"})
    .then(res => res.json())
    .then(json => processData(json.data.products))
    .catch(error => log(error.message))
