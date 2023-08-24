const { getRandomName, getRandomRate } = require("./utils");
const sqlite = require('sqlite3').verbose();

let rating = require('./rating.json'); // откуда брать данные
let fileDB = './rating.db'; // куда записывать
const db = new sqlite.Database(fileDB);

let qDrop = `DROP TABLE IF EXISTS rating`;
let qCreate = `CREATE TABLE IF NOT EXISTS rating (
    id INTEGER UNIQUE, name TEXT, rate INTEGER,
    PRIMARY KEY (id AUTOINCREMENT));`
let qInsert = `INSERT INTO rating (name, rate) VALUES (?, ?)`;
let qSelect = `SELECT COUNT (name) as count FROM rating`;

let amount = 100000; // сколько всего будет записей в таблице

console.time('gen');
db.serialize(() => {
    db.run(qDrop, []);

    db.run(qCreate, []);
    
    let stmt = db.prepare(qInsert);
    for (let i=0; i<amount; i++) {
        stmt.run(getRandomName(), getRandomRate(10000, 10000000));
    }
    stmt.finalize(() => {
        console.timeEnd('gen');

        db.all(qSelect, [], (err, count) => {
            if (err) console.log(err.message);
            console.log(`Всего записей: ${count[0].count}`);
        });    
    });

});

db.close();
// generate _10 000 записей: ~ 00 мин 30 сек ~ _300кБ
// generate 100 000 записей: ~ 13 мин 10 сек ~ 3300кБ
