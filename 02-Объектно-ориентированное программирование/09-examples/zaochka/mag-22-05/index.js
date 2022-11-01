const { WorkClients } = require("./module");


console.clear();

let name_file = "./json/clients.json";

let arr = ["id", "age", "name", "gender"];

let wc = new WorkClients(name_file, arr);

let list_sorted = wc.get_sort_clients(
    ['gender', 'age', 'name'], 
    ['asc', 'asc', 'desc']
);

console.table(list_sorted);

wc.send_to("./json/view.json", list_sorted);
