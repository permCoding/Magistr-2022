const log = console.log
const _ = require('lodash')

const get_json = async (url) => {
    let response = await fetch(url)
    if (!response.ok) { log(response.status); return }
    return await response.json()
}

url1 = "http://files-pcoding.1gb.ru/json?filename=wb_laptops_popular.json"
url2 = "http://files-pcoding.1gb.ru/json?filename=wb_laptops_pricedown.json"

const solver = async () => {
    let json1 = await get_json(url1)
    let json2 = await get_json(url2)
    json1 = json1.map(obj => _.pick(obj, ['id']))
    json2 = json2.map(obj => _.pick(obj, ['id']))
    log(json1.length, json2.length)
    log(json1[0], json2[0])

    let res = get_intersection(json1, json2)
    log(res.length)
    log(JSON.stringify(res, null, 4))
} // результат за 6 сек => в 2 раза медленнее, чем с распараллеливанием Promise.all

const get_intersection = (a, b) => {
    return a.filter(x => _.findIndex(b, (y) => x.id == y.id) > -1)
}

solver()

/*
- http://files-pcoding.1gb.ru/json?filename=wb_laptops_popular.json  
- http://files-pcoding.1gb.ru/json?filename=wb_laptops_pricedown.json  

Это списки ноутбуков с WB (ноябрь 2023), отсортированные по убыванию популярности и цены.  

- можно ознакомиться со структурой объектов, то можно вывести не весь массив, а ограниченное количество (добавив параметр **limit**), например, так:  
- http://files-pcoding.1gb.ru/json?filename=wb_laptops_popular.json&limit=1  

**Задание:**  

1. получить данные из одного url-адреса  
2. получить данные из второго url-адреса  
3. выявить список товаров, которые есть **в обоих списках**  
4. сформировать массив объектов, в который попадут только выбранные товары  
5. сохранить массив объектов в выходной json-файл  

*/