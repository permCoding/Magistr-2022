const { Exam } = require("./library");

let obj = new Exam("./json/abiturs.json");

console.log(obj.select("lastName", "city", "rating"));

console.log(obj.orderBy(["rating"], ["desc"]));
