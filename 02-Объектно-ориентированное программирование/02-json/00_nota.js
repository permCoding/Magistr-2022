/** 
 * два синтаксиса lodash - возвращает генератор или массив
 * npm install lodash || npm i lodash
 * documentation: https://lodash.com/docs/4.17.15
 */
const { filter } = require('lodash');
const _ = require('lodash');

/** нотация lodash - возвращает генератор */
function _nota_lo(line) {
    let res = _(line) // коллекцию в объект lodash
        .split(' ', 7) // взять первые 7
        .map(_.parseInt) // возвращает генератор
    console.log(res, _.isArray(res)? "массив":"генератор");
    // LodashWrapper - обёртка
    let arr = []; // можно из генератора в массив
    
    arr = [...res]; // способ 1
    console.log(arr);

    arr = [];
    res.forEach(item => arr.push(item)); // способ 2
    console.log(arr);
}

/** метод _.value() - приводит к массиву */
function _nota_va(line) {
    let res = _(line)
        .split(' ')
        .map(_.parseInt) // _.toNumber || x => +x
        .take(7) // взять первые 7
        .filter(x => x%2 === 1) // только нечётные
        .sortBy()
        .value(); // к типу данных массив
    console.log(res, _.isArray(res)? "массив":"генератор");
}

/** нотация как в Питоне - возвращает массив */
function _nota_js(line) {
    let res_py = 
        _.sortBy(
            _.filter(
                _.map(line.split(' '), Number),
                x => x & 1 > 0
            )
        );
    console.log(res_py, _.isArray(res_py)? "массив":"генератор");
    
    let res_js = _(line)
        .split(' ') // нотация как в js
        .map(Number)
        .filter(x => x & 1 > 0)
        .sortBy()
        .value();
    console.log(res_js, _.isArray(res_js)? "массив":"генератор");
}

console.clear();
let line = '3 2 8 9 10 1 4 2 12 1';
// _nota_lo(line);
// _nota_va(line);
_nota_js(line);
