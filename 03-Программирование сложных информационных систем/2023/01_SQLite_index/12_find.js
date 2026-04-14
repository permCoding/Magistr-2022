const sqlite = require('sqlite3').verbose();

// let fileDB = './rating.db';
let fileDB = './rating_index_name.db';
const db = new sqlite.Database(fileDB);

let qSelect = `SELECT rate FROM rating WHERE name = ?`;

console.time('gen');

let name = 'Rumkqouj';
db.get(qSelect, [name], (err, row) => {
    if (err) console.log(err.message);
    console.timeEnd('gen');
    console.log(`${name} : ${row.rate}`);
});

db.close();

// поиск из _10 000 текстовых записей: ~ 07 ms
// поиск из 100 000 текстовых записей: ~ 17 ms

// добавили индекс на столбец name
// поиск из 100 000 текстовых записей: ~ 04 ms

/*
CREATE INDEX "index_name" ON "rating" (
	"name"
);
*/
