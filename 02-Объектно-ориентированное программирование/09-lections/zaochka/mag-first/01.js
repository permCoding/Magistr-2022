
let clients = require("./json/clients.json").clients;

let line = JSON.stringify(clients, null, 4);

require("fs")
    .writeFileSync("./json/_clients.json", line);
