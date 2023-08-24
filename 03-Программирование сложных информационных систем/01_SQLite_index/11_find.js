const sqlite = require('sqlite3').verbose();

// let fileDB = './rating.db';
let fileDB = './rating_index_rate.db';
const db = new sqlite.Database(fileDB);

let qSelect = `SELECT name, rate FROM rating WHERE rate>? AND rate<?`;

console.time('gen');

db.all(qSelect, [1000000,1100000], (err, rows) => {
    if (err) console.log(err.message);
    console.timeEnd('gen');
    console.log(`Найдено записей: ${rows.length}`);
});

db.close();

// поиск из _10 000 целочисленных записей: ~ 07 ms
// поиск из 100 000 целочисленных записей: ~ 23 ms

// добавили индекс на столбец rate
// поиск из 100 000 целочисленных записей: ~ 14 ms

/*
CREATE INDEX "index_rate" ON "rating" (
	"rate"
);
*/