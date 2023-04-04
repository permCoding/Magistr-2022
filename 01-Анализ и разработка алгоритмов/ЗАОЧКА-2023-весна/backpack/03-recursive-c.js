// recursive algorithm
// ассимптотика сложности этого алгоритма
// n/2 * 2^n
const get_recursive = (max_w, arr) => {
    const get_combs = (combo, deep) => {
        if (deep === arr.length) {
            combs.push(combo.slice())
        }
        else {
            combo.push(arr[deep])
            get_combs(combo, deep+1)
            combo.pop()
            get_combs(combo, deep+1)
        }
    }
    
    let combs = []
    get_combs([], 0)
    let filtred = combs
        .map(combo => { 
            return {
                'cur_w': combo.reduce((acc, cur) => acc+cur.w, 0),
                'cur_p': combo.reduce((acc, cur) => acc+cur.p, 0),
                'combo': combo
            }})
        .filter(e => e.cur_w <= max_w) // e = {cur_w, cur_p, combo}
    let max_combo = filtred
        // .reduce((acc,cur) => acc.cur_p>cur.cur_p? acc: cur, filtred[0])
        .sort((a,b) => a.cur_p > b.cur_p? -1: +1)[0]
    return max_combo
}


let prods = require('./json/input20.json')
let max_w = 100

prods
    .map(obj => { obj.id=+obj.id, obj.w=+obj.w, obj.p=+obj.p })

console.clear()
console.log('recursive algorithm')

let solver = get_recursive(max_w, prods)

console.log(solver)
