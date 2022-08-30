console.time("time")

let i = 102345678
while (true) {
    if (i % 11 === 0) {
        break
    }
    i++
}

let lst_a = i
let count = 1
let lst_b
for (let j = i; j <= 987654321; j+11) {
    if ((new Set(String(j).split("")).size) == 9) {
        count++
        lst_b = j
    }
}

console.log("len(lst) =", count)
console.log(lst_a, lst_b)

console.timeEnd("time")
