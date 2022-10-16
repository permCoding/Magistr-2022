// поток функций

const _ = require('lodash');

const students = require('./json/student.json');


let arr1 = _.map( // сложно
    _.orderBy(
        _.filter(students, stud => stud.private.gender == 'male'),
        ['rate','private.age'],['desc','asc']),
    stud => _.zipObject(['rate','age','name'], [stud.rate,stud.private.age,stud.name])
);
console.table(arr1);


let arr2 = _(students) // проще
    .filter(stud => stud.private.gender == 'male')
    .orderBy(['rate','private.age'],['desc','asc'])
    .map(stud => _.zipObject(['rate','age','name'], [stud.rate,stud.private.age,stud.name]))
    .value();
console.table(arr2);


let get_arr = _.flow( // ещё проще - возвращает функцию с цепочкой функций
    items => _.filter(items, stud => stud.private.gender == 'male'),
    items => _.orderBy(items, ['rate','private.age'],['desc','asc']),
    items => _.map(items, stud => ({rate:stud.rate, age:stud.private.age, name:stud.name}))
);
console.table(get_arr(students));
