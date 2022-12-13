const { Example } = require("./library");

let obj = new Example("./json/abiturs.json");

console.log(obj.select("lastName", "city", "rating"));

console.log(obj.orderBy(["rating"], ["desc"]));
