// SELECT выбрать всех студентов из группы ПИнб-2

const ut = require('./ut05');
const _ = require('lodash');


function select1(arr_s, arr_g, group) {
    let idGr = _.find(arr_g, obj => obj.nameGr === group).id;
    return _.filter(arr_s, obj => obj.idGr === idGr);
}

function select2(arr_s, arr_g, group) {
    let idGr = _(arr_g).find(obj => obj.nameGr === group).id;
    return _(arr_s).filter(obj => obj.idGr === idGr).value();
}


console.clear();

let students = ut.csv_to_json('./csv/students.csv');
let groups = ut.csv_to_json('./csv/groups.csv');

console.table(select1(students, groups, 'ПИнб-2'));
console.table(select2(students, groups, 'ПИнб-2'));
