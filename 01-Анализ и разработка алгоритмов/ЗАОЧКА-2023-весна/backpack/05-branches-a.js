// branches algorithm

const get_branches = (max_w, arr) => {
    const get_combo = (combo, deep) => {

        cur_w = combo.reduce((acc, cur) => acc+cur.w, 0)

        u1 = cur_w > max_w
        if (u1) return

        // тут ещё можно добавить проверку на рейтинг этой ветви

        i += 1

        if (deep === arr.length) {
            cur_p = combo.reduce((acc, cur) => acc+cur.p, 0)
            if ((cur_w<=max_w) && (cur_p>=max_p)) {
                max_p = cur_p
            }
        }
        else {
            combo.push(arr[deep])
            get_combo(combo, deep+1)
            combo.pop()
            get_combo(combo, deep+1)
        }
    }
    i = 0
    let max_p = 0
    get_combo([], 0)
    console.log(i)
    return max_p
}


let prods = require('./json/input4.json')
let max_w = 100

prods.map(obj => { obj.id=+obj.id, obj.w=+obj.w, obj.p=+obj.p })
prods.sort((a,b) => a.p/a.w>b.p/b.w? -1: +1)
console.clear()
prods.forEach(obj => console.log(obj))
prods.push
console.log('branches algorithm')

let solver = get_branches(max_w, prods)

console.log(solver)
