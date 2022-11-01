// DELETE
// проблема - исходный массив изменяется!
// либо читать заново, либо копировать...
// _.cloneDeep()

const ut = require('./ut00');
const _ = require('lodash');

let array = ut.csv_to_json('./csv/students.csv');

let students = _.cloneDeep(array);

let womens = _.remove(students, obj => obj.sex == false); // == так как 1/0

console.log('\x1Bc'); // очистить терминал
console.log(womens);
console.log(students);
console.log(array); // для контроля неизменяемости входа
