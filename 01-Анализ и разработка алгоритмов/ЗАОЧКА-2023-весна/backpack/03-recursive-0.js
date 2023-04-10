// recursive algorithm
// тут просто пример рекурсивной функции
// 
const get_bin = (dec) => {
    if (dec === 0) {
        return '0'
    }
    else {
        return get_bin(Math.floor(dec/2)) + (dec%2).toString()
    }
}

console.clear()
let dec = 19
console.log(get_bin(dec))
