const { Example } = require("./library");

let obj = new Example();

obj.nums = "   2 3 1 5 6 7 10 9     ";

console.log(obj.get_sorted());
