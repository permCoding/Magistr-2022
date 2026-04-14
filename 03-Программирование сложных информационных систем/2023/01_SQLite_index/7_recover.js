const sqlite = require('sqlite3').verbose();

let rating = require('./rating.json'); // откуда брать данные
let fileDB = './rating.db'; // куда записывать
const db = new sqlite.Database(fileDB);

let qDelete = `DELETE FROM rating`;
let qInsert = `INSERT INTO rating (name, rate) VALUES (?, ?)`;
let qSelect = `SELECT COUNT (name) as count FROM rating`;

db.serialize(() => {
    db.run(qDelete, []);

    let stmt = db.prepare(qInsert);
    rating.map(item => stmt.run(item.name, item.rate));    
    stmt.finalize();

    db.all(qSelect, [], (err, count) => {
        if (err) console.log(err.message);
        console.log(`Всего записей: ${count[0].count}`);
    });
});

db.close();
