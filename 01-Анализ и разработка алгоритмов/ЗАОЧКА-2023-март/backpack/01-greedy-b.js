// greedy algorithm

let prods = require('./json/input6.json')

const change_obj = (x) => {
    for (let key in x) { x[key] = +x[key] }
    return x
}

// prods.map(obj => obj = change_obj(obj))
prods.map(change_obj)

console.clear()

console.table(prods)

prods.sort((a,b) => a.p/a.w > b.p/b.w? +1: -1)

console.table(prods)
