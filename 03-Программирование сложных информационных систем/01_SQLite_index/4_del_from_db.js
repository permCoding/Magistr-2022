const sqlite = require('sqlite3').verbose();

let fileDB = './rating.db'; // файл БД
const db = new sqlite.Database(fileDB);

let id = 1;
let query_delete = `DELETE FROM rating WHERE id=?`;

db.run(query_delete, [id], (err) => {
    if (err) console.log(err.message);
});

db.close();
