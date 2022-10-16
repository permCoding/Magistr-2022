// _.groupBy() - группировка и сортировка по признакам

const _ = require('lodash');

let names = ['Николай', 'Жора', 'Алексей', 'Алла'];

function _groups() {
    let groups = _.groupBy(names, x => x.length); // группируем в объект по длине
    console.log('groups =', groups);

    _.map(groups, 
        group => group.sort((a,b) => a>b?1:-1)); // сортируем каждую группу по имени
    console.log('groups =', groups);

    console.log('keys =', Object.keys(groups)); // ключи групп

    let arr = _
        .zip(Object.keys(groups), Object.values(groups)); // собираем массив массивов
    console.log('arr =', arr);
}

function _sort() {
    let groups = _
        .groupBy(names, x => x.length); // группируем в объект по длине
    let arr = _
        .zip(Object.keys(groups), Object.values(groups)); // собираем массив массивов

    console.table(_(arr).orderBy([0], ['desc']).value()); // сортируем массив массивов
    
    let sorted_obj = _(groups) 
        .toPairs() // объект разбиваем на пары
        .orderBy([0], ['asc']) // сортируем их по признаку
        .fromPairs() // собираем объект из пар
        .value();
    console.log(sorted_obj);
}

console.clear();
// _groups();
_sort();
