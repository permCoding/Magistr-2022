const sqlite = require('sqlite3').verbose();

let fileDB = './rating.db'; // файл БД
const db = new sqlite.Database(fileDB);

let query_delete = `DELETE FROM rating`;

db.run(query_delete, [], (err) => {
    if (err) console.log(err.message);
});

db.close();
