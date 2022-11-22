const comparator = (a, b, fields, directs) => {
    // 1 точка останова - должна возвращать ответ
    // 2 шаг рекурсии - вызов функции с оставшимися пар-ми для сортировки
    let n = fields.length;
    let f = fields[0];
    let d = directs[0] === 'asc'? +1: -1;
    if ((n===1) || (a[f] !== b[f])) {
        return d * (a[f] > b[f]? +1: -1);
    }
    else {
        return comparator(a, b, fields.slice(1,), directs.slice(1,));
    }
}

const orderBy = (fields, directs) => {
    return arr.sort((a,b) => comparator(a,b,fields,directs));
}

let arr = require('./json/clients.json');
let arr_s = orderBy(["gender","age","name"],["asc","desc","asc"]);
for (let obj of arr_s) {
    console.log(obj);
}

// csvjson
