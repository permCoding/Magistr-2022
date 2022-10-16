// _.zip() - как сделать массив объектов

const _ = require('lodash');

function get_arr_of_objs_1() {
    return _
        .sortBy(_
            .zip(colors, hex_names)
            .map(a => { return { clr: a[0], hex: a[1]} }),
                a => a.clr
        );
}

function get_arr_of_objs_2() {
    let get_obj = function (a) {
        return { clr: a[0], hex: a[1] };
    };
    return _
        .sortBy(_
            .zip(colors, hex_names)
            .map(get_obj),
                a => a.clr
        );
}

function get_arr_of_objs_3() {
    return _
        .sortBy(_
            .zip(colors, hex_names) // массив массивов
            .map(arr => _.zipObject(['clr', 'hex'], arr)),
                a => a.clr
        );
}

function get_arr_of_objs_3_() {
    return _(colors) // в такой нотации удобнее
        .zip(hex_names)
        .map(arr => _.zipObject(['clr', 'hex'], arr))
        .sortBy(a => a.clr)
        .value();
}

console.clear();
let colors = ['red','green','yellow','orange'];
let hex_names = ['#FF0000','#008000','#FFFF00','#FFA500'];
console.log(_.zip(colors, hex_names)); // был массив массивов

console.log(get_arr_of_objs_1()); // стал массив объектов
// console.log(get_arr_of_objs_2());
// console.log(get_arr_of_objs_3());
// console.log(get_arr_of_objs_3_());