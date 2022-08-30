console.time("time")

let lst = []

i = 102345678
while (lst.length === 0) {
    if ((new Set(String(i).split(""))).size === 9) {
        if (i % 11 === 0) {
            lst.push(i)
            break    
        }
    }
    i += 1
}

while (i <= 987654321) {
    i += 11
    if ((new Set(String(i).split(""))).size == 9) 
        lst.push(i)
}


console.log("len(lst) =", lst.length)
console.log(lst[0], lst[lst.length-1])

console.timeEnd("time")
