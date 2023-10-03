const sqlite3 = require('sqlite3').verbose() // npm install --save sqlite3
const db = new sqlite3.Database('./test01.sqlite3')

const getRandomName = () => {
	let alphavit = 'abcdefghqijklmnoprstuvwxyz'
	let len = 2 + Math.floor(Math.random() * 12)
	let name = ""
	for (var i=0; i<len; i++) {
		name += alphavit[Math.floor(Math.random() * alphavit.length)]
	}
    return name
}

const getRandomRate = (a=160, b=240) => {
	return a + Math.floor(Math.random() * ((b-a)+1))
}

const createTable = () => {
	let query = 'CREATE TABLE IF NOT EXISTS "students" ( \
		"id"	INTEGER, \
		"name"	TEXT, \
		"rate"	INTEGER, \
		PRIMARY KEY("id" AUTOINCREMENT))'
	db.run(query)
	db.close()
}

const deleteTable = () => {
	let query = "DROP TABLE IF EXISTS students"
	db.run(query)
	db.close()
}

const insertData = (count=100_000) => {
	db.serialize(function() {
		let query = 'INSERT INTO students ("name", "rate") VALUES (?, ?)'

		db.run("begin transaction")
		for (var i = 0; i < count; i++) {
			db.run(query, getRandomName(), getRandomRate())
			// if (i%100_000==0) {
			// 	db.run("commit")
			// 	db.run("begin transaction")	
			// }
		}
		db.run("commit")
	})
	db.close()
}

const createIndex = () => {
	let query = 'CREATE INDEX "index_name" ON students ("name")'
	db.run(query)
	db.close()
}

const deleteIndex = () => {
	let query = 'DROP INDEX index_name'
	db.run(query)
	db.close()
}

const select = () => {
	console.time("time")
	let query = 'SELECT id, name, rate \
		FROM students \
		WHERE name = "py"'
	db.all(query, function (err, rows) {  
		console.log(rows.length)
		console.timeEnd("time")
	});
	db.close()
}

// createTable()
// deleteTable()
insertData(10_000)
// createIndex()
// deleteIndex()

// select()

/*

100_000 records - 2,0Mb - without index - 30ms-DBBrowser - 42ms-Node
100_000 records - 3,6Mb - with___ index - 06ms-DBBrowser - 15ms-Node

200_000 records - 3,9Mb - without index - 42ms-DBBrowser - 35ms-Node
200_000 records - 7,2Mb - with___ index - 04ms-DBBrowser - 05ms-Node

подумать и предположить
на основании чего должен принимать решение разработчик
по поводу выбора какие столбцы индексировать
зависит от объёма, формы запроса, вида данных
*/