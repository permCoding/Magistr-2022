// recursive algorithm
// тут просто пример рекурсивной функции
// 
const get_arr = (count) => {
    if (!count) {
        //
    }
    else {
        let num = Math.random()
        arr.push(num.toFixed(2))
        get_arr(--count)
    }
}

console.clear()
let arr = []
get_arr(10)
console.log(arr)
