// Кубик бросили 10 раз. Какое наиболее вероятное кол-во раз выпадет 6-ка?


let n = 4
let arr = new Array(n+1).fill(0)
for (let i=0; i<100000; i++) {
    lst = new Array(n).fill(0).map(x => Math.floor((1 + Math.random() * 6)))
    pos = lst.filter(x => x==6).length
    arr[pos] += 1

}
console.log(arr)

/*
 5 * 5 * 5 * 5      = 625
(1 * 5 * 5 * 5) * 4 = 500
(1 * 1 * 5 * 5) * 6 = 150
(1 * 1 * 1 * 5) * 4 = 20
(1 * 1 * 1 * 1) * 1 = 1
*/
