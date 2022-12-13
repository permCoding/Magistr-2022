const comparator = (a, b, fields, directs) => {
    let dict = { 'asc': +1, 'desc': -1 };
    let d = dict[directs[0]], f = fields[0];

    // 1 точка останова - должна возвращать ответ
    if ((fields.length === 1) || (a[f] !== b[f])) {
        return d * (a[f] > b[f]? +1: -1); 
    }
    // 2 шаг рекурсии - вызов функции с оставшимися пар-ми для сортировки
    return comparator(a, b, fields.slice(1,), directs.slice(1,));
}

const orderBy = (fields, directs) => {
    return arr.sort((a,b) => comparator(a,b,fields,directs));
}


let arr = require('./json/clients.json');

// orderBy(["gender","age","name"],["asc","desc","asc"])
//     .forEach(elm => console.log(elm));

orderBy(["address.city","address.street","name"],["asc","asc","asc"])
    .forEach(elm => console.log(elm));

// a.address.residence.home
