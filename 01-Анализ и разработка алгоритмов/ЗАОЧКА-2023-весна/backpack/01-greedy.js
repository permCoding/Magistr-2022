// greedy algorithm
// ассимптотика сложности этого алгоритма
// n * log(n) + n
const get_greedy = (max_w, prods) => {
    let cur_w = 0, cur_p = 0
    let i = 0 // по какой индекс набрали предметов
    
    // отсортировать по убыванию
    prods
        .sort((a,b) => a.p/a.w > b.p/b.w? -1: +1)
    while (true) { // ЗАДАНИЕ 1 - перенести условие выхода из цикла в шапку
        if (cur_w + prods[i].w > max_w) break
        cur_w += prods[i].w
        cur_p += prods[i].p
        i += 1
    }

    return {
        'cur_w': cur_w,
        'cur_p': cur_p,
        'items': prods.slice(0, i)
    }
}


let prods = require('./json/input6.json')
let max_w = 1500

// преобразовать типы данных в обектах
prods
    .map(item => { 
        item.id = +item.id,
        item.w = +item.w,
        item.p = +item.p
    })

console.clear()
console.log('greedy algorithm')
console.table(prods)

let solver = get_greedy(max_w, prods)
console.log(solver)
