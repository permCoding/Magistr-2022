const sqlite = require('sqlite3').verbose();

let rating = require('./rating.json'); // откуда брать данные
let fileDB = './rating.db'; // куда записывать
const db = new sqlite.Database(fileDB);

let qDrop = `DROP TABLE IF EXISTS rating`;
let qCreate = `
    CREATE TABLE IF NOT EXISTS rating (
        id INTEGER UNIQUE,
        name TEXT,
        rate INTEGER,
        PRIMARY KEY (id AUTOINCREMENT)
    );`
let qInsert = `INSERT INTO rating (name, rate) VALUES (?, ?)`;
let qSelect = `SELECT COUNT (name) as count FROM rating`;

db.serialize(() => {
    db.run(qDrop, []);

    db.run(qCreate, []);
    
    let stmt = db.prepare(qInsert);
    rating.map(item => stmt.run(item.name, item.rate));
    stmt.finalize();

    db.all(qSelect, [], (err, count) => {
        if (err) console.log(err.message);
        console.log(`Всего записей: ${count[0].count}`);
    });
});

db.close();
