// этот файл создаёт БД с таблицей rating

const sqlite = require('sqlite3');

let fileDB = './rating.db'; // файл БД
const db = new sqlite.Database(fileDB);

let query_create = `
    CREATE TABLE IF NOT EXISTS rating (
        id INTEGER UNIQUE,
        name TEXT,
        rate INTEGER,
        PRIMARY KEY (id AUTOINCREMENT)
    );`

db.run(query_create, [], (err) => {
    if (err) { console.log(err.message); }
    else { console.log('Connected. Created.'); }
});

db.close();
