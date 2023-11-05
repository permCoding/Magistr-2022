const log = console.log

const ex_01 = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(json => {
            arr = json.data.products.map(elm => elm.brand)
            console.log(arr)
        })
        .catch(error => log(error.message))
}

const ex_02 = async () => {
    let response = await fetch(url)
    if (!response.ok) { log(response.status); return }
    let json = await response.json()
    arr = json.data.products.map(elm => elm.brand)
    console.log(arr)
}

let num = 1
let url = `https://search.wb.ru/exactmatch/ru/common/v4/search?TestGroup=no_test&TestID=no_test&appType=1&curr=rub&dest=12358373&page=${num}&query=ytn%2Cer&resultset=catalog&sort=popular&spp=29&suppressSpellcheck=false&uclusters=1`
ex_02(url, num)
