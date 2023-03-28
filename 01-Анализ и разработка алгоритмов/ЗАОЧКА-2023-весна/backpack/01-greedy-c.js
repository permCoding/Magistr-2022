// greedy algorithm

const get_greedy = (prods) => {
    let max_w = 1500
    let cur_w = 0
    let cur_p = 0
    let i = 0
    while (true) {
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
prods
    .map(obj => { obj.id = +obj.id, obj.w = +obj.w, obj.p = +obj.p })
prods
    .sort((a,b) => a.p/a.w > b.p/b.w? +1: -1)

console.clear()
console.table(prods)

let solver = get_greedy(prods)

console.log(solver)
