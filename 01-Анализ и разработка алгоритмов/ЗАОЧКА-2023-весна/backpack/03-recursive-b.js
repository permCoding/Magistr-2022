// recursive algorithm
// ассимптотика сложности этого алгоритма
// n/2 * 2^n
const get_recursive = (arr) => {
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
    return combs
}


let prods = require('./json/input6.json')

prods.map(obj => 
    { 
        obj.id=+obj.id, 
        obj.w=+obj.w, 
        obj.p=+obj.p 
    }
)

console.clear()
console.log('all cominations')
let combs = get_recursive(prods)
combs
    .sort((a,b) => a.length-b.length)
    .forEach(e => console.log(e))
