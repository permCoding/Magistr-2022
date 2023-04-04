// recursive algorithm
// ассимптотика сложности этого алгоритма
// n/2 * 2^n
const get_combs = (combo, deep) => {
    if (deep === arr.length) {
        // combs.push(combo) // ref
        combs.push(combo.slice())
        // combs.push([...combo])
    }
    else {
        combo.push(arr[deep])
        get_combs(combo, deep+1)
        combo.pop()
        get_combs(combo, deep+1)
    }
}

let arr = [1, 2, 3, 4]
let combs = []
get_combs([], 0)
combs
    .sort((a,b) => a.length-b.length)
    .forEach(e => console.log(e))
