const ex_01 = (url) => {
    fetch(url, { method: "GET" }) // default GET
        .then(res => res.text())
        .then(data => {
            let lines = data.split("\n")
            // тут решение
            console.log(lines)
        })
        .catch(error => log(error.message))
}

const ex_02 = async () => {
    let response = await fetch(url)
    if (!response.ok) { log(response.status); return }
    let data = await response.text()
    let lines = data.split("\n")
    // тут решение
    console.log(lines)
}

url = "https://pcoding.ru/txt/labrab04-1.txt"
ex_02(url)
