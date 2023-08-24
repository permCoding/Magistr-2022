const sqlite = require('sqlite3').verbose();

let rating = require('./rating.json');

let fileDB = './rating.db'; // файл БД
const db = new sqlite.Database(fileDB);

let query = `INSERT INTO \
    rating (name, rate) \
    VALUES (?, ?)`;
    
db.serialize(() => {
    let stmt = db.prepare(query);
    for (let item of rating) {
        stmt.run(item.name, item.rate);
    }
    stmt.finalize();
});

db.close();
