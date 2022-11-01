// чтение объектов из csv-файла
// функции в модуле

/* CSV (Comma-Separated Values) представляет собой файл текстового формата, 
 * который предназначен для структурированного хранения табличных данных.
 */

const path = require('path');
const ut = require('./ut00');

let file_csv; // файл с данными в формате csv

// file_csv = __dirname + '/csv/curators.csv';
file_csv = path.join(__dirname, 'csv/curators.csv');
// file_csv = './csv/curators.csv';

let array = ut.csv_to_json(file_csv);

console.table(array);
