let get = function(n) {
    let res = 0, p = 1
    while (n > 0) {
        res = (n % 6) * p  + res
        n = Math.floor(n/6)
        p *= 10
    }
    return res.toString()
}

String.prototype.count = function(smb) {
    let re = new RegExp(smb, 'g')
    return (this.match(re) || []).length
}

console.clear()

let width = 10
let amount = Math.pow(6, width)
console.log(amount)
console.log(Math.pow(5/6, width))

let arr = Array(width+1).fill(0) // [0, 1, 2, .. width]
for (let i = 0; i < amount; i++) {
    res = get(i)
    count = res.count('5') // '1055' => 2
    arr[count] += 1
}

arr
    .map(elm => elm/amount)
    .forEach((elm, i) => console.log(`${i}\t${elm}`))

// queue || recursia || bin mask ||

console.log(0.1 + 0.2) 
// 1/2 + 1/4 + 1/8
