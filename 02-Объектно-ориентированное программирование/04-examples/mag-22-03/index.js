const _ = require('lodash'); // npm i lodash

const { sel_json } = require("./module");

const comp1 = function (a, b, field, reverse=false) {
    let rev = reverse? -1: +1;
    return a[field] > b[field]? +1 * rev: -1 * rev;
}

const comp2 = function (a, b) {
    if (a.age === b.age) {
        return a.name < b.name? +1: -1;
    }
    return a.age - b.age;
}

const comp3 = function (a, b) {
    if (a.gender === b.gender) {
        if (a.age === b.age) {
            return a.name < b.name? +1: -1;
        }
        return a.age - b.age;
    }
    return a.gender < b.gender? +1: -1;
}


console.clear();

let name_file = "./json/clients.json";
let arr = ["id", "age", "name", "gender"];

let objs = sel_json(name_file, arr);

let objs_sort = _
    .orderBy(objs, 
        ['gender', 'age', 'name'], 
        ['desc', 'asc', 'desc']);
console.table(objs);
console.table(objs_sort);

// objs.sort((a,b) => comp1(a,b,"age",true));
// objs.sort((a,b) => comp2(a,b));
objs.sort((a,b) => comp3(a,b));

console.table(objs);
