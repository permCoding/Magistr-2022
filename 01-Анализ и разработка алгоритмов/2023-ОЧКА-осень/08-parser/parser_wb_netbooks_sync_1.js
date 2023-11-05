let brands = []

const get_data_page = async (num) => {
    let url = `https://search.wb.ru/exactmatch/ru/common/v4/search?TestGroup=no_test&TestID=no_test&appType=1&curr=rub&dest=12358373&page=${num}&query=ytn%2Cer&resultset=catalog&sort=popular&spp=29&suppressSpellcheck=false&uclusters=1`
    let response = await fetch(url, {"method": "GET"})
    if (!response.ok) { log(response.status); return }
    let json = await response.json()
    brands = [...brands, ...json.data.products.map(elm => elm.brand)]
}

for (let num = 1; num < 5; num++) {
    get_data_page(num)
}

setTimeout(() => console.log(brands), 5000)
