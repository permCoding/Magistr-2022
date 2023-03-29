// bin mask algorithm

const get_bin_mask = (max_w, prods) => {
    let res_w = 0, res_p = 0
    let combo = 0 // тут будет индекс лучшей комбинации
    // тут будет код алгоритма поиска бинарными масками
    //
    //
    //
    //
    //
    return {
        'res_w': res_w,
        'res_p': res_p,
        'combo': combo.toString(2).split('').reverse().join('')
    }
}


let prods = require('./json/input20.json')
let max_w = 100

// преобразовать типы данных в обектах

console.clear()
console.log('bin mask algorithm')
console.table(prods)

let solver = get_bin_mask(max_w, prods)
console.log(solver)
