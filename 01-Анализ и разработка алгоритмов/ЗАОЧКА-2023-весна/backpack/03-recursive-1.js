// recursive algorithm
// тут просто пример рекурсивной функции
// 
const get_arr = (up) => {
    if (up == 0) {
        //
    }
    else {
        arr.push(up)
        get_arr(--up)
    }
}

console.clear()
let arr = [], up = 10
get_arr(up)
console.log(arr)
