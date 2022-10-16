// _.zip() - массив массивов

const _ = require('lodash');

let colors = ['red', 'green', 'yellow', 'orange', 'black', 'white'];
let hex_names = ['#FF0000', '#008000', '#FFFF00', '#FFA500']; // undefined undefined

function _sort() {
    let arr = _
        .zip(colors, hex_names)
        .sort((a, b) => a[0] > b[0]? 1: -1);
    console.log(arr);
}

function _order() {
    let arr = _(colors)
        .zip(hex_names)
        .orderBy([0], ['asc']) // можно по индексам
        .value();
    console.log(arr);
}

function _order_2() {
    let arr = _(colors)
        .zip(hex_names)
        .orderBy([1, 0], ['desc','asc'])
        .value();
    console.log(arr);
}

function _order_3() {
    let arr = _(colors)
        .zip(hex_names)
        .filter(x => typeof x[1] != "undefined")
        .map(x => [x[1], x[0]]) // поменять местами
        .orderBy([0], ['asc'])
        .value();
    console.table(arr);
}

function _order_4() {
    let arr = _(colors)
        .zip(hex_names)
        .filter(x => !!x[1]) // двойное отрицание вернёт true/false
        .value();

    console.table(arr);
    console.log(arr);
    not_not(); // проверим двойное отрицание
}

function not_not() { // двойное отрицание => из числа в bool
    let x, y = 222;
    console.log(x, y); // undefined 222
    console.log(!x, !y); // true false
    console.log(!!x, !!y); // false true
    let r = +'500';
    console.log(r+r);
}

console.clear();
// _sort();
// _order();
// _order_2();
// _order_3();
_order_4();
