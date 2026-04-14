const sqlite = require('sqlite3').verbose();

let rating = require('./rating.json');
let userName = rating[0].name;
let userRate = rating[0].rate;

let fileDB = './rating.db'; // файл БД
const db = new sqlite.Database(fileDB);

let query = `INSERT INTO \
    rating (name, rate) \
    VALUES (?, ?)`;

db.run(query, [userName, userRate], (err) => {
    if (err) console.log(err.message);
});

db.close();
