// recursive algorithm

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

let arr = [1, 2, 3, 4]
let n = arr.length, combs = []
get_combo([], 0)
console.log(
    combs.sort((a,b) => a.length-b.length)
)
