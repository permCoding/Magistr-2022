let count = 10

let x = 100 + --count // сначала изменяется count

count = 10
let y = 100 + count-- // сначала используется в выражении

console.log(x, y, count)
