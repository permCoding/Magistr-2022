// branches algorithm

const get_branches = (max_w, arr) => {
    const get_combo = (combo, deep) => {

        cur_w = combo.reduce((acc, cur) => acc+cur.w, 0)
        if (cur_w > max_w) return

        // ЗАДАНИЕ 4
        // добавить проверку на рейтинг этой ветви
        // по относительной стоимости 

        if (deep === arr.length) {
            cur_p = combo.reduce((acc, cur) => acc+cur.p, 0)
            if ((cur_w<=max_w) && (cur_p>=max_p)) {
                max_p = cur_p
                // и запоминаем комбинацию и её вес
            }
        }
        else {
            combo.push(arr[deep])
            get_combo(combo, deep+1)
            combo.pop()
            get_combo(combo, deep+1)
        }
    }

    let max_p = 0
    get_combo([], 0)
    return max_p
    /* ЗАДАНИЕ 5 - привести return к такому виду:
        {
            cur_w: 1212,
            cur_p: 250,
            items: [
                { id: 3, w: 198, p: 100 },
                { id: 1, w: 200, p: 40 },
                { id: 2, w: 314, p: 50 },
                { id: 4, w: 500, p: 60 }
            ]
        }
    */
}


let prods = require('./json/input4.json')
let max_w = 100

prods.map(obj => { obj.id=+obj.id, obj.w=+obj.w, obj.p=+obj.p })

// prods.sort((a,b) => a.p/a.w>b.p/b.w? -1: +1)
// доработать самостоятельно - 2
// если убрать эту сортировку, то перестанет работать
// нужно добавить условие в методе get_branches
// когда для v1 и v2 ценность одинаковая, то выбрать
// меньшую по весу

console.clear()
// prods.forEach(obj => console.log(obj))

console.log('branches algorithm')

let solver = get_branches(max_w, prods)

console.log(solver)
