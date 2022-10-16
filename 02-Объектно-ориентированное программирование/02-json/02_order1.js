const _ = require('lodash');
const fs = require('fs');

/** разбор метода _.toString() */
function _string() {
    let arr = _.range(1, 19, 3);
    let check_odd = x => x%2 != 0;
    let res = _(arr)
        .filter(check_odd) // это генератор
        .toString(); // приведём к строке
        // .value(); // или к массиву
        // .join(", ");
    console.log(res);
}

// =============

/** разбор метода _.sortBy() + forEach */
function _sort() {
    const printItem = (item, index) => console.log(index, item);
    let arr_lines = ['12', '8', '8.2', '8.3', '10'];
    _(arr_lines)
        .map(_.toNumber)
        .sortBy()
        .reverse()
        .forEach(printItem);
}

/** разбор метода _.orderBy() 
 * подключать json можно как модуль
*/
function _order() {
    let users = require('./json/users.json'); // читаем json
    let res = _(users)
        .filter(u => u.email.split('.').pop() === 'biz') // по домену biz
        .map(obj => _.zipObject(['name', 'email'], [obj.name, obj.email]))
        .orderBy(['name'], ['desc'])
        .value();
    console.table(res);
}

console.clear();
// _string();
// _sort();
_order();
