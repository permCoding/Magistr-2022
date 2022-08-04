console.time("time")

let lst = []
for (let i = 102345678; i <= 987654321; i++) {
    if (i % 11 === 0) 
        lst.push(i)
}

console.log("len(lst) =", lst.length)
console.log(lst[0], lst[lst.length-1])

console.timeEnd("time")
