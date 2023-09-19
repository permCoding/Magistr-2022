// recursive algorithm
// тут просто пример рекурсивной функции
// 
const get_base = (dec, base) => {
    if (dec < base) {
        return dec.toString()
    }
    else {
        return get_base(Math.floor(dec/base), base) + (dec%base).toString()
    }
}

console.clear()
let dec = 19
console.log(get_base(dec, 2))
