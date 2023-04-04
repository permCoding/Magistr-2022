// bin mask algorithm
// ассимптотика сложности этого алгоритма
// n * 2^n
const get_bin_mask = (max_w, prods) => {
    let res_w = 0, res_p = 0
    let combo = 0 // тут будет индекс лучшей комбинации
    let n = 1 << prods.length
    for (let i=0; i<n; i++) { // индекс комбинации
        let cur_w = 0, cur_p = 0
        for (let j=0; j<prods.length; j++) { // индекс предмета
            mask = 1 << j
            if (i & mask) {
                cur_w += prods[j].w
                cur_p += prods[j].p
            }
        }
        if ((cur_w<=max_w) && (cur_p>res_p)) {
            res_w = cur_w
            res_p = cur_p
            combo = i
        }
    }

    return {
        'res_w': res_w,
        'res_p': res_p,
        'combo': combo.toString(2).split('').reverse().join('') // это доработать
    }    
    /* ЗАДАНИЕ 2 - привести к такому виду:
        combo: [
            { id: 3, w: 198, p: 100 },        
            { id: 1, w: 200, p: 40 },
            { id: 2, w: 314, p: 50 },         r
            { id: 4, w: 500, p: 60 }          в
        ]
    */
}


let prods = require('./json/input6.json')
let max_w = 1500

prods
    .map(item => {
        item.id = +item.id,
        item.w = +item.w,
        item.p = +item.p
    })

console.clear()
console.log('bin mask algorithm')
console.table(prods)

let solver = get_bin_mask(max_w, prods)
console.log(JSON.stringify(solver, null, 4))

/*
2 ^ 4 === 1 << 4
00001
00010
00100
01000
10000

i = 13
1101 <= j
0001 <= mask0
0010 <= mask1
0100 <= mask2
1000 <= mask3
*/