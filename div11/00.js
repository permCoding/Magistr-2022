console.time("time")

count = 400000

let lst = []
for (let i = 102345678; i <= 987654321; i++) {
    if ((new Set(String(i).split("")).size) == 9) {
        if (i % 11 === 0) {
            lst.push(i)
            if (lst.length === count)
                break    
        }
    }
}

console.log("count =", count)
console.log("len(lst) =", lst.length)
console.log(lst[0], lst[lst.length-1])

console.timeEnd("time")

console.log("- далее просто первый и последний -")

for (let i = 102345678; i <= 987654321; i++) {
    if ((new Set(String(i).split("")).size) == 9) {
        if (i % 11 === 0) {
            console.log(i)
            break
        }
    }
}

for (let i = 987654321; i >= 102345678; i--) {
    if ((new Set(String(i).split("")).size) == 9) {
        if (i % 11 === 0) {
            console.log(i)
            break
        }
    }
}
