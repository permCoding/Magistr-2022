// greedy algorithm

const get_greedy = (max_w, prods) => {
    let cur_w = 0, cur_p = 0
    let i = prods.length // по какой индекс набрали предметов
    // тут код жадного алгоритма
    // отсортировать
    //
    //
    //
    //
    //
    return {
        'cur_w': cur_w,
        'cur_p': cur_p,
        'items': prods.slice(0, i)
    }
}


let prods = require('./json/input30.json')
let max_w = 150

// преобразовать типы данных в обектах

console.clear()
console.log('greedy algorithm')
console.table(prods)

let solver = get_greedy(max_w, prods)
console.log(solver)
