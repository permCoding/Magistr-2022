const fs = require('fs')
const csvjson = require('csvjson') // npm i csvjson


function csv_to_json(filename, del = ',') {
	let textCSV = fs.readFileSync(filename, 'utf-8')
	return csvjson.toObject(textCSV, { delimiter: del })
}

let filename = './csv/input4.csv'
let arr = csv_to_json(filename)
let json = JSON.stringify(arr, null, 4)
// console.log(json)

var path = require('path')
var fn = path.basename(__filename)
// console.log(fn)

// filename = filename.split('.').slice(0,-1).join('.') + '.json'
// filename = filename.substring(0, filename.indexOf('.csv'))
// filename = filename.replace(/\.[^/.]+$/, '.json')

// filename = filename.replace('csv', 'json')

String.prototype.replaceAll = function (search, replacement) {
	return this.split(search).join(replacement)
}

filename = filename.replaceAll('csv', 'json')

console.log(filename)

fs.writeFileSync(filename, json, 'utf8')
