// dinamic algorithm

const get_dinamic = (max_w, arr) => {    
    let n = arr.length, tab = []

    for (let row=0; row<=max_w; row++) { // формируем таблицу
        tr = [...Array(n).keys()]
            .map(_ => { return {'w':0,'p':0} })
        tab.push(tr) // одна строка в таблице
    }

    let col = 0 // формируем левый столбец
    for (let row=0; row<=max_w; row++) {
        if (row >= arr[col]['w'])
            tab[row][col] = {'w':arr[col]['w'], 'p':arr[col]['p']}
    }

    for (let row of tab) {
        console.log(row)
    }
    // return combs
}


let prods = require('./json/input4.json')

prods
    .map(obj => { obj.id=+obj.id, obj.w=+obj.w, obj.p=+obj.p })
prods
    .sort((a,b) => a.w > b.w? +1: -1)

console.clear()
console.log('dinamic algorithm')
let max_w = 100
let solver = get_dinamic(max_w, prods)

console.log(solver)
