const fs = require('fs')
const csvjson = require('csvjson') // npm i csvjson


const csv_to_json = (filename, del = ',') => {
	let textCSV = fs.readFileSync(filename, 'utf-8')
	return csvjson.toObject(textCSV, { delimiter: del })
}

const get_new_name = (filename) => {
    // let rename = filename.split('.').slice(0,-1).join('.') + '.json'
    // let rename = filename.substring(0, filename.indexOf('.csv')) + '.json'
    // let rename = filename.replace(/\.[^/.]+$/, '.json')

    // rename = rename.replace('csv', 'json')

    String.prototype.replaceAll = function (search, replacement) {
    	return this.split(search).join(replacement)
    }
    let rename = filename.replaceAll('csv', 'json')

    return rename
}

let filename = './csv/input30.csv'
let arr = csv_to_json(filename)
let json = JSON.stringify(arr, null, 4)
let rename = get_new_name(filename)
console.log(rename)

fs.writeFileSync(rename, json, 'utf8')
