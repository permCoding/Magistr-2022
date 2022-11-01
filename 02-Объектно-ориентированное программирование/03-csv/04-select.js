// SELECT age, name 
// FROM students 
// WHERE sex = true 
// ORDER BY age DESC, name ASC

const ut = require('./ut00');
const _ = require('lodash');


function select_1(array) {
    _.reverse(
        _.sortBy(
            _.filter(
                array, obj => obj.sex == true
            ), obj => obj.age
        )
    ).forEach((obj,ind) => console.log(ind, obj.age, obj.nameSt));
}

function select_2(array) {
    let filtred = _.filter(array, obj => obj.sex == true);
    let sorted = _.orderBy(filtred, ['age','nameSt'], ['desc','asc']);
    console.table(sorted);
}

function select_3(array) {
    _
        .orderBy(array, ['age','nameSt'], ['desc','asc'])
        .filter(obj => obj.sex == true)
        .map(obj => _.join([obj.age,obj.nameSt], '\t'))
        .forEach(line => console.log(line));
}

function select_4(array) {
    _(array)
        .filter(obj => obj.sex == true)
        .orderBy(['age','nameSt'], ['desc','asc'])
        .map(obj => _.join([obj.age,obj.nameSt], '\t'))
        .forEach(line => console.log(line));
}

function select_5(array) {
    _(array)
        .filter(obj => obj.sex == true)
        .map(obj => _.zipObject(['age','nameSt'],[obj.age,obj.nameSt]))
        .orderBy(['age','nameSt'], ['desc','asc'])
        .forEach(obj => console.log(obj));
}

function select_6(array) {
    return _(array)
        .filter(obj => obj.sex === true)
        .map(obj => _.zipObject(['age','nameSt'],[obj.age,obj.nameSt]))
        .orderBy(['age','nameSt'], ['desc','asc'])
        .value();
}

function select_7(array) {
    let filtred = _.filter(array, obj => obj.sex === true);
    let objs = _.map(filtred, obj => _.zipObject(['age','nameSt'],[obj.age,obj.nameSt]));
    let sorted = _.orderBy(objs, ['age','nameSt'], ['desc','asc']);
    return sorted;
}


console.log('\x1Bc');
let students = ut.csv_to_json('./csv/students.csv');

// select_1(students);
// select_2(students);
// select_3(students);
// select_4(students);
// select_5(students);

console.log(select_6(students));
// console.log(select_7(students));
