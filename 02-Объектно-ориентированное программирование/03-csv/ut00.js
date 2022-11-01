const fs = require('fs');
const csvjson = require('csvjson'); // npm i csvjson


function csv_to_json(nameFile, del=',') {
    let textCSV = fs.readFileSync(nameFile, {encoding:'utf8'});
    return csvjson.toObject(textCSV, {delimiter:del});
}


module.exports.csv_to_json = csv_to_json;
// module.exports.to_json = csv_to_json;
