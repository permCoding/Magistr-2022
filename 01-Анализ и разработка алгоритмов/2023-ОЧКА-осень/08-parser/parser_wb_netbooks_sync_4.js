const log = console.log

const ex_03 = async (num) => {
    let url = `https://search.wb.ru/exactmatch/ru/common/v4/search?TestGroup=no_test&TestID=no_test&appType=1&curr=rub&dest=12358373&page=${num}&query=ytn%2Cer&resultset=catalog&sort=popular&spp=29&suppressSpellcheck=false&uclusters=1`
    let response = await fetch(url)
    if (!response.ok) { log(response.status); return }
    let json = await response.json()
    arr = json.data.products.map(elm => elm.brand)
    return arr
}

const solver = async () => {
    let count = 3
    let arr = []
    for (let num=1; num<=count; num++) {
        arr = [...arr, ...await ex_03(num)]
    }
    // log(arr)
    log(arr.length)
}

solver()
