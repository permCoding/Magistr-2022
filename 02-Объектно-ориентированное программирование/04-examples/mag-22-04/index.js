const { WorkArray } = require("./module");


console.clear();

let name_file = "./json/clients.json";
let fields = ["id", "age", "name", "gender"];
let wa = new WorkArray(name_file, fields);

// console.log(wa);

console.table(wa.sorted(
    ['gender', 'age', 'name'], 
    ['desc', 'asc', 'desc'])
);

// // objs.sort((a,b) => comp1(a,b,"age",true));
// // objs.sort((a,b) => comp2(a,b));
// objs.sort((a,b) => comp3(a,b));

// console.table(objs);
