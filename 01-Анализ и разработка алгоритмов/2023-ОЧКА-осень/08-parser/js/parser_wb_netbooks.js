const processData = (arr) => {
    arr.forEach(element => {
        console.log(element.brand)
    });
}

for (let num = 1; num < 5; num++) {
    let url = `https://search.wb.ru/exactmatch/ru/common/v4/search?TestGroup=no_test&TestID=no_test&appType=1&curr=rub&dest=12358373&page=${num}&query=ytn%2Cer&resultset=catalog&sort=popular&spp=29&suppressSpellcheck=false&uclusters=1`

    fetch(url, {"method": "GET"})
        .then(res => res.json())
        .then(json => processData(json.data.products))
        .catch(error => log(error.message))
}
