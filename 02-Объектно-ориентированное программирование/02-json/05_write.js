const _ = require('lodash');
const fs = require('fs');

function write_1(mens) {
    fs
        .writeFileSync(
            './json/data_check.json', 
            JSON.stringify(_.orderBy(mens, ['name','age'], ['asc','desc']), null, 2)
        );
        console.log('- file saved');
}

function write_2(mens, new_items) {
    // mens.push(...new_items); // можно так
    mens = [...mens,...new_items]; // можно эдак
    fs
        .writeFileSync(
            './json/data_check.json', 
            JSON.stringify(_(mens).orderBy(['name','age'], ['asc','desc']).value(), null, 4)
        );
    console.log('- file saved');
}

console.clear();

let objs = [
    { "name": "Яна", "age": 25 },
    { "name": "Яна", "age": 55 },
    { "name": "Алекс", "age": 21 }
]
let mens = null;
try {
    mens = require('./json/mens.json'); // проверить изменив имя файла
} catch (error) {
    console.error(error.message);
    mens = undefined;
}
finally {
    console.log('-\n'.repeat(5));
}

// write_1(mens);
write_2(mens, objs);
