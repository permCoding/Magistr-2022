// recursive algorithm

const get_recursive = (arr) => {
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

    console.log(combs.sort((a,b) => a.length-b.length))
}


let prods = require('./json/input4.json')

prods.map(obj => { obj.id=+obj.id, obj.w=+obj.w, obj.p=+obj.p })

console.clear()
console.log('all cominations')
let solver = get_recursive(prods)

// console.log(solver)
