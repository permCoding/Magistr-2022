const { Example } = require("./library");

let obj = new Example("./json/clients", "clients");

// console.log(obj._arr);

obj.select("name", "age", "gender")

// console.log(obj.sorted_test("age", "desc"));

console.log(obj.sorted());

// let fields = ["gender", "age", "name"];
// let directs = ["asc", "desc", "asc"];
//
// console.log(obj.sorted(fields, directs));
