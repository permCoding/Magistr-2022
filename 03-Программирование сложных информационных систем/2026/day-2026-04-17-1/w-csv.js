// чтение объектов из csv-файла (Comma-Separated Values)
const fs = require('fs');
const path = require('path');
const csvjson = require('csvjson'); // npm i csvjson

function csv_to_json(nameFile, del=',') {
    let textCSV = fs.readFileSync(nameFile, {encoding:'utf8'});
    return csvjson.toObject(textCSV, {delimiter:del});
}

let file_csv = path.join(__dirname, 'csv/curators.csv');
let array = ut.csv_to_json(file_csv);

console.table(array);