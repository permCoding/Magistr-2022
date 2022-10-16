const clients = require("./json/clients.json").clients;

console.clear();

console.log(clients[0]);

let arr = clients
    .filter(elm => elm.age > 27)
    .sort((a,b) => a.age-b.age)
    .map(obj => { return { "age": obj.age, "name": obj.name} });

console.log(arr);

let data = JSON.stringify(arr, null, 4); // replacer null

require('fs').writeFileSync('./json/clients-sort.json', data);
