// dinamic algorithm

const get_dinamic = (max_w, arr) => {
    arr.sort((a,b) => a.w > b.w? +1: -1) // это можно исправить дополнительным условием

    let n = arr.length, tab = []

    for (let row=0; row<=max_w; row++) { // формируем таблицу
        tab.push(new Array(n).fill({'w':0,'p':0})) // одна строка в таблице
    }

    let col = 0 // формируем левый столбец
    for (let row=0; row<=max_w; row++) {
        if (row >= arr[col]['w'])
            tab[row][col] = 
                {
                    'w': arr[col]['w'], 
                    'p': arr[col]['p']
                }
    }

    for (let row=0; row<=max_w; row++) { // заполняем таблицу
        for (let col=1; col<n; col++) {
            v1 = tab[row][col-1] // ячейка слева
            if (row-arr[col]['w']<0) { // если нет ячейки сверху
                tab[row][col] = v1
                continue
            }
            v2 = tab[row-arr[col]['w']][col-1] // ячейка сверху
            u1 = v2['w']+arr[col]['w'] <= row // новый вес подходит
            u2 = v2['p']+arr[col]['p'] > v1['p'] // новая ценность лучше
            if (u1 && u2) {
                tab[row][col] = 
                    {
                        'w': v2['w']+arr[col]['w'], 
                        'p': v2['p']+arr[col]['p']
                    }
            }
            else {
                tab[row][col] = v1 // инече берём слева
            }
        }
    }
    return tab[max_w][n-1]
}


let prods = require('./json/input4.json')
let max_w = 100

prods.map(obj => { obj.id=+obj.id, obj.w=+obj.w, obj.p=+obj.p })

console.clear()
console.log('dinamic algorithm')

let solver = get_dinamic(max_w, prods)

console.log(solver)
