// branches algorithm

const get_branches = (max_w, arr) => {
    const get_combo = (combo, deep) => {
        
        cur_w = combo.reduce((acc, cur) => acc+cur.w, 0)

        u1 = cur_w > max_w
        if (u1) return

        if (deep < arr.length) {
            cur_w_ = combo.slice(0,-1).reduce((acc, cur) => acc+cur.p, 0)
            cur_p_ = combo.slice(0,-1).reduce((acc, cur) => acc+cur.p, 0)
            rating = cur_p_ + (max_w-cur_w_) * arr[deep].p/arr[deep]
            u2 = rating < max_p
            if (u2) return
        }

        i += 1
        
        if (deep === arr.length) {
            cur_p = combo.reduce((acc, cur) => acc+cur.p, 0)
            if ((cur_w<=max_w) && (cur_p>=max_p)) {
                max_p = cur_p
            }
        }
        else {
            combo.push(arr[deep])
            get_combo(combo, deep+1)
            combo.pop()
            get_combo(combo, deep+1)
        }
    }
    i = 0
    let max_p = 0
    get_combo([], 0)
    console.log(i)
    return max_p
}


let prods = require('./json/input30.json')
let max_w = 150

prods.map(obj => { obj.id=+obj.id, obj.w=+obj.w, obj.p=+obj.p })
prods.sort((a,b) => a.p/a.w>b.p/b.w? -1: +1)
console.clear()
prods.forEach(obj => console.log(obj))
prods.push
console.log('branches algorithm')

let solver = get_branches(max_w, prods)

console.log(solver)

/*
branches algorithm
input30.json
max_w = 150
без ветвей и границ
steps = 2147483647
500
с методом ветвей и границ
steps = 403034
500
динамикой
steps = 4500

выводы про разные методы:

1) метод ветвей и границ даёт заметную выгоду для кол-ва предметов больше 20

2) пример для 30 предметов:
- бинарные маски: 1 трлн шагов
- рекурсия: 2 млрд шагов
- ветвей и границ: 400 тыс шагов
- динамика: 4,5 тыс шагов (только для целых значений)
- жадный: 30 шагов (реш приблизительное)

3) метод ветвей и границ подходит и для вещ значений  
   а динамика только для целых

4) жадный даёт приблизительное решение 
   но на 30-ти предметах расхождение от оптимального  
   всего 1%

*/