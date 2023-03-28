// greedy algorithm

let prods = require('./json/input6.json')

prods.map(obj => { obj.id = +obj.id, obj.w = +obj.w, obj.p = +obj.p })

console.clear()

console.table(prods)

prods.sort((a,b) => a.p/a.w > b.p/b.w? +1: -1)

console.table(prods)
