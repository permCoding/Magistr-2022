const fs = require('fs')
const csvjson = require('csvjson') // npm i csvjson


const csv_to_json = (filename, del = ',') => {
	let textCSV = fs.readFileSync(filename, 'utf-8')
	return csvjson.toObject(textCSV, { delimiter: del })
}

let filename = './csv/input30.csv'
let arr = csv_to_json(filename)
let json = JSON.stringify(arr, null, 4)
console.log(json)
