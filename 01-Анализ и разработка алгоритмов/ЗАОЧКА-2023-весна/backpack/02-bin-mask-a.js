// greedy algorithm

const get_bin_mask = (prods) => {
    let max_w = 1500
    let n = 1 << prods.length
    res_w = 0
    res_p = 0
    combo = 0
    for (let i = 0; i < n; i++) { // индекс комбинации
        cur_w = 0
        cur_p = 0
        for (let j = 0; j < prods.length; j++) {
            let mask = 1 << j
            if (i & mask) {
                cur_w += prods[j].w
                cur_p += prods[j].p
            }
        }
        if ((cur_w <= max_w) && (cur_p > res_p)) {
            res_w = cur_w
            res_p = cur_p
            combo = i
        }
    }
    return {
        'res_w': res_w,
        'res_p': res_p,
        'combo': combo.toString(2).split('').reverse().join('')
    }
}


let prods = require('./json/input6.json')

prods.map(obj => { obj.id=+obj.id, obj.w=+obj.w, obj.p=+obj.p })

console.clear()

console.table(prods)

let solver = get_bin_mask(prods)

console.log(solver)
