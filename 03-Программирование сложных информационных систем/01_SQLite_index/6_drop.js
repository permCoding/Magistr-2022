const sqlite = require('sqlite3').verbose();

let fileDB = './rating.db'; // файл БД
const db = new sqlite.Database(fileDB);

let query_drop = `DROP TABLE IF EXISTS rating`;

db.run(query_drop, [], (err) => {
    if (err) console.log(err.message);
});

db.close();
