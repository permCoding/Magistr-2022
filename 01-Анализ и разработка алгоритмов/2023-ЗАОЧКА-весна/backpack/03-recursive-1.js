// recursive algorithm
// тут просто пример рекурсивной функции
// 
const get_sum_even = (num) => {
    if (num == 0) {
        return 0
    }
    if (num%2 == 0) {
        return get_sum_even(num-1) + num
    }
    else {
        return get_sum_even(num-1)
    } 
}

console.clear()
console.log(get_sum_even(2))
