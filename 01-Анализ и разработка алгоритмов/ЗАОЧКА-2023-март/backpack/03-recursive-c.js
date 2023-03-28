// recursive algorithm

const get_recursive = (max_w, arr) => {
    const get_combo = (combo, deep) => {
        if (deep === n) {
            combs.push(combo.slice())
        }
        else {
            combo.push(arr[deep])
            get_combo(combo, deep+1)
            combo.pop()
            get_combo(combo, deep+1)
        }
    }
    
    let n = arr.length, combs = []
    get_combo([], 0)

    return combs
        .map(combo => { 
            return {
                'cur_w': combo.reduce((acc, cur) => acc+cur.w, 0),
                'cur_p': combo.reduce((acc, cur) => acc+cur.p, 0),
                'combo': combo
            }})
        .filter(e => e.cur_w <= max_w)
        .sort((a,b) => a.cur_p > b.cur_p? -1: +1)[0]
}


let prods = require('./json/input6.json')

prods.map(obj => { obj.id=+obj.id, obj.w=+obj.w, obj.p=+obj.p })

console.clear()
console.log('recursive algorithm')
let max_w = 1500
let solver = get_recursive(max_w, prods)

console.log(solver)
